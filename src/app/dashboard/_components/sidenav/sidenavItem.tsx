import Link from "next/link"
import "./sidenav.css"
import Image from "next/image"

import dashboardSvg from "@/assets/icons/dashboard.svg"

type SideNavProps = {
    linkName: string,
    linkPath: string,
}

export const SidenavLink = (params: SideNavProps) => {
    return (
        <li className="relative">
            <Link href={params.linkPath ?? ""}
                className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-black outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-black dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                data-te-sidenav-link-ref>
                <span
                    className="mr-4 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-black dark:[&>svg]:text-black">
                    <Image src={dashboardSvg} alt="" width={10} height={10} className="w-10 h-10 text-black" />
                </span>
                <span>{params.linkName}</span>
            </Link>
        </li>
    )
}