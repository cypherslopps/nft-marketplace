"use client";

import { createContext, FC, ReactElement, useContext, useEffect, useState } from "react";
import { IChain } from "../..";
import { chains } from "@/app/lib/constants";

interface IChainContext {
    chains: IChain[];
    activeChain: IChain;
    updateActiveChain: (chain: IChain) => void;
}

interface IChainProvider {
    children: ReactElement
}

const ChainContext = createContext<IChainContext | null>(null);

export const ChainProvider: FC<IChainProvider> = ({ children }) => {
    const [activeChain, setActiveChain] = useState<IChain>(chains[0]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedChain = window.localStorage.getItem("active_chain");
            const currentActiveChain: IChain | undefined = storedChain ? chains.find(chain => chain.title === storedChain) : chains[0];
            
            // Set Active chain
            setActiveChain(currentActiveChain as IChain);
        }
    }, []);

    const updateActiveChain = (chain: IChain) => {
        setActiveChain(chain)
        
        if (typeof window !== "undefined") {
            window.localStorage.setItem("active_chain", chain.title);
        }
    }

    return (
        <ChainContext.Provider value={{
            activeChain,
            chains,
            updateActiveChain
        }}>
            {children}
        </ChainContext.Provider>
    )
}

export const useChain = () => {
    const chainContext = useContext(ChainContext);

    if (!chainContext) {
        throw new Error("ChainProvider is out of scope");
    }

    return chainContext;
}