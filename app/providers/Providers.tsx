"use client";

import { FC, ReactElement} from 'react'
import { ChainProvider } from './ChainProvider'
import { ThemeProvider } from 'next-themes';
import { EthereumProvider } from './EthereumProvider';
import { State } from 'wagmi';

interface IProviders {
    children: ReactElement;
    ethereumInitialState: State
}

const Providers: FC<IProviders> = ({ children, ethereumInitialState }) => {
  return (
    <ThemeProvider defaultTheme="dark">
      <ChainProvider>
        <EthereumProvider initialState={ethereumInitialState}>
            {children}
        </EthereumProvider>
      </ChainProvider>
    </ThemeProvider>
  )
}

export default Providers