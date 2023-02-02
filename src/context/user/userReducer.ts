import { IUsuario, IReclamo } from 'types-yola'
import { UserState } from './userProvider'

export type UserAction =
  | { type: 'OBTENER_USUARIOS'; payload: Array<IUsuario> }
  | { type: 'SELECCIONAR_USUARIO'; payload: IUsuario }
  | { type: 'OBTENER_RECLAMOS'; payload: IReclamo[] }

const userReducer = (state: UserState, action: UserAction): UserState => {
  switch (action.type) {
    case 'OBTENER_USUARIOS':
      return {
        ...state,
        usuarios: action.payload
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
    default:
      return state
  }
}

export default userReducer
