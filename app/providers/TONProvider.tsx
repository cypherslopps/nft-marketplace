import { createContext, FC, ReactElement, useContext, useEffect, useState } from "react";
import { useTonConnectModal, useTonConnectUI, useTonAddress, CHAIN } from '@tonconnect/ui-react';
// import { Address } from "ton-core";
import { Wallet, useTonWallet as useTon } from "@tonconnect/ui-react";
import { Sender, SenderArguments } from "@ton/core";

type NetworkTypes = "mainnet" | "testnet" | null;

type TonWalletContextProps = {
    connect: () => void,
    address: string,
    rawAddress: string,
    network:  NetworkTypes | null,
    wallet: Wallet | null,
    disconnect: () => void,
    fetchTokenBalance: (tokenAddress: string) => Promise<number>,
    fetchUserNFTs: () => void,
    getUserNFTCollections: (nftCollection: string) => Promise<string | null>,
    isConnected: false,
    sender: Sender
}

type TonWalletProviderProps = {
    children: ReactElement
}

const TonWalletContext = createContext<TonWalletContextProps | null>(null);

export const TonWalletProvider: FC<TonWalletProviderProps> = ({ children }) => {
    const { open } = useTonConnectModal();
    const wallet = useTon();
    const [tonConnectUI] = useTonConnectUI();
    const userFriendlyAddress = useTonAddress();
    const rawAddress = useTonAddress(false);
    const [network, setNetwork] = useState<NetworkTypes>(null);
    const isConnectedState = localStorage.getItem("isConnected") ? JSON.parse(localStorage.getItem("isConnected") as string) : false;
    const [isConnected, setIsConnected] = useState(isConnectedState);

    // Sender
    const sender = {
        send: async (args: SenderArguments) => {
            tonConnectUI.sendTransaction({
                messages: [
                {
                    address: args.to.toString(),
                    amount: args.value.toString(),
                    payload: args.body?.toBoc().toString('base64'),
                },
                ],
                validUntil: Date.now() + 5 * 60 * 1000,
            });
        }
    };

    useEffect(() => {
        if (userFriendlyAddress) {
            setIsConnected(true);
            
            // Set network
            const activeNetwork = wallet?.account?.chain === CHAIN.MAINNET ? "mainnet" : "testnet";
            setNetwork(activeNetwork);

            localStorage.setItem("isConnected", JSON.stringify(true));
        } else {
            setIsConnected(false);
        }
    }, [userFriendlyAddress, wallet]);

    const disconnect = async () => {
        await tonConnectUI.disconnect();
    }

    return (
        <TonWalletContext.Provider value={{ 
            address: userFriendlyAddress,
            connect: open,
            rawAddress,
            network,
            wallet,
            disconnect,
            sender,
            isConnected,
        } as never}>
            {children}
        </TonWalletContext.Provider>
    );
}

export const useTonWallet = () => {
    const tonContext = useContext(TonWalletContext);

    if (!tonContext) {
        throw new Error("Error: Out of scope");
    }

    return tonContext;
};