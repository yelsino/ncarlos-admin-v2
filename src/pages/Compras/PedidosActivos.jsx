import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { IconLink } from "../../Components/Icons";
import { OrderContext } from "../../context/orders/OrderContext";


const PedidosActivos = () => {


  const { data, getOrders } = useContext(OrderContext);


  useEffect(() => {
    getOrders();
  }, []);


  return (
    <div className="relative">

      <div className="absolute bottom-32 right-0 z-20 rounded-full bg-black text-white w-12 h-12 flex justify-center items-center shadow-lg text-sm font-bold font-poppins cursor-pointer">
        ADD
      </div>

      <div className="flex font-bold text-color_gray_1 mb-5 font-poppins sm:text-lg sm:px-5">
        <span className="w-8/12 sm:w-5/12 truncate ">Lista</span>
        <div className="w-4/12 sm:w-7/12 flex">
          <span className="w-full text-center hidden md:block truncate">Productos</span>
          <span className="w-full truncate text-right hidden sm:block">Monto</span>
          <span className="w-full sm:mx-2 truncate  text-center">Orden</span>
        </div>
      </div>

      <div className="pedidos-activos overflow-y-auto flex flex-col gap-y-5  sm:px-5">
        {data.orders.map(o => (
          <Link
            key={o._id} to={`/ventas/pedidos/${o._id}/detalles`}
            state={{ order: o }}
            className="text-gray-500 hover:text-color_green_7 text-base sm:text-lg w-full relative flex items-center py-1 "
          >
            <div className="w-full flex ">
              <span className="w-8/12 sm:w-5/12 truncate first-letter:uppercase">{o.list.name}</span>
              <div className="w-4/12 sm:w-7/12 flex">
                <span className="w-full text-center hidden md:block">{15}</span>
                <span className="w-full text-right hidden sm:block">S/.{59.9}</span>
                <span className="w-full  text-center">#{o.number_order}</span>

              </div>
            </div>
            <span className="text-color_green_7 absolute right-0 md:-right-3 "><IconLink /></span>
          </Link>
        ))}

      </div>
    </div>
  );
}

export default PedidosActivos;

