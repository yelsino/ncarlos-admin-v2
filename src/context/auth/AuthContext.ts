import { Dispatch, createContext } from 'react'

import { IAuth, IAuthRest, IRespuesta, IUsuario } from 'types-yola'
import { AuthAction } from './AuthReducer';

interface AuthContextProps {
    uid: string | null;
    checking: boolean;
    logged: boolean;
    user: IUsuario | null;
    dispatchAuth: Dispatch<AuthAction>;
    userLogin: (data: IAuth) => Promise<IRespuesta<IAuthRest>>;
    registrarConEmail: (data: IAuth) => Promise<IRespuesta<IAuthRest>>;
    userLogout: () => void;
    verificarToken: () => Promise<boolean>;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)
