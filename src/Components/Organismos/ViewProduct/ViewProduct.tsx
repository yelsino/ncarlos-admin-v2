import { motion } from 'framer-motion'
// import algoliasearch from 'algoliasearch'
import { useEffect, useState } from 'react'
import SimilarProducts from './SimilarProducts'
import { IProducto } from 'types-yola'
import SwitchWeight from './SwitchWeight'
import { NuevoProducto, OutletProducto } from 'pages/productos/NuevoProducto'
import { useOutletContext } from 'react-router-dom'


interface Precio {
  _id?: string;
  peso: number;
  precio: number;
  cantidad?: number;
  textoPesoA?: string;
  textoPesoB?: string;
}


interface Props {
  producto: NuevoProducto
  setModal: React.Dispatch<React.SetStateAction<boolean>>
  setItem: (item: IProducto | null) => void,
  setAdding: React.Dispatch<React.SetStateAction<boolean>>
  adding: boolean,
  precios: Precio[]
}

const ViewProduct = ({ producto,  precios }: Props) => {

    const { nombre,imagenLocal } = producto

  return (
    <motion.div
      className={`w-full bg-white  `}
    >

      {/* contenido */}
      <motion.div className="mx-auto  flex  flex-col sm:max-w-none sm:flex-row  " >
        <motion.div  className="flex w-[360px] flex-col items-center gap-7  sm:overflow-y-scroll px-5  mx-auto ">
          <p className="font-poppins text-xl font-semibold ">{nombre}</p>
          <div className="mb-3 flex h-[130px] w-[140px] items-center justify-center rounded-tl-[50px] rounded-tr-[10px] rounded-bl-[20px] rounded-br-[50px] bg-emerald-300 bg-opacity-50 ">
            <img src={imagenLocal} className=" mb-3 scale-125" />
          </div>

          <SwitchWeight producto={producto} precios={precios}  />

          <div className="flex  w-full flex-col gap-y-3">
            {producto.descripcion &&
              producto.descripcion.split('.').map((item, index) => (
                <p key={index} className="font-poppins text-gray-600 ">
                  {item}.
                </p>
              ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default ViewProduct
