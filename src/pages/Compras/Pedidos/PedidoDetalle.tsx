import { useLocation } from 'react-router-dom'
// import { formatDate } from '../../../Utils/formatDate'
import moment from 'moment'
import 'moment/locale/es'
moment.locale('es')

const PedidoDetalle = () => {
  const { state: { order } } = useLocation()

  const {
    state,
    code,
    numberOrder,
    client: { names, surnames },
    list: { products }
  } = order

  // number of items of a arreglo

  return (
    <div className="detelle_pedido overflow-y-auto">
      <h2 className=' text-center bg-color_green_3  text-color_green_7 tracking-widest py-4 rounded-lg text-lg font-semibold'>Orden #{numberOrder} - {state}</h2>

      <p className="text-center text-color_green_7 text-lg mt-4 capitalize">{names} {surnames}</p>
      <div className=" overflow-y-auto text-color_green_6 mt-7">
        <p className="flex  px-5 justify-between">
          <span className="  ">Cantidad productos</span>
          <span className="text-color_green_7    ">{products.length}</span>
        </p>
        <span className="bg-color_green_4 my-3 block w-full border border-color_green_4" />

        <p className="flex  text-color_green_6 px-5 justify-between">
          <span className=" ">Codigo compra</span>
          <span className="text-color_green_7 uppercase ">{code}</span>
        </p>
        <span className="bg-color_green_4 my-3 block w-full border border-color_green_4" />

        <p className="flex   px-5 justify-between">
          <span className=" ">Fecha de compra</span>
          {/* <span className="text-color_green_7  ">{formatDate(createdAt)}</span> */}
        </p>
        <span className="bg-color_green_4 my-3 block w-full border border-color_green_4" />

        <p className="flex justify-between  px-5">
          <span className="  ">Total de la compra</span>
          <span className="text-color_green_7  ">S/. 125.00</span>
        </p>
        <span className="bg-color_green_4 my-3 block w-full border border-color_green_4" />

        <p className="flex justify-between  px-5">
          <span className="  ">Estado de la compra</span>
          <span className="text-color_green_7  ">{state}</span>
        </p>
        <span className="bg-color_green_4 my-3 block w-full border border-color_green_4" />

      </div>
    </div>
  )
}

export default PedidoDetalle
