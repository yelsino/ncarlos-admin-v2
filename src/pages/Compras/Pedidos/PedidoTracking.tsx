import { OrderContext } from 'context/orders/orderContext'
import { useContext } from 'react'

const PedidoTracking = () => {

  const { orden } = useContext(OrderContext)

  return (
    <>
      {orden && (
        <div className="tracking_pedido  flex  gap-x-5 overflow-y-auto">
        <div>
          <div className="bg-color_green_7 h-5  w-5 rounded-full"></div>
          <div className=" border-color_green_4 my-1 ml-2 h-14 w-1 border-2 border-dashed bg-clip-border " />
          <div className="border-color_green_5 h-5 w-5 rounded-full border-2"></div>
          <div className=" border-color_green_4 my-1 ml-2 h-14 w-1 border-2 border-dashed bg-clip-border " />
          <div className="border-color_green_5 h-5 w-5 rounded-full border-2"></div>
          <div className=" border-color_green_4 my-1 ml-2 h-14 w-1 border-2 border-dashed bg-clip-border " />
          <div className="border-color_green_5 h-5 w-5 rounded-full border-2"></div>
        </div>
        <span className="flex flex-col gap-y-14">
          <p className="text-color_green_7 ">Pedido recibido</p>
          <p className="text-color_green_5 ">Pedido despachado</p>
          <p className="text-color_green_5 pt-1">Pedido enviado</p>
          <p className="text-color_green_5 pt-1">Pedido entregado</p>
        </span>
      </div>
      )}
    </>
  )
}

export default PedidoTracking
