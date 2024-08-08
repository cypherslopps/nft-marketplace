"use client";

import { createWeb3Modal } from "@web3modal/wagmi/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { State, WagmiProvider } from "wagmi";
import { createContext, FC, ReactElement, useContext } from "react";
import { config, projectId, metadata } from "../lib/ethereumConfig";
import { ThemeMode } from "@/index";

interface IEthereumContext {

}

interface IEthereumProvider {
    children: ReactElement;
    initialState?: State
}

// QueryClient setup
const queryClient = new QueryClient();

if (!projectId) throw new Error("Project ID is not defined");

let theme: ThemeMode | undefined = undefined;

if (typeof window !== "undefined") {
    theme = (window.localStorage.getItem("theme") || "dark") as ThemeMode;
}

// Create web3 modal
createWeb3Modal({
    metadata,
    themeMode: theme,
    wagmiConfig: config,
    projectId
});

const EthereumContext = createContext<IEthereumContext | null>(null);

export const EthereumProvider: FC<IEthereumProvider> = ({ children, initialState }) => {
    return (
        <WagmiProvider config={config} initialState={initialState}>
            <QueryClientProvider client={queryClient}>
                <EthereumContext.Provider value={{}}>
                    {children}
                </EthereumContext.Provider>
            </QueryClientProvider>
        </WagmiProvider>
    )
}

export const useEthereum = () => {
    const ethereumContext = useContext(EthereumContext);

    if (!ethereumContext) {
        throw new Error("EthereumProvider is out of scope")
    }

    return ethereumContext;
}