import { createContext, Dispatch } from 'react'
import { ProductoState } from './ProductoProvider'
import { ProductoAction } from './productoReducer'

interface ProductoContextProps extends ProductoState {
  dispatchProducto: Dispatch<ProductoAction>
  obtenerProductoXcategoria: (categoria: string) => Promise<void>
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
