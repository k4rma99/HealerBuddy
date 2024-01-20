import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { hash } from "bcrypt";
import { RoleType } from "@/lib/enums";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password, role } = body;

    const userExists = await db.user.findUnique({
      where: { email: email },
    });

    if (userExists) {
      return NextResponse.json(
        { user: null, message: "User exists" },
        { status: 409 }
      );
    }

    const newUser = await db.user.create({
      data: {
        email: email,
        password: await hash(password, 10),
        role: role ? (role as RoleType) : undefined,
      },
    });

    console.log("Received roleType:", role);

    return NextResponse.json(
      { userId: newUser.userId, user: newUser },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}
