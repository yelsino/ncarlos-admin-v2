import { RadioGroup } from '@headlessui/react'
import './cssViewProduct.css'
import { motion } from 'framer-motion'
import { v4 as uuidv4 } from 'uuid'
// import { IconDelete } from 'Components/Atoms/Icons';
import { IProducto } from 'types-yola';
import { useSwitchWeight } from 'hooks/useSwitchWeight';
import { convertirTipoVenta } from 'Utils/pipe';
import { NuevoProducto } from 'pages/productos/NuevoProducto';
import { IconDelete } from 'Components/Icons';
import { useState } from 'react';


interface Props {
  producto: NuevoProducto
  precios: Precio[],
  // setAdding: React.Dispatch<React.SetStateAction<boolean>>
  // adding: boolean
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

  // const [posicionSeleccionada, setPosicionSeleccionada] = useState<number>(0)

  const { 
    pesoSeleccionado,
    seleccionarPeso,
    cantidadEnLista,
    precioSeleccionado,
    montoTotalDelProducto,
    cantidadTotalDelProducto,
    // quantitySelected,
    // totalProduct,
    // totalWeight,
    // removeProductOfList,
    itemLista,
    // addProductToList
  } = useSwitchWeight({ 
    producto, 
    // posicionSeleccionada
    // setAdding, 
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
                  onClick={(e)=>e.stopPropagation()}
                >
                  {({ checked }) => {
                    if(checked) {
                      localStorage.setItem("position", JSON.stringify(index))
                    }
                    return (
                      <motion.button
                        className={`w-full overflow-hidden truncate rounded-sm border border-black px-6 py-4 tracking-tight transition duration-300 ease-in-out ${
                          checked
                            ? 'width-active1 bg-black text-white  '
                            : 'width-inactive1 bg-white'
                        }`}
                      >
                        {checked ? textoPesoB : textoPesoA}
                      </motion.button>
                    )
                  }}
                </RadioGroup.Option>
              )
            )}
          </RadioGroup>

          {/* PRICE */}

          <div className="flex w-full flex-col gap-y-1">
            <p className="flex w-full justify-between ">
              <span className="">Precio</span>
              <span>
                <span className="text-md"> S/. </span>
                <span className="text-lg font-extrabold">
                  {isNaN(precioSeleccionado) ? 0 : precioSeleccionado}
                  </span>
              </span>
            </p>

            <p className="flex w-full justify-between">
              <span>Cantidad en lista</span>

              <span className="text-color_green_7">
                {cantidadEnLista ?? 0} und</span>
            </p>
            <p className="flex w-full justify-between">
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
            </p>
            <p className="flex w-full justify-between">
              <span>Monto total</span>
              <span className="text-color_green_7">
                {" S/. "}
                <motion.span
                  initial={{ scale: 1.5 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  exit={{ scaleY: 0 }}
                  // key={precioTotalSeleccionado}
                  className="inline-block font-bold"
                >
                  {montoTotalDelProducto ?? 0}  
                </motion.span>
              </span>
            </p>
          </div>

          {/* BUTTONS */}

          <div className="flex w-full items-center justify-between" >
            <motion.button
              // animate={adding ? { scale: 0.95 } : { scale: 1 }}
              transition={{ duration: 0.2 }}
              // onClick={()=>addProductToList()}
              // disabled={adding}
              className={`w-48 bg-orange-600 py-3 font-poppins font-semibold text-white ${
                false ? 'cursor-wait' : 'cursor-pointer'
              }`}
            >
              Añadir
            </motion.button>

            <motion.button
              // onClick={removeProductOfList}
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
