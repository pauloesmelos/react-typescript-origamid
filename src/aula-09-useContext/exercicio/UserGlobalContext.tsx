import { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useEffect, useState } from "react";
import useGetUser from "./useGetUser";

type Preferences = {
    playback: number,
    volume: number,
    qualidade: "baixa" | "media" | "alta"
}
interface User {
    id: number,
    nome: string,
    idade: number,
    aulas: number,
    cursos: number ,
    preferencias: Preferences
}
interface UserGlobal {
    user: User | null,
    setUser: Dispatch<SetStateAction<User | null>>
}

const UserGlobalContext = createContext<UserGlobal | null>(null);

export const UserGlobalContextProvider = ({ children }: PropsWithChildren) => {
    const [user, setUser] = useState<User | null>(null);

    const { data } = useGetUser("1");

    useEffect(() => {
        if(data) {
            setUser(data);
        }
    }, [data])

    return (
        <UserGlobalContext.Provider value={{ user, setUser }}>
            {children}
        </UserGlobalContext.Provider>
    )
}

export const useUSerGlobalContext = () => {
    const context = useContext(UserGlobalContext);
    if(context === null) throw new Error("Envolva a aplicação sobre o Provider do Contexto");
    return context;
}