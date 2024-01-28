import { MongoClient } from "mongodb";

export async function connectMongoose(dbName: string) {
  if (!process.env.MONGODB_URI) throw new Error("Environment variable not set");

  const client = new MongoClient(process.env.MONGODB_URI + dbName);
  await client.connect();
  return client;
}
