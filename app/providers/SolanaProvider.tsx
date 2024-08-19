import { FC, ReactElement, useMemo } from "react";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import {
    PhantomWalletAdapter,
    SolflareWalletAdapter,
    NightlyWalletAdapter
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";

interface WalletContextProvider {
    children: ReactElement
}

export const SolanaWalletProvider: FC<WalletContextProvider> = ({ children }) => {
    const network = clusterApiUrl("devnet");   
    const wallets = useMemo(() => [
        new PhantomWalletAdapter(),
        new SolflareWalletAdapter(),
        new NightlyWalletAdapter()
    ], []);

    return (
        <ConnectionProvider endpoint={network}>
            <WalletProvider wallets={wallets}>
                {children}
            </WalletProvider>
        </ConnectionProvider>
    )
}