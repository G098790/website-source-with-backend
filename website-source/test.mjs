import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://navadeepmukkala99_db_user:YOUR_PASSWORD@cluster0.zsmslhd.mongodb.net/mansi_tours?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

try {
  await client.connect();
  console.log("✅ Connected successfully!");
  console.log(await client.db().admin().ping());
} catch (err) {
  console.error(err);
} finally {
  await client.close();
}