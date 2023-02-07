import { OrderContext } from 'context/orders/OrderContext'
import { useContext, useEffect } from 'react'

const PedidosActivos = () => {
  const { getOrders } = useContext(OrderContext)

  useEffect(() => {
    getOrders()
  }, [])

  return (
    <div className="relative">
      <div className="font-poppins absolute bottom-32 right-0 z-20 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-black text-sm font-bold text-white shadow-lg">
        ADD
      </div>

      <div className="text-color_gray_1 font-poppins mb-5 flex font-bold sm:px-5 sm:text-lg">
        <span className="w-8/12 truncate sm:w-5/12 ">Lista</span>
        <div className="flex w-4/12 sm:w-7/12">
          <span className="hidden w-full truncate text-center md:block">
            Productos
          </span>
          <span className="hidden w-full truncate text-right sm:block">
            Monto
          </span>
          <span className="w-full truncate text-center  sm:mx-2">Orden</span>
        </div>
      </div>

      <div className="pedidos-activos flex flex-col gap-y-5 overflow-y-auto  sm:px-5">
        {/* {data.orders.map((o:any) => (
          <Link
            key={o._id} to={`/ventas/pedidos/${o._id}/detalles`}
            state={{ order: o }}
            className="text-gray-500 hover:text-color_green_7 text-base sm:text-lg w-full relative flex items-center py-1 "
          >
            <div className="w-full flex ">
              <span className="w-8/12 sm:w-5/12 truncate first-letter:uppercase">{o?.list?.name}</span>
              <div className="w-4/12 sm:w-7/12 flex">
                <span className="w-full text-center hidden md:block">{15}</span>
                <span className="w-full text-right hidden sm:block">S/.{59.9}</span>
                <span className="w-full  text-center">#{o.number_order}</span>

              </div>
            </div>
            <span className="text-color_green_7 absolute right-0 md:-right-3 "><IconLink /></span>
          </Link>
        ))} */}
      </div>
    </div>
  )
}

export default PedidosActivos
