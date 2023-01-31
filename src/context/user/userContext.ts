import { createContext, Dispatch } from 'react'
// import { UserState } from './UserProvider'
import { UserAction } from './userReducer'

interface UserContextProps {
    dispatchUser: Dispatch<UserAction>;
    obtenerCaseros: () => Promise<void>;
    obtenerUsuarios: () => Promise<void>;
    getDetailUser: (id: any) => Promise<void>;
    getDetailCasero: (id: any) => Promise<void>;
    getClaimsAll: () => Promise<void>;
}

export const UserContext = createContext<UserContextProps>({} as UserContextProps)
