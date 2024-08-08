import { createContext, FC, ReactElement, useContext } from "react";

interface ITONContext {

}

interface ITONProvider {
    children: ReactElement
}

const TONContext = createContext<ITONContext | null>(null);

export const TONProvider: FC<ITONProvider> = ({ children }) => {
    return (
        <TONContext.Provider value={{}}>
            {children}
        </TONContext.Provider>
    )
}