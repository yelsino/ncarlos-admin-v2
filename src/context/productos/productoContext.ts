import { createContext, Dispatch } from 'react'
import { IProducto, IRespuesta } from 'types-yola'
import { ProductoState } from './ProductoProvider'
import { ProductoAction } from './productoReducer'

interface ProductoContextProps extends ProductoState {
  dispatchProducto: Dispatch<ProductoAction>
  obtenerProductosPorCategoria: (categoria: string) => Promise<IRespuesta<IProducto[]>>
  createNewProduct: (data: any) => Promise<
    | {
        ok: boolean
      }
    | undefined
  >
}

export const ProductoContext = createContext<ProductoContextProps>(
  {} as ProductoContextProps
)
