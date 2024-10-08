"use client";

import Link from "next/link";
import { FC } from "react";
import { navigationLinks } from "@/app/lib/constants";
import Icons from "./Icons";
import WalletConnect from "./WalletConnect";
import ChainMenu from "./ChainMenu";
import ThemeToggler from "./ThemeToggler";

interface INavigationLinks {
    title: string;
    route: string;
}

const NavigationLinks: FC<INavigationLinks> = ({ title, route }) => {
    return (
        <li>
            <Link
                href={route}
                className="capitalize relative text-md text-white/85"
            >
                {title}
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
                <ThemeToggler />
            </div>
        </nav>
    );
}
 
export default Navigation;