import { createContext, useState, } from 'react';
import { fetchConToken, } from '../../helpers/fetch';

export const ListContext = createContext(null);

const initialState = {
  lists: [],
}

export const ListProvider = ({ children }) => {

  const [lists, setLists] = useState(initialState);




  const obtenerListas = async (name) => {
    const resp = await fetchConToken(`lists`);

    if (resp.ok) {
      setLists({ ...productos, productos: resp.productos });
    }
  }

  return (
    <ProductoContext.Provider value={{
      lists,
      obtenerListas
    }}>
      {children}
    </ProductoContext.Provider>
  )

}