import { createContext, useState, } from 'react';
import { fetchConToken, } from '../../helpers/fetch';

export const CategoriaContext = createContext(null);

const initialState = {
  categorias: [],
}

export const CateriaProvider = ({ children }) => {

  const [categoria, setCategoria] = useState(initialState);


  const obtenerCategorias = async () => {
    const resp = await fetchConToken('categorias');
    console.log(resp);
    if (resp.ok) {
      setCategoria({ ...categoria, categorias: resp.categorias });
    }

  }

  return (
    <CategoriaContext.Provider value={{
      categorias: categoria.categorias,
      obtenerCategorias
    }}>
      {children}
    </CategoriaContext.Provider>
  )

}