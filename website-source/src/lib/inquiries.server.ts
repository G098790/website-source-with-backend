import { MongoClient, ObjectId } from "mongodb";
import type { Inquiry } from "./inquiries";

declare global {
  // eslint-disable-next-line no-var
  var __mansiMongoClient: MongoClient | undefined;
}

function getMongoClient() {
  // Some hosting dashboards store env values with the "KEY=" prefix pasted in by
  // mistake (e.g. "MONGODB_URI=mongodb+srv://..."), so strip that if present.
  // Also trim, since .env files saved with CRLF line endings leave a trailing \r
  // on the value, which breaks the connection string.
  const uri = process.env.MONGODB_URI?.replace(/^MONGODB_URI=/, "").trim();

  if (!uri) throw new Error("MONGODB_URI is not configured");

  globalThis.__mansiMongoClient ??= new MongoClient(uri);
  return globalThis.__mansiMongoClient;
}

async function alertAdmin(inquiry: Inquiry, inquiryId: ObjectId) {
  const apiKey = process.env.RESEND_API_KEY;
  const adminEmail = process.env.ADMIN_EMAIL;
  if (!apiKey || !adminEmail) return "stored" as const;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.ALERT_FROM_EMAIL ?? "Mansi Tours <onboarding@resend.dev>",
      to: [adminEmail],
      subject: `New inquiry: ${inquiry.pickup} to ${inquiry.destination}`,
      text: [
        "A new travel inquiry has been received.",
        `Reference: ${inquiryId.toHexString()}`,
        `Name: ${inquiry.name}`,
        `Phone: ${inquiry.phone}`,
        `Email: ${inquiry.email || "Not provided"}`,
        `Trip: ${inquiry.pickup} to ${inquiry.destination}`,
        `Travel date: ${inquiry.date || "Not provided"}`,
        `Service: ${inquiry.service}`,
        `Travelers: ${inquiry.travelers}`,
        `Message: ${inquiry.message || "None"}`,
      ].join("\n"),
    }),
  });

  if (!response.ok) throw new Error(`Admin email failed (${response.status})`);
  return "emailed" as const;
}

export async function saveInquiry(data: Inquiry) {
  const db = getMongoClient().db(process.env.MONGODB_DB ?? "mansi_tours");
  const createdAt = new Date();
  const result = await db.collection("inquiries").insertOne({ ...data, status: "new", createdAt });
  const notification = await db.collection("admin_notifications").insertOne({
    type: "new_inquiry",
    inquiryId: result.insertedId,
    title: `New inquiry from ${data.name}`,
    message: `${data.pickup} to ${data.destination} for ${data.travelers} traveler(s)`,
    read: false,
    emailStatus: "pending",
    createdAt,
  });

  try {
    const emailStatus = await alertAdmin(data, result.insertedId);
    await db.collection("admin_notifications").updateOne(
      { _id: notification.insertedId },
      { $set: { emailStatus } },
    );
  } catch (error) {
    console.error("Inquiry saved, but admin email could not be sent", error);
    await db.collection("admin_notifications").updateOne(
      { _id: notification.insertedId },
      { $set: { emailStatus: "failed" } },
    );
  }

  return { success: true, reference: result.insertedId.toHexString() };
}
