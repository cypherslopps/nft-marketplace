import { StaticImageData } from "next/image";

export type ChainTypeProps = "Ethereum" | "Solana" | "TON";

interface IChain {
    title: ChainTypesProps;
    imageSource: StaticImageData | string
}

type IETHAddress = `0x${string}` | undefined
type ThemeMode = "light" | "dark";