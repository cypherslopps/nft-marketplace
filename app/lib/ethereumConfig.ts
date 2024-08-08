import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { cookieStorage, createStorage } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";

export const projectId = process.env.NEXT_PUBLIC_WEB3CONNECT_PROJECT_ID;
console.log(projectId);

if (!projectId) {
    throw new Error("Project ID is not defined");
}

export const metadata = {
    name: "NFTMaki",
    description: "MultiChain NFT Marketplace",
    url: "https://nftmaki-cypherslopps-projects.vercel.app/",
    icons: ['https://avatars.githubusercontent.com/u/37784886']
};

// Wagmi Config
const chains = [mainnet, sepolia] as const;
export const config = defaultWagmiConfig({
    chains,
    projectId,
    metadata,
    ssr: true,
    storage: createStorage({
        storage: cookieStorage
    })
});