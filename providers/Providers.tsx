"use client";

import { FC, ReactElement} from 'react'
import { ChainProvider } from './ChainProvider'
import { ThemeProvider } from 'next-themes';

interface IProviders {
    children: ReactElement
}

const Providers: FC<IProviders> = ({ children }) => {
  return (
    <ChainProvider>
        <ThemeProvider defaultTheme="dark">
            {children}
        </ThemeProvider>
    </ChainProvider>
  )
}

export default Providers