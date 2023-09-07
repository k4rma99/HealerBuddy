"use client";

import { signOut, useSession } from "next-auth/react";
import React, { Component, ReactNode } from "react";
import Header from "./_components/header/header";
import SideNav from "./_components/sidenav/sidenav";

export default function Dashboard({ params }: {
    params: { id: string }
}) {

    const { data: session } = useSession();


    return (
        <main>
            <div className="relative h-screen">
                <title>Dashboard</title>
                <Header params={{}} />
                {/* <SideNav params={{}}/> */}
            </div>
            <div className="mx-20 text-center z-10 absolute top-1/2  text-black self-center h-screen">
                <h1 className="text-4xl mb-5">Your Details Have Been Registered. Please wait till the product launch to officially begin your journey with HealerBuddy.</h1>
                <span className="relative left-fullflex flex-row"><h3 className="text-xl" >Get notified via your email</h3>
                <input type="email" className="bg-slate-100 text-center text-black w-1/3 h-16 mt-5 border rounded-lg" /></span>
            </div>
        </main>
    )
}