import { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductoContext } from '../../context/productos/ProductoContex';
import './productos.css'
const ProductoVegetal = () => {

  const { categoriaID } = useParams()

  const { productos, obtenerProductoXcategoria } = useContext(ProductoContext);

  console.log(categoriaID);

  useEffect(() => {
    obtenerProductoXcategoria(`${categoriaID.toUpperCase()}`);
  }, [])
  return (

    <div className="w-11/12 p-5 mx-auto">
      <div className='flex items-center justify-between'>
        <p className=" my-5 text-lg font-poppins font-medium text-color_green_7 text-center">Vegetales</p>
        <Link to='/productos/nuevo-producto/nombre' className='text-color_green_7 cursor-pointer p-2'>Añadir</Link>
      </div>
      <div className="productos_vegetales overflow-y-auto flex gap-y-5 flex-col overflow-hidden text-sm  ">

        {productos.productos.map(p => (
          <div key={p.id} className="flex  justify-between ">
            <div className="flex items-center gap-x-5">
              <Link to={`/productos/${categoriaID}/detalle`} className="bg-color_green_3 rounded-lg w-20 h-20">
                <img alt='img producto' src={p.img} />
              </Link>
              <div className="flex flex-col">

                <span className="text-color_green_5">5 unidades</span>
                <span className=" text-color_green_7">{p.nombre}</span>
              </div>
            </div>
            <div className="flex items-center">
              <span className=" text-color_green_6">{p.precio_minoreo}</span>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default ProductoVegetal;


const productos = [
  { id: '1', name: 'Producto 1', price: 'S/. 100.00', img: 'https://cdn.pixabay.com/photo/2020/04/07/06/04/mandarin-orange-5012170_960_720.png' },
  { id: '2', name: 'Producto 2', price: 'S/. 100.00', img: 'https://cdn.pixabay.com/photo/2020/04/07/06/04/mandarin-orange-5012170_960_720.png' },
  { id: '3', name: 'Producto 3', price: 'S/. 100.00', img: 'https://cdn.pixabay.com/photo/2020/04/07/06/04/mandarin-orange-5012170_960_720.png' },
  { id: '4', name: 'Producto 4', price: 'S/. 100.00', img: 'https://cdn.pixabay.com/photo/2020/04/07/06/04/mandarin-orange-5012170_960_720.png' },
  { id: '5', name: 'Producto 5', price: 'S/. 100.00', img: 'https://cdn.pixabay.com/photo/2020/04/07/06/04/mandarin-orange-5012170_960_720.png' },
  { id: '6', name: 'Producto 6', price: 'S/. 100.00', img: 'https://cdn.pixabay.com/photo/2020/04/07/06/04/mandarin-orange-5012170_960_720.png' },
  { id: '7', name: 'Producto 7', price: 'S/. 100.00', img: 'https://cdn.pixabay.com/photo/2020/04/07/06/04/mandarin-orange-5012170_960_720.png' },
  { id: '8', name: 'Producto 8', price: 'S/. 100.00', img: 'https://cdn.pixabay.com/photo/2020/04/07/06/04/mandarin-orange-5012170_960_720.png' },
  { id: '9', name: 'Producto 9', price: 'S/. 100.00', img: 'https://cdn.pixabay.com/photo/2020/04/07/06/04/mandarin-orange-5012170_960_720.png' },
  { id: '10', name: 'Producto 10', price: 'S/. 100.00', img: 'https://cdn.pixabay.com/photo/2020/04/07/06/04/mandarin-orange-5012170_960_720.png' },
  { id: '11', name: 'Producto 11', price: 'S/. 100.00', img: 'https://cdn.pixabay.com/photo/2020/04/07/06/04/mandarin-orange-5012170_960_720.png' },
  { id: '12', name: 'Producto 12', price: 'S/. 100.00', img: 'https://cdn.pixabay.com/photo/2020/04/07/06/04/mandarin-orange-5012170_960_720.png' },
  { id: '13', name: 'Producto 13', price: 'S/. 100.00', img: 'https://cdn.pixabay.com/photo/2020/04/07/06/04/mandarin-orange-5012170_960_720.png' },
  { id: '14', name: 'Producto 14', price: 'S/. 100.00', img: 'https://cdn.pixabay.com/photo/2020/04/07/06/04/mandarin-orange-5012170_960_720.png' },

]