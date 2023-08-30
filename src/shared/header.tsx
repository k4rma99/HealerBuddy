import React from "react";
import HeaderLink from "./headerLink";
import Image from "next/image";
import img from "@/assets/logo-text-v24.png"

export default function Header() {
    return (
        <header className="text-gray-600 body-font shadow pr-20 pl-20">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <Image
                        src={img}
                        alt="logo"
                        height={40}
                    />
                </a>

                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <HeaderLink href='' linkName="Home" />
                    <HeaderLink href='' linkName="About" />
                    <HeaderLink href='' linkName="Contact" />
                    <HeaderLink href='' linkName="Blog" />
                </nav>

                <div className="flex flex-row ">
                <button className="inline-flex items-center rounded text-base mt-4 md:mt-0 mr-5">For Buddies</button>
                </div>

            </div>
        </header>
    )
}