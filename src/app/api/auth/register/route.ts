import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { hash } from "bcrypt";
import { RoleType } from "@/lib/enums";


export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password, roleType } = body;

    const userExists = await db.user.findUnique({
      where: { email: email },
    });

    if (userExists) {
      return NextResponse.json(
        { user: null, message: "User exists" },
        { status: 409 }
      );
    }

    console.log(body);
    console.log('Received roleType:', roleType);

    const newUser = await db.user.create({
      data: {
        email: email,
        password: await hash(password, 10),
        role: roleType,
      },
    });

    console.log('Received roleType:', roleType);

    return NextResponse.json({ id: newUser.userId, user: newUser }, { status: 201 });
  } catch (error) {
    return NextResponse.json(error);
  }
}
