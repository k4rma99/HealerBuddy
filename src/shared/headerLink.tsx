"use client";

import { usePathname } from "next/navigation";
import Link from "next/link"
import { ComponentProps } from "react";
import clsx from "clsx";

type Props = Omit<ComponentProps<typeof Link>, 'href'> & {
    href: string,
    linkName: string
}

export default function HeaderLink({href, linkName ,...rest}: Props) {
    const pathName = usePathname();
    const isActive = pathName === href;

    return (
        <Link
            aria-current={isActive}
            className={clsx(
                'inline-block py-3 px-7 transition-colors',
                isActive ? ' text-green-500' : 'text-black hover:text-gray-400'
              )}
            href={href}
            {...rest}
        >{linkName}</Link>
    )
}