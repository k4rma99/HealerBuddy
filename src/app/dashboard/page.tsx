"use client";

import { signOut, useSession } from "next-auth/react";
import React, { Component, ReactElement, ReactNode, useEffect, useRef, useState } from "react";
import Header from "./_components/header/header";
import ReactDomServer from 'react-dom/server';

import SideNav from "./_components/sidenav/sidenav";
import Image from "next/image";

import profilePic from "@/assets/images/profile-image-stock.jpg"
import notes from "@/assets/icons/notes.svg"
import { DashboardData } from "./_components/dashboard";
import { PatientData } from "./_components/patient";

import img from "@/assets/images/logo-text-v24.png"

import "./dash.css"
import { SupportData } from "./_components/support";
import { ScheduleCalendar } from "./_components/schedule";
import { Payment } from "./_components/payment";
import { useRouter } from "next/navigation";
import Settings from "./settings/settings";

interface IMenuItems {
    [key: string]: any
}

export default function Dashboard({ params }: {
    params: { id: string }
}) {

    const { data: session } = useSession();
    const [container, setContainer] = useState(<DashboardData />)
    const router = useRouter();

    const mainContainer = useRef(document.createElement("div"));

    const menuItems = [
        {
            name: "Dashboard",
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={25} height={25} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
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

    useEffect(() => {
        mainContainer.current.innerHTML = ReactDomServer.renderToString(<DashboardData />);
    }, [])

    function handleSideNavClick(containerClass: string) {
        switch (containerClass) {
            case "dashboard": {
                mainContainer.current.innerHTML = ReactDomServer.renderToString(<DashboardData />);
                break;
            }
            case "patient": {
                mainContainer.current.innerHTML = ReactDomServer.renderToString(<PatientData />);
                break;
            }
            case "schedule": {
                mainContainer.current.innerHTML = ReactDomServer.renderToString(<ScheduleCalendar />);
                break;
            }
            case "payment": {
                mainContainer.current.innerHTML = ReactDomServer.renderToString(<Payment />);
                break;
            }
            case "settings": {
                mainContainer.current.innerHTML = ReactDomServer.renderToString(<Settings />);
                break;
            }
        }
        // document.getElementsByClassName("dashboard_content")[0].innerHTML = ReactDomServer.renderToString(container);
        // mainContainer.current.innerHTML = ReactDomServer.renderToString(container);
    }

    return (
        <main>
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n  :root {\n    font-family: 'Source Sans Pro';\n  }\n  main#dashboard-main::-webkit-scrollbar {\n    width: 8px;\n    height: 8px;\n  }\n  main#dashboard-main::-webkit-scrollbar-thumb {\n    border-radius: 9999px;\n    background-color: rgb(156 163 175 / 0.75);\n  }\n  main#dashboard-main::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px rgb(156 163 175 / 0.75);\n    border-radius: 10px;\n  }\n"
                }}
            />
            <div className="bg-slate-200 flex h-screen">
                <aside className="fixed z-50 md:relative">
                    {/* Sidebar */}
                    <input type="checkbox" className="peer hidden" id="sidebar-open" />
                    <label
                        className="peer-checked:rounded-full peer-checked:p-2 peer-checked:right-6 peer-checked:bg-gray-600 peer-checked:text-white absolute top-8 z-20 mx-4 cursor-pointer md:hidden"
                        htmlFor="sidebar-open"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </label>
                    <nav
                        aria-label="Sidebar Navigation"
                        className="peer-checked:w-64 left-0 z-10 flex h-screen w-0 flex-col overflow-hidden bg-fi-darker text-white transition-all md:h-screen md:w-64 lg:w-72"
                    >
                        <div className="bg-fi-primary mt-5 py-4 pl-10 md:mt-10">
                            <Image
                                src={img}
                                alt="logo"
                                height={40}
                            />
                        </div>
                        <ul className="mt-8 space-y-3 md:mt-20">
                            {
                                menuItems.map(item => {
                                    return (
                                        <li className="relative">
                                            <button
                                                className="focus:bg-slate-600 hover:bg-slate-600 flex w-full space-x-2 rounded-md px-10 py-4 text-gray-300 focus:outline-none"
                                                onClick={() => handleSideNavClick(item.containerClass)}
                                            >
                                                <span>
                                                    {item.icon}
                                                </span>
                                                <span className="">{item.name}</span>
                                            </button>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div className="my-6 mt-auto ml-10 flex cursor-pointer">
                            <div>
                                <img
                                    className="h-12 w-12 rounded-full"
                                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                />
                            </div>
                            <div className="ml-3">
                                <p className="font-medium">Diana Reeves</p>
                                <p className="text-sm text-gray-300">Kyiv, Ukraine</p>
                            </div>
                        </div>
                    </nav>
                </aside>
                {/* /Sidebar */}
                <div className="flex h-full w-full flex-col">
                    {/* Navbar */}
                    <header className="relative flex flex-col items-center bg-white px-4 py-4 shadow sm:flex-row md:h-28">
                        <div className="flex w-full flex-col justify-between overflow-hidden transition-all sm:max-h-full sm:flex-row sm:items-center">
                            <div className="relative ml-10 flex items-center justify-between rounded-md sm:ml-auto">
                                <svg
                                    className="absolute left-2 block h-5 w-5 text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <circle cx={11} cy={11} r={8} className="" />
                                    <line x1={21} y1={21} x2="16.65" y2="16.65" className="" />
                                </svg>
                                <input
                                    type="name"
                                    name="search"
                                    className="h-12 w-full rounded-md border border-gray-100 bg-gray-100 py-4 pr-4 pl-12 shadow-sm outline-none focus:border-blue-500"
                                    placeholder="Search for anything"
                                    onInputCapture={() => { }}
                                />
                            </div>
                            <ul className="mx-auto mt-4 flex space-x-6 sm:mx-5 sm:mt-0">
                                
                                <li className="">
                                    <button className="flex h-8 w-8 items-center justify-center rounded-xl border text-gray-600 hover:text-black hover:shadow">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                                            />
                                        </svg>
                                    </button>
                                </li>
                                <li className="">
                                    <button 
                                        className="flex h-8 w-8 items-center justify-center rounded-xl border text-gray-600 hover:text-black hover:shadow"
                                        onClick={() => {handleSideNavClick("settings")}}
                                        >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </header>
                    {/* /Navbar */}



                    {/* Main */}
                    {/* Remove class [ h-64 ] when adding a card block */}
                    <div className="h-full overflow-hidden pl-10">
                        <main
                            id="dashboard-main"
                            className="dashboard_content h-[calc(100vh-10rem)] overflow-auto px-4 py-10"
                            ref={mainContainer}
                        >
                            
                        </main>
                    </div>
                    {/* /Main */}
                </div>
            </div>
        </main>
    )
}