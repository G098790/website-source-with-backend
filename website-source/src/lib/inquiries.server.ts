import { MongoClient } from "mongodb";
import type { Inquiry } from "./inquiries";

declare global {
  // eslint-disable-next-line no-var
  var __mansiMongoClient: MongoClient | undefined;
}

function getMongoClient() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("MONGODB_URI is not configured");
  }

  globalThis.__mansiMongoClient ??= new MongoClient(uri);

  return globalThis.__mansiMongoClient;
}

export async function saveInquiry(data: Inquiry) {
  console.log("MONGODB_URI:", process.env.MONGODB_URI ? "FOUND" : "MISSING");
  console.log("MONGODB_DB:", process.env.MONGODB_DB);
  console.log("URI:", process.env.MONGODB_URI);

 const client = getMongoClient();

console.log("Trying MongoDB connection...");

try {
  await client.connect();
  console.log("MongoDB connected successfully");
} catch (error) {
  console.error("MongoDB connection failed:", error);
  throw error;
}

const db = client.db(process.env.MONGODB_DB ?? "mansi_tours");

  const createdAt = new Date();

  const result = await db.collection("inquiries").insertOne({
    ...data,
    status: "new",
    createdAt,
  });

  console.log("Inquiry saved:", result.insertedId.toHexString());

  return {
    success: true,
    reference: result.insertedId.toHexString(),
  };
}