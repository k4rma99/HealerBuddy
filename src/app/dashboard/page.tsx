"use client"

import React, { useEffect, useState } from "react";
import {
    MdOutlineSpaceDashboard,
    MdOutlineMoreHoriz,
    MdOutlineSettings,
    MdOutlineLogout,
} from "react-icons/md";

import logo from "@/assets/images/logo-text-v24.png"
import profilePic from "@/assets/images/profile-image-stock.webp"
import { SideNav } from "./_components/sidenav/sidenav";
import { MainDashboard } from "./_components/mainPage/main";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Calendar } from "./_components/calendar/calendar";
import { Payment } from "./_components/payments/payment";
import { Settings } from "./_components/settings/settings";

const patientData = [
    {
        id: "@123",
        profilePic: profilePic,
        name: "test",
        lastMeeting: "2012-12-12",
        nextMeeting: "2012-12-12",
        gender: "F",
        age: 20,
        sessionCount: 12,
        notesData: ""
    },
    {
        id: "@546",
        profilePic: profilePic,
        name: "test",
        lastMeeting: "2012-12-12",
        nextMeeting: "2012-12-12",
        gender: "F",
        age: 20,
        sessionCount: 12,
        notesData: ""
    },
    {
        id: "@789",
        profilePic: profilePic,
        name: "test",
        lastMeeting: "2012-12-12",
        nextMeeting: "2012-12-12",
        gender: "F",
        age: 20,
        sessionCount: 12,
        notesData: ""
    }
]

const menuItems = [
    {
        name: "Dashboard",
        icon: <MdOutlineSpaceDashboard className="text-2xl text-gray-600 group-hover:text-white " />,
        containerClass: "dashboard"
    },
    {
        name: "Patients",
        icon:
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-stack" width={25} height={25} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <polyline points="12 4 4 8 12 12 20 8 12 4" />
                <polyline points="4 12 12 16 20 12" />
                <polyline points="4 16 12 20 20 16" />
            </svg>,
        containerClass: "patient"
    },
    {
        name: "Schedule",
        icon:
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width={25} height={25} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
            </svg>,
        containerClass: "schedule"
    },
    {
        name: "Payments",
        icon:
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width={25} height={25} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
            </svg>,
        containerClass: "payment"
    },
]


export function Dashboard({ children }): React.JSX.Element {

    const [activeComponent, setActiveComponent] = useState(<MainDashboard />);

    return (
        <div className="flex h-screen">
            <SideNav onComponentChange={setActiveComponent} />
            <main className="md:flex-grow absolute md:relative z-0 p-10">
                {activeComponent}
            </main>
        </div>
    )
}