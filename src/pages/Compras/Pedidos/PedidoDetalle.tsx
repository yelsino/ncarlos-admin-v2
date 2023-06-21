import { useLocation } from 'react-router-dom'
import moment from 'moment'
import 'moment/locale/es'
import { useContext } from 'react'
import { OrderContext } from 'context/orders/orderContext'
moment.locale('es')

const PedidoDetalle = () => {

  const { orden } = useContext(OrderContext)


  // number of items of a arreglo

  return (
   <>
    {orden && (
       <div className="detelle_pedido overflow-y-auto">
       <h2 className=" bg-color_green_3 text-color_green_7  rounded-lg py-4 text-center text-lg font-semibold tracking-widest">
         Orden #{orden.numero} - {orden.estado}
       </h2>
 
       <p className="text-color_green_7 mt-4 text-center text-lg capitalize">
         {orden.usuario.nombres} {orden.usuario.apellidos}
       </p>
       <div className=" text-color_green_6 mt-7 overflow-y-auto">
         <p className="flex  justify-between px-5">
           <span className="  ">Cantidad productos</span>
           <span className="text-color_green_7    ">{orden.lista.itemsLista.length}</span>
         </p>
         <span className="bg-color_green_4 border-color_green_4 my-3 block w-full border" />
 
         <p className="text-color_green_6  flex justify-between px-5">
           <span className=" ">Codigo compra</span>
           <span className="text-color_green_7 uppercase ">{orden.codigo}</span>
         </p>
         <span className="bg-color_green_4 border-color_green_4 my-3 block w-full border" />
 
         <p className="flex   justify-between px-5">
           <span className=" ">Fecha de compra</span>
           {/* <span className="text-color_green_7  ">{orden.fechaEntrega}</span> */}
         </p>
         <span className="bg-color_green_4 border-color_green_4 my-3 block w-full border" />
 
         <p className="flex justify-between  px-5">
           <span className="  ">Total de la compra</span>
           <span className="text-color_green_7  ">S/. 125.00</span>
         </p>
         <span className="bg-color_green_4 border-color_green_4 my-3 block w-full border" />
 
         <p className="flex justify-between  px-5">
           <span className="  ">Estado de la compra</span>
           <span className="text-color_green_7  ">{orden.estado}</span>
         </p>
         <span className="bg-color_green_4 border-color_green_4 my-3 block w-full border" />
       </div>
     </div>
    )}
   </>
  )
}

export default PedidoDetalle
