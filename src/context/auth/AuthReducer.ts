import { IUsuario } from 'types-yola'
import { AuthState } from './AuthProvider'

export type AuthAction =
  | { type: 'LOGOUT' }
  | { type: 'LOGIN'; payload: IUsuario }
  | { type: 'REGISTER'; payload: IUsuario }
  | { type: 'SET_USER'; payload: IUsuario }
  | { type: 'LOADING'; payload: boolean }

export const authReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case 'LOGOUT':
      return {
        ...state,
        checking: false,
        logged: false,
        user: null
      }
    case 'REGISTER':
    case 'LOGIN':
      return {
        ...state,
        logged: true,
        checking: false,
        user: action.payload
      }
    case 'LOADING':
      return {
        ...state
      }
    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      }

    default:
      return state
  }
}
