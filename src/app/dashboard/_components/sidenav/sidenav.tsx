import Image from "next/image"
import profileImg from "@/assets/logo-isolated.png"

import "./sidenav.css";
import { SidenavLink } from "./sidenavItem";

export default function SideNav({ params: { } }) {
    return (
        <nav
            id="dashboard-sidenav"
            className="relative left-0 z-[1035] h-full w-60 -translate-x-full overflow-hidden shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0"
            data-te-sidenav-init
            data-te-sidenav-hidden="false"
            data-te-sidenav-position="absolute">

            <div className="profile py-10 flex flex-col text-center">
                <Image
                    src={profileImg}
                    alt="logo"
                    className="profile-image w-40 h-40 m-0 relative"
                />
                <h1 className="pt-5" >John Doe</h1>
            </div>

            <ul className="relative m-0 list-none px-[0.2rem]" data-te-sidenav-menu-ref>
                <SidenavLink
                    linkName="Dashboard" 
                    linkPath="/"
                />

            </ul>
        </nav>
    )
}