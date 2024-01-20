import { v4 as uuidv4 } from "uuid";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const generateVerificationToken = async (userId: string) => {
  const token = uuidv4().replace(/-/g, '');
  const expirationTime = new Date();
  expirationTime.setHours(expirationTime.getHours() + 1);

  try {
    await prisma.emailToken.create({
      data: {
        userId,
        token,
        expiresAt: expirationTime, // Expires in 1 hour
      },
    });
  } catch (error) {
    console.error("Error creating verification token:", error);
    throw error;
  }

  return token;
};
