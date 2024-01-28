import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

const onboardingDatabaseURI = process.env.MONGODB_URI + "/OnboardingForm";
const userDataDatabaseURI = process.env.MONGODB_URI + "/UserInformation";

export async function POST(
  req: any,
  { params }: { params: { userId: String } }
) {
  const userId = params.userId;

  const onboardingClient = new MongoClient(onboardingDatabaseURI);
  const userDataClient = new MongoClient(userDataDatabaseURI);
  try {
    await Promise.all([onboardingClient.connect(), userDataClient.connect()]);

    const checkIfExists = await userDataClient
      .db()
      .collection("ProviderInformation")
      .findOne({ userId: userId });

    if (checkIfExists) {
      return NextResponse.json({
        message: "Data migrated",
        userData: checkIfExists,
      });
    }

    // Fetch onboarding data for the user (replace with your logic to identify the user)
    const onboardingData = await onboardingClient
      .db()
      .collection("ProviderOnboardingData")
      .findOne({ userId: userId });

    if (!onboardingData) {
      return NextResponse.json({
        message: "Onboarding data not found for the user",
      });
    }

    // Map data to the desired structure for the userData collection
    const userData = {
      userId: onboardingData?.userId,

      // bio
      name: onboardingData?.name,
      email: onboardingData?.email,
      pronouns: onboardingData?.pronouns,
      gender: onboardingData?.gender,
      age: onboardingData?.age,
      dob: onboardingData?.dateOfBirth,
      ethnicity: onboardingData?.ethnicity,

      // profile info
      profilePhoto: onboardingData?.profilePhoto,
      videoMessage: onboardingData?.videoMessage,
      bioMessage: onboardingData?.bioMessage,
      spespecialtiesic: onboardingData?.specialties,
      approaches: onboardingData?.approaches,
      expertise: onboardingData?.expertise,

      // crpo
      crpoRegNumber: onboardingData?.crpo,
      resume: onboardingData?.resume,

      // other data
      patients: [],
      appointments: [],
      calendarData: [],
      reviews: [],
    };

    // Insert mapped data into the userData collection
    await userDataClient
      .db()
      .collection("ProviderInformation")
      .insertOne(userData);

    return NextResponse.json({
      message: "User data migrated successfully",
      userData: userData,
    });
  } catch (error) {
    console.error("Migration error:", error);
    return NextResponse.json({ message: "Failed to migrate user data" });
  } finally {
    await Promise.all([onboardingClient.close(), userDataClient.close()]);
  }
}

export async function GET() {
  return NextResponse.json("Status");
}
