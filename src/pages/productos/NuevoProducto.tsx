import PuntosNext from 'Components/utilidades/PuntosNext'
import { ProductoContext } from 'context/productos/productoContext'
import { useState, useEffect, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

const NuevoProducto = () => {
  const { productos } = useContext(ProductoContext) as any
  const LSproduct: any =
    JSON.parse(localStorage.getItem('LSproduct') as any) ||
    productos.keys_product
  const [product, setProduct] = useState(LSproduct)

  useEffect(() => {
    localStorage.setItem('LSproduct', JSON.stringify(product))
  }, [product])

  return (
    <div className="nuevo_producto  mx-auto max-w-sm overflow-y-auto pt-10">
      <Outlet context={[product, setProduct]} />

      <div className="mt-3">
        <PuntosNext puntos={rutas} />
      </div>
    </div>
  )
}

export default NuevoProducto

const rutas = [
  { id: uuidv4(), link: '/productos/nuevo-producto/nombre' },
  { id: uuidv4(), link: '/productos/nuevo-producto/datos-basicos' },
  { id: uuidv4(), link: '/productos/nuevo-producto/precios' },
  { id: uuidv4(), link: '/productos/nuevo-producto/stock' },
  { id: uuidv4(), link: '/productos/nuevo-producto/resumen' }
]
