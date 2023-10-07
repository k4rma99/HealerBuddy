"use client"

import React  from "react";
import HeaderLink from "./headerLink";
import Image from "next/image";
import img from "@/assets/images/logo-text-v24.png"
import Link from "next/link";

export default function Header({isHidden = false, backgroundColor = "fi-primary"}){
    return (
        <header className={`text-gray-600 bg-${backgroundColor} body-font pr-20 pl-20`}>
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
                <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <Image
                        src={img}
                        alt="logo"
                        height={40}
                    />
                </Link>
                <div className={isHidden ? "hidden" : "flex flex-row"}>
                    <Link href={"/for-buddies"}>
                        <button className="inline-flex items-center rounded text-base mt-4 md:mt-0 mr-5">For Buddies</button>
                    </Link>

                    <Link href={"/login"}>
                        <button className="inline-flex items-center rounded text-base mt-4 md:mt-0 mr-5">Login</button>
                    </Link>
                </div>
            </div>
        </header>
    )
}