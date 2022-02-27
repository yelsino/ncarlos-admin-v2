import { createContext, useState, } from 'react';
import { fetchConToken, } from '../../helpers/fetch';

export const ProductoContext = createContext(null);

const initialState = {
  productos: [],
}

export const ProductoProvider = ({ children }) => {

  const [productos, setProductos] = useState(initialState);




  const obtenerProductoXcategoria = async (name) => {
    const resp = await fetchConToken(`productos/${name}`);

    if (resp.ok) {
      setProductos({ ...productos, productos: resp.productos });
    }
  }

  return (
    <ProductoContext.Provider value={{
      productos,
      obtenerProductoXcategoria
    }}>
      {children}
    </ProductoContext.Provider>
  )

}