import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();

  try {
    const database = client.db("yourDatabaseName");
    const collection = database.collection("yourCollectionName");

    await collection.insertOne(req.body);

    res.status(201).json({ message: "Data submitted successfully" });
  } catch (error) {
    console.error("Error submitting data:", error);
    res.status(500).json({ message: "Error submitting data" });
  } finally {
    await client.close();
  }
}
