import { useParams } from 'react-router-dom'
import NuevoProducto from './NuevoProducto'
import CategoriaSeleccionada from './CategoriaSeleccionada'

const ProductoCategoria = () => {
  const params = useParams()
  const { categoria } = params
  return (
    <>
      {categoria === 'nuevo-producto' ? (
        <NuevoProducto />
      ) : (
        <CategoriaSeleccionada />
      )}
    </>
  )
}

export default ProductoCategoria
