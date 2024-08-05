"use client";

import Link from "next/link";
import { FC, useRef, MutableRefObject, RefObject, useEffect } from "react";
import { navigationLinks } from "@/lib/constants";
import Icons from "./Icons";
import WalletConnect from "./WalletConnect";
import ChainMenu from "./ChainMenu";

interface INavigationLinks {
    title: string;
    route: string;
}

const NavigationLinks: FC<INavigationLinks> = ({ title, route }) => {
    const linkRef: RefObject<HTMLAnchorElement> = useRef() as RefObject<HTMLAnchorElement>;
    let rect: MutableRefObject<DOMRect | undefined> = useRef() as MutableRefObject<DOMRect | undefined>;
   
    useEffect(() => {
        rect.current = linkRef?.current?.getBoundingClientRect();
        console.log(rect)
    }, [])

    return (
        <li>
            <Link
                ref={linkRef}
                href={route}
                className="capitalize relative text-md text-white/85"
            >
                {title}
                {rect?.current ? (
                    <div 
                        className="absolute bg-red-50"
                        style={{
                            left: `${(rect?.current?.left as number) - 12}%`,
                            top: `${(rect?.current?.top as number) - 12}%`,
                            width: `${rect?.current?.width}%`,
                            height: `${rect?.current?.height}%`
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
                    className="flex items-center gap-x-2 text-sm font-extrabold text-black dark:text-white tracking-tight"
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

            <div className="flex items-center gap-x-2">
                <Icons.search className="w-5 h-5" />
                <WalletConnect />
                <ChainMenu />
            </div>
        </nav>
    );
}
 
export default Navigation;