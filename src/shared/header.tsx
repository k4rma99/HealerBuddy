import React from "react";
import HeaderLink from "./headerLink";

export default function Header() {
    return (
        <header className="text-gray-600 body-font shadow pr-20 pl-20">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-xl">HealerBuddy</span>
                </a>

                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 hover:text-gray-900">Home</a>
                    <a className="mr-5 hover:text-gray-900">About</a>
                    <a className="mr-5 hover:text-gray-900">Contact</a>
                    <a className="mr-5 hover:text-gray-900">Blog</a>
                    {/* <HeaderLink href='' linkName=""/>
                <HeaderLink href='' linkName=""/>
                <HeaderLink href='' linkName=""/>
                <HeaderLink href='' linkName=""/> */}
                </nav>

                <button className="inline-flex items-center rounded text-base mt-4 md:mt-0 mr-5">For Buddies</button>

                <button className="inline-flex items-center border border-solid border-black py-1 px-3 focus:outline-none hover: rounded text-base mt-4 md:mt-0">Join Us</button>

            </div>
        </header>
    )
}