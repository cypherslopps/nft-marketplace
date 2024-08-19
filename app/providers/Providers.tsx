"use client";

import { FC, ReactElement} from 'react'
import { ChainProvider } from './ChainProvider'
import { ThemeProvider } from 'next-themes';
import { EthereumProvider } from './EthereumProvider';
import { State } from 'wagmi';
import { SolanaWalletProvider } from './SolanaProvider';

interface IProviders {
    children: ReactElement;
    ethereumInitialState: State
}

const Providers: FC<IProviders> = ({ children, ethereumInitialState }) => {
  return (
    <ThemeProvider defaultTheme="dark">
      <ChainProvider>
        <SolanaWalletProvider>
          <EthereumProvider initialState={ethereumInitialState}>
              {children}
          </EthereumProvider>
        </SolanaWalletProvider>
      </ChainProvider>
    </ThemeProvider>
  )
}

export default Providers