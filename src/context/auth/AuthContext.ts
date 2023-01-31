import { createContext } from 'react'
import { IUsuario } from 'types-yola'

interface AuthContextProps {
    uid: string | null;
    checking: boolean;
    logged: boolean;
    user: IUsuario | null;
    login: (uid: string, user: IUsuario) => void;
    logout: () => void;
    verificarToken: () => void;
    register: () => void;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)
