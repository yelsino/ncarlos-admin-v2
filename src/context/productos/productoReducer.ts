import { ICategoria, IProducto } from 'types-yola'
import { ProductoState } from './ProductoProvider'

export type ProductoAction =
    | { type: 'OBTENER_PRODUCTOS'; payload: IProducto[] }
    | { type: 'OBTENER_CATEGORIAS'; payload: ICategoria[] }
    | { type: 'SELECCIONAR_PRODUCTO'; payload: IProducto }

const productoReducer = (
  state: ProductoState,
  action: ProductoAction
): ProductoState => {
  switch (action.type) {
    case 'OBTENER_PRODUCTOS':
      return {
        ...state,
        productos: action.payload
      }

    case 'SELECCIONAR_PRODUCTO':
      return {
        ...state,
        producto: action.payload
      }

    case 'OBTENER_CATEGORIAS':
      return {
        ...state,
        categorias: action.payload
      }
    default:
      return state
  }
}

export default productoReducer
