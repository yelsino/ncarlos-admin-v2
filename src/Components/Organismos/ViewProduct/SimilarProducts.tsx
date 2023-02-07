import { ProductoContext } from 'context/productos/ProductoContext'
import { motion } from 'framer-motion'
import { useContext } from 'react'

const SimilarProducts = ({ similarProducts }) => {
  const { productos,dispatchProducto } = useContext(ProductoContext)

  return (
    <div className="px-10 sm:h-[600px] sm:overflow-y-scroll  sm:border-l sm:pb-32 ">
      <h2 className="pb-7 text-center font-poppins text-lg font-medium tracking-tight text-gray-500">
        Similares
      </h2>
      {/* NOTE: IDENTIFICAR DONDE SE SETEA Y COMO */}
      <motion.div className="flex flex-col items-center gap-y-10 ">
        {similarProducts.map((p, i) => (
          <motion.div
            layoutId={p}
            key={p._id}
            onClick={() => {
              
              const findProduct = productos.find((v) => v.nombre === p.name)
              
              if (!findProduct) 
              return console.log('Producto no encontrado');
              
              dispatchProducto({
                type: 'SELECCIONAR_PRODUCTO',
                payload: findProduct
              })
             
            }}
            className=" flex h-[75px] w-[192px] cursor-pointer  items-center  justify-center  "
          >
            {/* <ItemProduct product={p} index={i} /> */}
          </motion.div>
        ))}
        {similarProducts.length === 0 && (
          <p className="text-center text-gray-600">
            No se encontraron coincidencias
          </p>
        )}
      </motion.div>
    </div>
  )
}

export default SimilarProducts

