import { signOut, useSession } from "next-auth/react";
import React, { Component, ReactNode } from "react";
import Image from "next/image";

import profilePic from "@/assets/images/profile-image-stock.jpg"
import notes from "@/assets/icons/notes.svg"
import Script from "next/script";
import { InlineWidget } from "react-calendly";
import { ProfileSide } from "./profileSide";

export const DashboardData = () => {

    const username = process.env.NEXT_PUBLIC_CALENDLY_USERNAME;
    const showDetails: number = process.env.NEXT_PUBLIC_CALENDLY_SHOW_DETAILS == "false" ? 1 : 0;
    const showCookies: number = process.env.NEXT_PUBLIC_CALENDLY_SHOW_COOKIES == "false" ? 1 : 0;

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

    const stats = [
        {
            name: "Sessions",
            icon:
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-4 h-7 w-16"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>,
            count: 100,
            change: compareWithLastMonth()
        },
        {
            name: "Sessions",
            icon: "",
            count: 100,
            change: compareWithLastMonth()
        },
        {
            name: "Sessions",
            icon: "",
            count: 100,
            change: compareWithLastMonth()
        },
        {
            name: "Sessions",
            icon: "",
            count: 100,
            change: compareWithLastMonth()
        }
    ]

    function compareWithLastMonth() {
        return 1
    }

    return (
        <div className="main_dashboard flex md:grid md:grid-cols-[500px_minmax(100px,_1fr)] lg:grid-cols-[700px_minmax(100px,_1fr)] ">
            <div className="main_content">
                <h1 className="text-2xl font-black text-gray-800">Good Morning!</h1>
                <p className="mb-6 text-gray-600"></p>

                {/* Stats */}
                <div className="flex flex-wrap w-full md:grid md:grid-cols-4 md:justify-between py-10">
                    {
                        stats.map((s) => {
                            return (
                                <div className="flex w-72">
                                    <div className="flex w-full max-w-full flex-col break-words rounded-lg border border-gray-100 bg-white text-gray-600 shadow-lg">
                                        <div className="p-3">
                                            <div className="absolute -mt-10 h-16 w-16 rounded-xl bg-gradient-to-tr from-emerald-700 to-emerald-500 text-center text-white shadow-lg">
                                                {s.icon}
                                            </div>
                                            <div className="pt-1 text-right">
                                                <p className="text-sm font-light capitalize">{s.name}</p>
                                                <h4 className="text-2xl font-semibold tracking-tighter xl:text-2xl">
                                                    {s.count}
                                                </h4>
                                            </div>
                                        </div>
                                        <hr className="opacity-50" />
                                        <div className="p-4">
                                            <p className="font-light">
                                                <span className="text-sm font-bold text-red-600">{s.change}</span>vs last
                                                month
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>

            <div className="m-10 mt-0 max-w-sm profile justify-self-end">
                <ProfileSide />
            </div>

        </div>
    )
}