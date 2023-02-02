import { createContext, Dispatch } from 'react'
import { UserState } from './userProvider'
// import { UserState } from './UserProvider'
import { UserAction } from './userReducer'

interface UserContextProps extends UserState {
  dispatchUser: Dispatch<UserAction>
  obtenerCaseros: () => Promise<void>
  obtenerUsuarios: () => Promise<void>
  obtenerUsuario: (id: string) => Promise<void>
  getClaimsAll: () => Promise<void>
}

export const UserContext = createContext<UserContextProps>(
  {} as UserContextProps
)
