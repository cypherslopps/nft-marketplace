"use client";

import Link from "next/link";
import { FC, useRef, ReactElement, MutableRefObject, RefObject } from "react";
import { navigationLinks } from "@/lib/constants";

interface INavigationLinks {
    title: string;
    route: string;
}

const NavigationLinks: FC<INavigationLinks> = ({ title, route }) => {
    const linkRef: RefObject<HTMLAnchorElement> = useRef() as RefObject<HTMLAnchorElement>;
    const rect = linkRef?.current?.getBoundingClientRect();
    console.log(rect)

    return (
        <li>
            <Link
                ref={linkRef}
                href={route}
                className="capitalize relative"
            >
                {title}
                {rect ? (
                    <div 
                        className="absolute bg-red-50"
                        style={{
                            left: `${(rect?.left as number) - 12}%`,
                            top: `${(rect?.top as number) - 12}%`,
                            width: `${rect?.width}%`,
                            height: `${rect?.height}%`
                        }}
                 />) : null}
            </Link>
        </li>
    )
}

const Navigation = () => {
    return (
        <nav className="px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-x-10">
                <Link
                    href="/"
                    className="flex items-center gap-x-2 text-sm font-bold text-black dark:text-white"
                >
                    <span className="w-8 h-8 bg-emerald-400 rounded-full" />
                    NFT MAKI
                </Link>

                <ul className="flex items-center gap-x-3">
                    {navigationLinks.map(link => (
                        <NavigationLinks 
                            key={link.title}
                            {...link}
                        />
                    ))}
                </ul>
            </div>
        </nav>
    );
}
 
export default Navigation;