import { NextRequest, NextResponse } from "next/server";

// export async function middleware(request) {
//   const session = await request.getSession();

//   if (!session) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

//   const pathname = request.nextUrl.pathname;
//   if (pathname === "/dashboard") {
//     if (!session.user.role) {
//       console.log("middle");
//       return NextResponse.redirect(new URL("/", request.url));
//     }
//   }

//   return NextResponse.next();
// }

const protectedroutes = ['/dashboard']

export default async function middleware(request: any){
    const session = await request.getSession();
    if(!session && protectedroutes.includes(request.nextUrl.pathname)){
        const absoluteUrl = new URL("/", request.nextUrl.oigin)
        return NextResponse.redirect(absoluteUrl.toString())
    }
}