
import { ILista } from 'types-yola';
import { ListState } from './ListProvider'

export type ListAction =
  | { type: 'GET_USER_LISTS'; payload: Array<ILista> }
  | { type: 'SELECT_LIST'; payload: ILista }
  | { type: 'VIEW_LIST'; payload: boolean }
  | { type: 'DELETE_LIST'; payload: string }
  | { type: 'CREATE_LIST'; payload: ILista }

export const listReducer = (
  state: ListState,
  action: ListAction
): ListState => {
  switch (action.type) {
    case 'GET_USER_LISTS':
      return {
        ...state,
        lists: action.payload,
      }

    case 'SELECT_LIST':
      return {
        ...state,
      }
    case 'DELETE_LIST': 
      return {
        ...state,
        lists: state.lists.filter((list) => list._id !== action.  payload)
      }

    default:
      return state
  }
}
