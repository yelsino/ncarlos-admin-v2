import { useParams } from 'react-router-dom'
import NuevoProducto from './NuevoProducto'
import ProductoVegetal from './ProductoVegetal'

const ProductoCategoria = () => {
  const params = useParams()
  const { categoriaID } = params
  return (
    <>
      {
        categoriaID === 'nuevo-producto'
          ? <NuevoProducto />
          : <ProductoVegetal />

      }
    </>
  )
}

export default ProductoCategoria
