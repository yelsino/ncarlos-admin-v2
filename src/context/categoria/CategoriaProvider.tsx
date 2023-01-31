import { createContext, useState } from 'react'
import { ICategoria } from 'types-yola'
import { fetchConToken } from '../../helpers/fetch'
import { CategoriaContext } from './CategoriaContext'


export interface CategoriaState {
  categorias: ICategoria[]
}

const initialState = {
  categorias: []
}

export const CateriaProvider = ({ children }:any) => {
  const [categoria, setCategoria] = useState(initialState)

  const obtenerCategorias = async () => {
    const resp = await fetchConToken('categories')
    console.log(resp)
    if (resp.ok) {
      setCategoria({ ...categoria, categorias: resp.categorias })
    }
  }

  return (
    <CategoriaContext.Provider value={{
      ...categoria,
      obtenerCategorias
    }}>
      {children}
    </CategoriaContext.Provider>
  )
}
