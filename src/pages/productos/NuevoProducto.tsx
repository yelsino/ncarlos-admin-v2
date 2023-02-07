import PuntosNext from 'Components/utilidades/PuntosNext'
import { ProductoContext } from 'context/productos/ProductoContext'
import { useState, useEffect, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { IProducto, Precio } from 'types-yola'
import { v4 as uuidv4 } from 'uuid'

export interface OutletProducto {
  nuevoProducto: NuevoProducto
  setNuevoProducto: React.Dispatch<React.SetStateAction<NuevoProducto>>
  setPrecio: React.Dispatch<React.SetStateAction<Precio>>
  precio: Precio
}

type PartialProducto = Partial<IProducto>;
export interface NuevoProducto extends PartialProducto {
  imagenLocal: string;
}

const NuevoProducto = () => {

  const [precio, setPrecio] = useState<Precio>(null);
  const [nuevoProducto, setNuevoProducto] = useState<NuevoProducto>({
    _id: uuidv4(),
    nombre: "",
    imagen: null,
    descripcion: "",
    marca: "",
    tipoVenta: "KILOGRAMOS",
    precioCompra: 0,
    precioVenta: 0,
    unidades: 0,
    sobrante: 0,
    cantidadPorUnidad: 0,
    envoltorio: "COSTALES",
    estados: "CON_STOCK",
    visibilidad: true,
    alertaCantidad: 0,
    categoria: { nombre: "VEGETALES"},
    tags: [],
    precios: [],
    imagenLocal: null,
  })


  return (
    // <div className="nuevo_producto  mx-auto max-w-sm overflow-y-auto pt-10">
    <div className="nuevo_producto  mx-auto max-w-md overflow-y-auto pt-10">
      {/* <pre>
        {JSON.stringify(nuevoProducto, null, 2)}
      </pre> */}
      <Outlet context={{
        nuevoProducto, 
        setNuevoProducto,
        setPrecio,
        precio
      }} />

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
  { id: uuidv4(), link: '/productos/nuevo-producto/precios-minoreo' },
  { id: uuidv4(), link: '/productos/nuevo-producto/stock' },
  { id: uuidv4(), link: '/productos/nuevo-producto/resumen' }
]
