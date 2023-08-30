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
        <>
            <div className="relative h-screen">
                <title>Dashboard</title>
                <Header params={{}} />
                <SideNav params={{}}/>
            </div>
        </>
    )
}