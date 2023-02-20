import { RadioGroup } from '@headlessui/react'
import './cssViewProduct.css'
import { motion } from 'framer-motion'
import { v4 as uuidv4 } from 'uuid'
// import { IconDelete } from 'Components/Atoms/Icons';
import { IProducto } from 'types-yola';
import { useSwitchWeight } from 'hooks/useSwitchWeight';
import { convertirTipoVenta } from 'Utils/pipe';
import { NuevoProducto, OutletProducto } from 'pages/productos/NuevoProducto';
import { IconDelete } from 'Components/Icons';
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';


interface Props {
  producto: NuevoProducto
  precios: Precio[],
}

interface Precio {
  _id?: string;
  peso: number;
  precio: number;
  cantidad?: number;
  textoPesoA?: string;
  textoPesoB?: string;

}


const SwitchWeight = ({ producto, precios }:Props) => {

  const { precio } = useOutletContext<OutletProducto>()

  const {
    pesoSeleccionado,
    seleccionarPeso,
    // montoTotalDelProducto,
    // cantidadTotalDelProducto,

  } = useSwitchWeight({
    producto,
  });

  return (
    <>
      {pesoSeleccionado && (
        <>
          <RadioGroup
            value={pesoSeleccionado}
            onChange={(e) => seleccionarPeso(e)}
            className="flex w-full justify-between gap-x-2"
          >
            {precios.map(
              ({textoPesoA, textoPesoB, _id},index) => (
                <RadioGroup.Option
                  key={_id}
                  value={_id}
                  className=" w-full "
                >
                  {({ checked }) => {
                    if(checked) {
                      localStorage.setItem("position", JSON.stringify(index))
                    }
                    return (
                      <motion.button
                        type='button'
                        className={`w-full overflow-hidden truncate rounded-sm border border-black px-6 py-4 tracking-tight transition duration-300 ease-in-out ${
                          checked
                            ? 'width-active1 bg-black text-white  '
                            : 'width-inactive1 bg-white'
                        }`}
                      >
                        {checked ? textoPesoB : textoPesoA}
                        {/* {checked ? precio.textoPesoB : precio.textoPesoA} */}
                      </motion.button>
                    )
                  }}
                </RadioGroup.Option>
              )
            )}
          </RadioGroup>

          <div className="flex w-full flex-col gap-y-1">
            <p className="flex w-full justify-between ">
              <span className="">Precio</span>
              <span>
                <span className="text-md"> S/. </span>
                <span className="text-lg font-extrabold">
                  {/* {isNaN(precio?.precio) ? 0 : precio?.precio} */}
                  {precio?.precio ?? 0}
                  </span>
              </span>
            </p>


            {/* <p className="flex w-full justify-between">
              <span>Cantidad Total</span>
              <span className="text-color_green_7">
                <motion.span
                  initial={{ scale: 1.5 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  exit={{ scaleY: 0 }}
                  // key={precioTotalSeleccionado}
                  className="inline-block font-bold"
                >
                  {cantidadTotalDelProducto ?? 0}
                </motion.span>
                 {` ${convertirTipoVenta(producto.tipoVenta) }`}
              </span>
            </p> */}
            {/* <p className="flex w-full justify-between">
              <span>Monto total</span>
              <span className="text-color_green_7">
                {" S/. "}
                <motion.span
                  initial={{ scale: 1.5 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  exit={{ scaleY: 0 }}
                  className="inline-block font-bold"
                >
                  {montoTotalDelProducto ?? 0}
                </motion.span>
              </span>
            </p> */}
          </div>

          {/* BUTTONS */}

          <div className="flex w-full items-center justify-between" >
            <motion.button
              type='button'
              transition={{ duration: 0.2 }}

              className={`w-48 bg-orange-600 py-3 font-poppins font-semibold text-white ${
                false ? 'cursor-wait' : 'cursor-pointer'
              }`}
            >
              Añadir
            </motion.button>

            <motion.button
              type='button'
              className="flex h-full w-14 items-center justify-center text-2xl hover:text-orange-600 ease-in duration-300"
            >
              <IconDelete />
            </motion.button>
          </div>
        </>
      )}
    </>
  )
}

export default SwitchWeight
