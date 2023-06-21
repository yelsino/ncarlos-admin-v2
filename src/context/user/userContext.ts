import { createContext, Dispatch } from 'react'
import { IAuth, IRespuesta, IUsuario, Operario } from 'types-yola'
import { UserState } from './userProvider'
import { UserAction } from './userReducer'

interface UserContextProps extends UserState {
  dispatchUser: Dispatch<UserAction>
  obtenerCaseros: () => Promise<void>
  obtenerUsuarios: () => Promise<void>
  obtenerUsuario: (id: string) => Promise<void>
  filtrarUsuarios: (filtro: Object) => Promise<IRespuesta<IUsuario[]>>
  getClaimsAll: () => Promise<void>
  
}

export const UserContext = createContext<UserContextProps>(
  {} as UserContextProps
)
