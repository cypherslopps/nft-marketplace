import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useChain } from '../providers/ChainProvider';
import { useAccount, useDisconnect } from 'wagmi';
import { IETHAddress } from '@/index';
import { useWallet } from '@solana/wallet-adapter-react';

const useWalletConnect = () => {
    // Ethereum
    const { open } = useWeb3Modal();
    const { address, isConnecting } = useAccount();
    const { disconnect } = useDisconnect();

    // Solana
    const { connect, disconnect: disconnectSolanaWallet, } = useWallet();

    const { activeChain } = useChain();

    // Connect user wallet
    const connectWallet = () => {
        if (activeChain.title === "Ethereum") {
            open();
        } else if (activeChain.title === "Solana") {
            connect();
        }
    }

    // Disconnect user wallet
    const disconnectWallet = () => {
        if (activeChain.title === "Ethereum") {
            disconnect();
        } else if (activeChain.title === "Solana") {
            disconnectSolanaWallet();
        }
    }

    // Get User Specific Chain Address
    const userAddress = (): IETHAddress => {
        if (activeChain.title === "Ethereum") {
            return address;
        }
    }

    return {
        connect: connectWallet,
        isConnecting,
        disconnect: disconnectWallet,
        address: userAddress()
    }
}

export default useWalletConnect