import { useReducer } from 'react'
import { ICategoria, IRespuesta } from 'types-yola'
import { fetchConToken } from '../../helpers/fetch'
import { CategoriaContext } from './CategoriaContext'
import { categoriaReducer } from './CategoriaReducer'

export interface CategoriaState {
  categorias: ICategoria[],
  categoria: ICategoria | null
}

const INITIAL_STATE = {
  categorias: [],
  categoria: null
}

export const CategoriaProvider = ({ children }:any) => {
  const [categoria, setCategoria] = useReducer(categoriaReducer, INITIAL_STATE)

  const obtenerCategorias = async () => {
    const resp = await fetchConToken<IRespuesta<ICategoria[]>>({ endpoint: 'categorias' })
    if (resp.ok) {
      setCategoria({
        type: 'OBTENER_CATEGORIAS',
        payload: resp.data
      })
    }
  }

  const obtenerCategoria = async (id:string) => {
    const resp = await fetchConToken<IRespuesta<ICategoria>>({ endpoint: `categorias/${id}` })
    if (resp.ok) {
      setCategoria({
        type: 'SELECCIONAR_CATEGORIA',
        payload: resp.data
      })
    }
  }

  return (
    <CategoriaContext.Provider value={{
      ...categoria,
      obtenerCategorias,
      obtenerCategoria
    }}>
      {children}
    </CategoriaContext.Provider>
  )
}
