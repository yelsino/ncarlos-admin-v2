import { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ProductoContext } from '../../context/productos/ProductoContex'
import './productos.css'
const ProductoVegetal = () => {
  const { categoriaID } = useParams() as any

  const { productos, obtenerProductoXcategoria }:any = useContext(ProductoContext)

  useEffect(() => {
    obtenerProductoXcategoria(`${categoriaID.toUpperCase()}`)
  }, [])
  return (

    <div className="w-11/12 p-5 mx-auto">
      <div className='flex items-center justify-between'>
        <p className=" my-5 text-lg font-poppins font-medium text-color_green_7 text-center capitalize">{categoriaID}</p>
        <Link
          to='/productos/nuevo-producto/nombre'
          state={{ from: categoriaID }}
          className='text-color_green_7 cursor-pointer p-2'>Añadir</Link>
      </div>
      <div className="productos_vegetales overflow-y-auto flex gap-y-5 flex-col overflow-hidden text-sm  ">

        {productos.productos.map((p:any) => (
          <div key={p._id} className="flex  justify-between ">
            <div className="flex items-center gap-x-5">
              <Link to={`/productos/${categoriaID}/detalle`} className="bg-color_green_3 rounded-lg w-20 h-20">
                <img alt='img producto' src={p.img} />
              </Link>
              <div className="flex flex-col">

                <span className="text-color_green_5">5 unidades</span>
                <span className=" text-color_green_7">{p.name}</span>
              </div>
            </div>
            <div className="flex items-center">
              <span className=" text-color_green_6">{p.precio_minoreo}</span>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default ProductoVegetal
