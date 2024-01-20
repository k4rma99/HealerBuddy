import nodemailer from "nodemailer";
import { generateVerificationToken } from "@/lib/utils/generateVerificationoken"; // Adjust path if needed
import { NextResponse } from "next/server";
const Transport = require("nodemailer-brevo-transport");

// Replace with your email service provider's configuration
// const transporter = nodemailer.createTransport({
//   host: "smtp-relay.brevo.com",
//   port: 587,
//   secure: false,
//   auth: {
//     // TODO: replace `user` and `pass` values from smtp site
//     user: "k4.rma321@gmail.com",
//     pass: "dHKpzhr6JZn2ywxq",
//   },
//   tls: { ciphers: "SSLv3" },
// }); // Or TLSv1, TLSv1.1, TLSv1.2, TLSv1.3
const transporter = nodemailer.createTransport(
  new Transport({ apiKey: "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`" })
);

export async function POST(req: any, res: any) {
  const userData = await req.json();

  console.log(userData);

  // Generate verification token and link
  const verificationToken = generateVerificationToken(userData.userId);
  const verificationLink = `https://healerbuddy.com/verify-email/${userData.userId}/${verificationToken}`;

  // Construct email content
  const mailOptions = {
    from: "vinay.kn2314@gmail.com",
    to: userData.email, // Replace with user's email
    subject: "Verify your email address",
    text: `Click the link to verify your email: ${verificationLink}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({
      message: "Verification email sent",
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "Failed to send verification email",
      status: 500,
    });
  }
}
