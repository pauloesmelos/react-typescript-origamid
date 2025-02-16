import { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useState } from "react";

interface UiContextInterface {
    dark: boolean,
    setDark: Dispatch<SetStateAction<boolean>>
}

export const UiContext = createContext<UiContextInterface | null>(null);

export const UiContextProvider = ({ children }:PropsWithChildren) => {
    const [dark, setDark] = useState(false);

    return (
        <UiContext.Provider value={{ dark, setDark }}>
            {children}
        </UiContext.Provider>
    )
}

export const useUiContext = () => {
    const context = useContext(UiContext);
    if(context === null) throw new Error("Envolva o código sobre o provider do Contexto");
    return context;
}