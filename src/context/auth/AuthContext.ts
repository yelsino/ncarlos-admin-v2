import { Dispatch, createContext } from 'react'

import { IAuth, IAuthOperario, IAuthRest, IRespuesta, IUsuario, Operario } from 'types-yola'
import { AuthAction } from './AuthReducer'

interface AuthContextProps {
  uid: string | null
  checking: boolean
  logged: boolean
  user: IUsuario | null
  dispatchAuth: Dispatch<AuthAction>
  userLogin: (data: IAuth) => Promise<IRespuesta<IAuthRest>>
  operarioLogin: (data: IAuthOperario) => Promise<IRespuesta<IAuthRest>>
  registrarConEmail: (data: IAuth) => Promise<IRespuesta<IAuthRest>>
  userLogout: () => void
  verificarToken: () => Promise<boolean>
  restaurarOperario: (documento: string) => Promise<IRespuesta<IAuthRest>>
  registrarOperario: (operario: Operario) => Promise<IRespuesta<IAuthRest>>
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
)
