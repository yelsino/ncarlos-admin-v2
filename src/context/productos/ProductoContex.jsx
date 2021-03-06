import { createContext, useState, } from 'react';
import { fetchConToken, } from '../../helpers/fetch';

export const ProductoContext = createContext(null);

const initialState = {
  productos: [],
  keys_product: {
    name: '',
    img: '',
    img_local: '',
    category: 'frutas',
    wholesale_form: 'costales', // forma de venta al por mayoreo
    form_retail: 'kilos', // forma de venta al por minoreo
    wholesaling_price: 0, // precio al por mayoreo
    wholesaling_weight: 0, // peso del producto
    retail_price: 0, // precio al minudeo
    quantity: 0, // cantidad de paquetes
    spare: 0, // cantidad sobrante
    alert_quantity: 0, // cantidad minima para alertar 
  }
}

export const ProductoProvider = ({ children }) => {

  const [productos, setProductos] = useState(initialState);

  const obtenerProductoXcategoria = async (name) => {
    const resp = await fetchConToken(`products/${name}`);

    if (resp.ok) {
      setProductos({ ...productos, productos: resp.productos });
    }
  }

  const createNewProduct = async (data) => {

    console.log(data);
    const formProduct = new FormData();
    formProduct.append('name', data.name);
    formProduct.append('img', data.img);
    formProduct.append('category', data.category);
    formProduct.append('wholesale_form', data.wholesale_form);
    formProduct.append('form_retail', data.form_retail);
    formProduct.append('wholesaling_price', Number(data.wholesaling_price));
    formProduct.append('wholesaling_weight', Number(data.wholesaling_weight));
    formProduct.append('retail_price', Number(data.retail_price));
    formProduct.append('quantity', Number(data.quantity));
    formProduct.append('spare', Number(data.spare));
    formProduct.append('alert_quantity', Number(data.alert_quantity));

    try {
      const resp = await fetchConToken(`products`, formProduct, 'POST')
      if (resp.ok) return { ok: true };
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <ProductoContext.Provider value={{
      productos,
      obtenerProductoXcategoria,
      createNewProduct,
    }}>
      {children}
    </ProductoContext.Provider>
  )

}