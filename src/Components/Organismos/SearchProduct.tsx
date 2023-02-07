import { ProductoAction } from "context/productos/productoReducer"
import { Link } from "react-router-dom"
import { IProducto } from "types-yola"

interface Props {
	producto: IProducto,
	dispatch: React.Dispatch<ProductoAction>
}

export const SearchProduct = ({producto, dispatch}:Props) => {

	const { imagen, nombre, precios } = producto

	return (
    <Link
      onClick={() => {
        dispatch({
          type: 'SELECCIONAR_PRODUCTO',
          payload: producto
        })
      }}
      to={`/productos/${producto.categoria.nombre}/${producto._id}`}
      className="w-full"
    >
      <div className="flex gap-4 p-4 hover:bg-color_green_2">
        <img src={imagen} alt={nombre} className="h-12 w-12 object-contain" />
        <div className="flex flex-col justify-center">
          <h3 className="font-semibold text-gray-600">{nombre}</h3>
          <p className="text-xs text-gray-600">
            S/. {precios.length >= 1 ? precios[0].precio : 0}
          </p>
        </div>
      </div>
    </Link>
  )
}