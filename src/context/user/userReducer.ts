import { IUsuario } from 'types-yola'
import { UserState } from './userProvider'

export type UserAction = { type: 'GET_USERS'; payload: Array<IUsuario> };

const userReducer = (
  state: UserState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state
      }
    default:
      return state
  }
}

export default userReducer
