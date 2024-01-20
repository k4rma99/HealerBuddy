import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(req: any, { params }) {
  if (!process.env.MONGODB_URI) throw new Error("Environment variable not set");

  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();

  const userId = params.userId;
  const body = await req.json();

  if (!userId) {
    return NextResponse.json({ message: "Missing userId", status: 500 });
  }

  try {
    const database = client.db("OnboardingForm");
    const collection = database.collection("ProviderOnboardingData");

    await collection.insertOne({ userId, ...body });

    return NextResponse.json({ message: "Data submitted successfully" });
  } catch (error) {
    console.error("Error submitting data:", error);
    return NextResponse.json({ message: "Error submitting data" });
  } finally {
    await client.close();
  }
}

export async function GET(req: any, res: any) {
  return NextResponse.json({ status: 200 });
}
