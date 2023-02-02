import { ICategoria } from 'types-yola'
import { CategoriaState } from './CategoriaProvider'

export type CategoriaAction =
  | { type: 'OBTENER_CATEGORIAS'; payload: ICategoria[] }
  | { type: 'SELECCIONAR_CATEGORIA'; payload: ICategoria }

export const categoriaReducer = (
  state: CategoriaState,
  action: CategoriaAction
): CategoriaState => {
  switch (action.type) {
    case 'OBTENER_CATEGORIAS':
      return {
        ...state,
        categorias: action.payload
      }
    case 'SELECCIONAR_CATEGORIA':
      return {
        ...state,
        categoria: action.payload
      }
    default:
      return state
  }
}
