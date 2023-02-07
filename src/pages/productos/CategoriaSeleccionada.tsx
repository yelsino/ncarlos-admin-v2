import { ProductoContext } from 'context/productos/ProductoContext'
import { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import './productos.css'

const CategoriaSeleccionada = () => {
  const { categoria } = useParams();

  const { productos, dispatchProducto } = useContext(ProductoContext)

  return (
    <div className="mx-auto w-11/12 p-5">
      <div className="flex items-center justify-between">
        <p className=" font-poppins text-color_green_7 my-5 text-center text-lg font-medium capitalize">
          {categoria}
        </p>
        <Link
          to="/productos/nuevo-producto/nombre"
          state={{ from: categoria }}
          className="text-color_green_7 cursor-pointer p-2"
        >
          Añadir
        </Link>
      </div>
      <div className="productos_vegetales flex flex-col gap-y-5 overflow-hidden overflow-y-auto text-sm  ">
        {productos
          .filter((p) => p.categoria.nombre === categoria.toUpperCase())
          .map((p) => (
          <div key={p._id} className="flex  justify-between ">
            <div className="flex items-center gap-x-5">
              <Link
                onClick={() => {
                  dispatchProducto({
                    type: 'SELECCIONAR_PRODUCTO',
                    payload: p,
                  })
                }}
                to={`/productos/${categoria}/${p._id}`}
                className="bg-color_green_3 h-20 w-20 rounded-lg"
              >
                <img alt="img producto" src={p.imagen} />
              </Link>
              <div className="flex flex-col">
                <span className="text-color_green_5">5 unidades</span>
                <span className=" text-color_green_7">{p.nombre}</span>
              </div>
            </div>
            <div className="flex items-center">
              <span className=" text-color_green_6">S/. {p.precioVenta}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoriaSeleccionada
