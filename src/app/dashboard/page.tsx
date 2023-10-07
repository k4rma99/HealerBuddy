"use client";

import { signOut, useSession } from "next-auth/react";
import React, { Component, ReactElement, ReactNode, useEffect, useState } from "react";
import Header from "./_components/header/header";
import ReactDomServer from 'react-dom/server';

import SideNav from "./_components/sidenav/sidenav";
import Image from "next/image";

import profilePic from "@/assets/images/profile-image-stock.jpg"
import notes from "@/assets/icons/notes.svg"
import { DashboardData } from "./_components/dashboard";
import { PatientData } from "./_components/patient";

import "./dash.css"
import { SupportData } from "./_components/support";

interface IMenuItems {
    [key: string]: any
}

export default function Dashboard({ params }: {
    params: { id: string }
}) {

    const { data: session } = useSession();
    const [container, setContainer] = useState(<DashboardData />)

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
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <rect x={4} y={4} width={6} height={6} rx={1} />
                    <rect x={14} y={4} width={6} height={6} rx={1} />
                    <rect x={4} y={14} width={6} height={6} rx={1} />
                    <rect x={14} y={14} width={6} height={6} rx={1} />
                </svg>,
            containerClass: "dashboard"
        },
        {
            name: "Patients",
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-stack" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="12 4 4 8 12 12 20 8 12 4" />
                    <polyline points="4 12 12 16 20 12" />
                    <polyline points="4 16 12 20 20 16" />
                </svg>,
            containerClass: "patient"
        },
        {
            name: "Support",
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                </svg>,
            containerClass: "support"
        }
    ]

    const mainContent = {
        "dashboard": <DashboardData />,
        "patients": <PatientData />
    }

    useEffect(() => {
        if(window.onload){
            document.getElementsByClassName("dashboard_content")[0].innerHTML = ReactDomServer.renderToString(container);
        }
    }, [])
    
    function handleSideNavClick(containerClass: string) {
        switch (containerClass) {
            case "dashboard": {
                setContainer(<DashboardData />)
                break;
            }
            case "patient": {
                setContainer(<PatientData />)
                break;
            }
            case "support": {
                setContainer(<SupportData />)
                break;
            }
        }
        document.getElementsByClassName("dashboard_content")[0].innerHTML = ReactDomServer.renderToString(container);
    }

    return (
        <main>
            <div className="relative h-screen overflow-hidden">
                <title>Dashboard</title>
                <Header params={{}} />

                {/* Sidenav */}
                <div className="flex flex-col flex-no-wrap h-full md:flex-row">
                    {/* Sidebar starts */}
                    {/* Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] */}
                    <div className="sidenav w-64 absolute md:relative shadow md:h-full flex-col hidden sm:flex">
                        <div className="px-8 pt-8">
                            <div className="image overflow-hidden">
                                <Image
                                    src={profilePic}
                                    alt=""
                                    width={300}
                                    height={300}
                                    className="rounded-xl h-auto w-full"
                                />
                            </div>
                            <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">Jane Doe</h1>
                            <h3 className="text-gray-600 font-lg text-semibold leading-6">Owner at Her Company Inc.</h3>
                            <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">Lorem ipsum dolor sit amet
                                consectetur adipisicing elit.
                                Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt</p>
                        </div>
                        <div className="px-8">
                            <ul className="mt-10">
                                {
                                    menuItems.map(item => {
                                        return (
                                            <li className="flex w-full justify-between text-green-900 hover:text-gray-500 cursor-pointer items-center mb-6" onClick={() => handleSideNavClick(item.containerClass)}>
                                                <div className="flex items-center">
                                                    {item.icon}
                                                    <span className="text-sm  ml-2">{item.name}</span>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>

                    {/* Mobile SideNav */}
                    <div className="px-8 relative shadow w-screen md:hidden">
                        <ul className="mt-5 flex md:hidden">
                            {
                                menuItems.map(item => {
                                    return (
                                        <li className="flex w-full justify-between text-green-900 hover:text-gray-500 cursor-pointer items-center mb-6" onClick={() => handleSideNavClick(item.containerClass)}>
                                            <div className="flex items-center">
                                                {item.icon}
                                                <span className="text-sm  ml-2">{item.name}</span>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    {/* Sidebar ends */}


                    {/* Remove class [ h-64 ] when adding a card block */}
                    <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
                        {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
                        <div className="dashboard_content w-full h-full rounded border-dashed border-2 border-gray-300"></div>
                    </div>
                </div>
            </div>
        </main>
    )
}