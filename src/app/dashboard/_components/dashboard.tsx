import { signOut, useSession } from "next-auth/react";
import React, { Component, ReactNode } from "react";
import Image from "next/image";

import profilePic from "@/assets/images/profile-image-stock.jpg"
import notes from "@/assets/icons/notes.svg"
import Script from "next/script";
import { InlineWidget } from "react-calendly";

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

    return (
        <div className="div">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 w-full max-w-6xl">

                {/* <!-- Tile 1 --> */}
                <div className="flex items-center p-4 bg-fi-secondary rounded">
                    <div className="flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded">
                        <svg className="w-6 h-6 fill-current text-green-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div className="flex-grow flex flex-col ml-4">
                        <span className="text-xl font-bold text-white">$8,430</span>
                        <div className="flex items-center justify-between">
                            <span className="text-white">Revenue last 30 days</span>
                            <span className="text-green-500 text-sm font-semibold ml-2">+12.6%</span>
                        </div>
                    </div>
                </div>

                {/* <!-- Tile 2 --> */}
                <div className="flex items-center p-4 bg-fi-secondary rounded">
                    <div className="flex flex-shrink-0 items-center justify-center bg-red-200 h-16 w-16 rounded">
                        <svg className="w-6 h-6 fill-current text-red-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div className="flex-grow flex flex-col ml-4">
                        <span className="text-xl font-bold text-white">211</span>
                        <div className="flex items-center justify-between">
                            <span className="text-white">Clients last 30 days</span>
                            <span className="text-red-500 text-sm font-semibold ml-2">-8.1%</span>
                        </div>
                    </div>
                </div>

                {/* <!-- Tile 3 --> */}
                <div className="flex items-center p-4 bg-fi-secondary rounded">
                    <div className="flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded">
                        <svg className="w-6 h-6 fill-current text-green-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div className="flex-grow flex flex-col ml-4">
                        <span className="text-xl font-bold text-white">140</span>
                        <div className="flex items-center justify-between">
                            <span className="text-white">Meetings last 30 days</span>
                            <span className="text-green-500 text-sm font-semibold ml-2">+28.4%</span>
                        </div>
                    </div>
                </div>

            </div>


            <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-3 w-full">

                {/* PatientsLists */}
                <div className="overflow-x-auto pt-10">
                    <table className="table bg-fi-primary text-black">
                        {/* head */}
                        <thead className="bg-fi-secondary text-white">
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th></th>
                                <th>Name</th>
                                <th>ID</th>
                                <th>Next Session</th>
                                <th>Sessions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                patientData.map(data => {
                                    return (
                                        <tr>
                                            <th>
                                                <label>
                                                    <input type="checkbox" className="checkbox bg-fi-secondary checked:bg-fi-white" />
                                                </label>
                                            </th>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle h-12">
                                                            <Image
                                                                src={data.profilePic}
                                                                alt=""
                                                                width={10}
                                                                height={10}
                                                                className=""
                                                            />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{data.name}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{data.id}</td>
                                            <td>{data.nextMeeting}</td>
                                            <td>{data.sessionCount}</td>
                                            <th>
                                                <button className="btn btn-ghost btn-xs"><Image src={notes} alt="" width={30} height={30} /></button>
                                            </th>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>


                {/* Schedule */}
                <InlineWidget url="https://calendly.com/vkn-vinay0?hide_landing_page_details=true&hide_gdpr_banner=true" />
            </div>
        </div>
    )
}