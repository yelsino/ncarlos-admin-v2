import { IUsuario, IReclamo, Operario, IRol } from 'types-yola'
import { UserState } from './UserProvider'

export type UserAction =
  | { type: 'OBTENER_USUARIOS'; payload: Array<IUsuario> }
  | { type: 'SELECCIONAR_USUARIO'; payload: IUsuario }
  | { type: 'OBTENER_RECLAMOS'; payload: IReclamo[] }
  | { type: 'SET_DATOS_OPERARIO'; payload: Operario }
  | { type: 'OBTENER_OPERARIOS'; payload: IUsuario[] }
  | { type: 'OBTENER_ROLES'; payload: IRol[] }

const userReducer = (state: UserState, action: UserAction): UserState => {
  switch (action.type) {
    case 'OBTENER_USUARIOS':
      return {
        ...state,
        usuarios: action.payload
      }
    case 'OBTENER_OPERARIOS':
      return {
        ...state,
        operarios: action.payload
      }

    case 'SELECCIONAR_USUARIO':
      return {
        ...state,
        usuarioSeleccionado: action.payload
      }

    case 'OBTENER_RECLAMOS':
      return {
        ...state,
        claims: action.payload
      }

    case 'SET_DATOS_OPERARIO':
      return {
        ...state,
        nuevoOperario: action.payload
      }

    case 'OBTENER_ROLES':
      return {
        ...state,
        roles: action.payload
      }

    default:
      return state
  }
}

export default userReducer
