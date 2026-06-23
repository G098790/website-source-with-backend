import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://navadeepmukkala99_db_user:Nava090@cluster0.zsmslhd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function test() {
  try {
    const client = new MongoClient(uri);

    console.log("Trying connection...");
    await client.connect();

    console.log("✅ Connected successfully");

    const db = client.db("mansi_tours");

    const result = await db.collection("test").insertOne({
      message: "MongoDB test",
      createdAt: new Date(),
    });

    console.log("Inserted:", result.insertedId);

    await client.close();
  } catch (err) {
    console.error("❌ Error:", err);
  }
}

test();