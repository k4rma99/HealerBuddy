import { NextResponse } from "next/server";
import Therapist from "@/mongoose/therapistSchema"; // Adjust the path as needed
import { connectMongoose } from "@/lib/utils/conectMongo";

const client = connectMongoose("/UserInformation");

export async function GET(
  req: any,
  { params }: { params: { userId: String } }
) {
  const userId = params.userId;

  try {
    const therapist = await Therapist.findById(userId);
    if (!therapist) {
      return NextResponse.json({ error: "Therapist not found", status: 404 });
    }
    NextResponse.json({ data: therapist, status: 200 });
  } catch (error) {
    console.error(error);
    NextResponse.json({ error: "Something went wrong", status: 500 });
  }
}

export async function POST(
  req: any,
  { params }: { params: { userId: String } }
) {
  const userId = params.userId;
  const updatedUser = req.body;

  try {
    (await client).db("OnboardingForm").collection("ProviderOnboardingData");
    const therapist = await Therapist.findByIdAndUpdate(userId, updatedUser, {
      new: true,
    });
    if (!therapist) {
      return NextResponse.json({ error: "Therapist not found", status: 404 });
    }
    NextResponse.json({ data: therapist, status: 200 });
  } catch (error) {
    console.error(error);
    NextResponse.json({ error: "Failed to update therapist", status: 500 });
  }

  return NextResponse.json(updatedUser);
}
