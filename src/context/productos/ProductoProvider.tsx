import { CategoriaContext } from 'context/categoria/CategoriaContext'
import { fetchConToken } from 'helpers/fetch'
import { NuevoProducto } from 'pages/productos/NuevoProducto'
import { useContext, useReducer } from 'react'
import { ICategoria, IProducto, IRespuesta } from 'types-yola'
import { ProductoContext } from './ProductoContext'
import productoReducer from './productoReducer'

export interface ProductoState {
  productos: IProducto[],
  producto: IProducto,
  categorias: ICategoria[],
}

const INITIAL_STATE: ProductoState = {
  productos: [],
  producto: null,
  categorias: [],

}

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const ProductoProvider = ({ children }: Props) => {

  const [state, dispatch] = useReducer(productoReducer, INITIAL_STATE)

  const obtenerProductosPorCategoria = async (categoria: string):Promise<IRespuesta<IProducto[]>> => {
    console.log(categoria);

    const respuesta = await fetchConToken<IRespuesta<IProducto[]>>({
      endpoint: 'productos/categoria/' + categoria,
    });

    if (respuesta.ok) {
      dispatch({
        type: 'OBTENER_PRODUCTOS',
        payload: respuesta.data
      })
    }

    return respuesta
  }

  const crearNuevoProducto = async (data: NuevoProducto) => {
    console.log(data)
    const formProducto = new FormData()
    formProducto.append('nombre', data.nombre)
    formProducto.append('tipoVenta', data.tipoVenta)
    formProducto.append('envoltorio', data.envoltorio)
    formProducto.append('unidades', data.unidades.toString())
    formProducto.append('cantidadPorUnidad', data.cantidadPorUnidad.toString())
    formProducto.append('precioCompra', data.precioCompra.toString())
    formProducto.append('precioVenta', data.precioVenta.toString())
    formProducto.append('alertaCantidad', data.alertaCantidad.toString())
    formProducto.append('sobrante', data.sobrante.toString())
    formProducto.append('categoria', data.categoria.nombre)
    formProducto.append('descripcion', data.descripcion)
    formProducto.append('estados', data.estados)
    formProducto.append('marca', data.marca)
    data.tags.forEach(tag => {
      formProducto.append('tags', tag)
    })
    formProducto.append('visibilidad', data.visibilidad.toString())
    formProducto.append('precios', JSON.stringify(data.precios))
    formProducto.append('imagen', data.imagen)

    try {
      const resp = await fetchConToken({
        endpoint: 'products',
        body: formProducto,
        method: 'POST'
      })
      if (resp) return { ok: true }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ProductoContext.Provider
      value={{
        ...state,
        dispatchProducto: dispatch,
        obtenerProductosPorCategoria,
        createNewProduct: crearNuevoProducto
      }}
    >
      {children}
    </ProductoContext.Provider>
  )
}
