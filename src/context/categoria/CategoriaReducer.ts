import { ICategoria } from 'types-yola'
import { CategoriaState } from './CategoriaProvider'

export type CategoriaAction =
| { type: 'GET_CATEGORIAS'; payload: ICategoria[] }

export const categoriaReducer = (
  state: CategoriaState,
  action: CategoriaAction
): CategoriaState => {
  switch (action.type) {
    case 'GET_CATEGORIAS':
      return {
        ...state,
        categorias: action.payload
      }
    default:
      return state
  }
}
