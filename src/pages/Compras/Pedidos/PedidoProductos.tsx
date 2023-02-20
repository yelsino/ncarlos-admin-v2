import { useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { OrderContext } from 'context/orders/OrderContext'

const PedidoProductos = () => {

  const { orden } = useContext(OrderContext)


  return (
    <>
      {orden && (
        <div className="productos_pedido flex flex-col gap-y-5 overflow-hidden overflow-y-auto ">
        {orden.lista.itemsLista.map((v) => (
          <div key={v._id} className="flex  justify-between ">
            <div className="flex items-center gap-x-5">
              <div className="bg-color_green_3 h-20 w-20 rounded-lg">
                <img alt="img pedido" src={v.producto?.imagen} />
              </div>
              <div className="flex flex-col">
                <span className="text-color_green_5">{v.cantidades.reduce((acc,curr)=> (acc+curr.cantidad) ,0) } unidades</span>
                <span className="text-color_green_7 text-lg">
                  {v.producto?.nombre}
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-color_green_6 text-lg">
                S/. {v.cantidades.reduce((acc,curr)=> (acc+curr.precio) ,0) }
              </span>
            </div>
          </div>
        ))}
      </div>
      )}
    </>
  )
}

export default PedidoProductos
