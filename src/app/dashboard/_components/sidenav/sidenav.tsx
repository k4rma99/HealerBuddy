"use client"

import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import {
    MdOutlineSpaceDashboard,
    MdOutlineMoreHoriz,
    MdOutlineSettings,
    MdOutlineLogout,
} from "react-icons/md";

import logo from "@/assets/images/logo-text-v24.png"
import Image from "next/image";

import { useRouter } from "next/navigation";
import { MainDashboard } from "../mainPage/main";
import { Calendar } from "../calendar/calendar";
import { Payment } from "../payments/payment";
import { Patients } from "../patients/patients";

const menuItems = [
    {
        name: "Dashboard",
        icon: <MdOutlineSpaceDashboard className="text-2xl text-gray-600 group-hover:text-white " />,
        containerClass: "dashboard",
        component: <MainDashboard />
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
        containerClass: "patient",
        component: <Patients />
    },
    {
        name: "Calendar",
        icon:
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width={25} height={25} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
            </svg>,
        containerClass: "calendar",
        component: <Calendar />
    },
    {
        name: "Payments",
        icon:
            <svg width={25} height={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="6" width="18" height="13" rx="2" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 10H20.5" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7 15H9" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>,
        containerClass: "payment",
        component: <Payment />
    },
]


export const SideNav = ({ onComponentChange }) => {

    const router = useRouter();

    const handleSideNavClick = (element: React.JSX.Element) => {
        onComponentChange(element)
    }

    return (
        <Disclosure as="nav">
            <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
                <GiHamburgerMenu
                    className="block md:hidden h-6 w-6 z-10 "
                    aria-hidden="true"
                />
            </Disclosure.Button>
            <div className="p-6 w-1/2 h-full bg-fi-white z-20 relative top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
                <div className="flex flex-col justify-between h-full">
                    <div>
                        <Image src={logo} alt="" className="cursor-pointer pb-4 w-full" />
                        <div className=" my-4 border-b border-gray-100 pb-4">
                            {
                                menuItems.map(item => {
                                    return (
                                        <div
                                            onClick={() => handleSideNavClick(item.component)}
                                            className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-fi-darker p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
                                        >
                                            {item.icon}
                                            <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                                                {item.name}
                                            </h3>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    {/* setting  */}
                    <div>
                        <div className="border-b border-gray-100">
                            <div className="flex justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                                <MdOutlineSettings className="text-2xl text-gray-600 group-hover:text-white " />
                                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                                    Settings
                                </h3>
                            </div>
                        </div>
                        {/* logout */}
                        <div className=" my-4">
                            <div className="flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-200  hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                                <MdOutlineLogout className="text-2xl text-gray-600 group-hover:text-white " />
                                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                                    Logout
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Disclosure>
    )
}