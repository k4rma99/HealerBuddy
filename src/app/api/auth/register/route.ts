import { NextResponse } from "next/server";
import {connectMongoDB} from "@/lib/mongodb";
import User from "@/models/user";
import bcrypt from "bcryptjs";

export async function POST(req: any){
    try{
        const {name, email, password, isProvider} = await req.json();
        const hashedPwd = await bcrypt.hash(password, 10);
        await connectMongoDB(isProvider);
        await User.create({name, email, password: hashedPwd, isProvider: isProvider})

        return NextResponse.json({message: "User registered"}, {status: 200})
    } catch (error) {
        return NextResponse.json("Error while reg", {status: 500})
    }
}