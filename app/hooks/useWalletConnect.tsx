import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useChain } from '../providers/ChainProvider';
import { useAccount, useDisconnect } from 'wagmi';
import { IETHAddress } from '@/index';

const useWalletConnect = () => {
    const { open } = useWeb3Modal();
    const { address, isConnecting } = useAccount();
    const { disconnect } = useDisconnect();
    const { activeChain } = useChain();

    // Connect user wallet
    const connect = () => {
        if (activeChain.title === "Ethereum") {
            open();
        }
    }

    // Disconnect user wallet
    const disconnectWallet = () => {
        if (activeChain.title === "Ethereum") {
            disconnect();
        }
    }

    // Get User Specific Chain Address
    const userAddress = (): IETHAddress => {
        if (activeChain.title === "Ethereum") {
            return address;
        }
    }

    return {
        connect,
        isConnecting,
        disconnect: disconnectWallet,
        address: userAddress()
    }
}

export default useWalletConnect