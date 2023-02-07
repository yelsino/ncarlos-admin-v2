import { IconNext } from 'Components/Icons'
import ButtonNext from 'Components/utilidades/ButtonNext'
import { NotificacionContext } from 'context/Notificaciones/NotificacionContext'
import { useContext } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { OutletProducto } from '../NuevoProducto'

const StockProducto = () => {
  const { nuevoProducto, setNuevoProducto} = useOutletContext<OutletProducto>();

  const navigate = useNavigate() as any

  const alert = useContext(NotificacionContext) as any

  const handleSubmit = () => {
    // if (
    //   product.quantity <= 0 ||
    //   product.spare <= 0 ||
    //   product.alert_quantity <= 0
    // ) {
    //   alert.setNotificacion({
    //     type: 1,
    //     message: 'Los datos deben ser mayor a cero'
    //   })
    //   return
    // }
    navigate('/productos/nuevo-producto/resumen')
  }

  return (
    <div className="flex w-full flex-col items-center ">
      <p className="text-color_green_7 font-poppins text-center text-2xl font-semibold">
        {nuevoProducto?.nombre}
      </p>
      <div className="w-full">
        <div className="mx-auto w-36">
          <img src={nuevoProducto.imagenLocal} />
        </div>

        <div className="  text-color_green_6 mt-3 w-full ">
          <p className="flex  justify-between px-5">
            <span className="  ">Cantidad por {nuevoProducto?.envoltorio}</span>
            <span className="text-color_green_7    ">
              {nuevoProducto?.cantidadPorUnidad} {nuevoProducto?.tipoVenta}
            </span>
          </p>
          <span className="bg-color_green_4 border-color_green_4 my-3 block w-full border" />

          <p className="flex justify-between  px-5">
            <span className="  ">Precio por {nuevoProducto?.envoltorio}</span>
            <span className="text-color_green_7  ">
              S/. {nuevoProducto.precioVenta}
            </span>
          </p>
          <span className="bg-color_green_4 border-color_green_4 my-3 block w-full border" />

          <p className="flex justify-between  px-5">
            <span className="  ">Precio por {nuevoProducto?.tipoVenta}</span>
            <span className="text-color_green_7  ">
              s/. 
              {/* {nuevoProducto.retail_price}{' '} */}
            </span>
          </p>
        </div>

        <p className="text-color_green_7 font-poppins my-5 text-center text-lg font-light">
          Configuración de stock
        </p>
        <div className="flex w-full flex-col items-center ">
          <div className="w-full">
            <p className="text-color_green_6 mb-1">
              ¿Cuantas {nuevoProducto.envoltorio} tienes?
            </p>
            <input
              type="number"
              value={nuevoProducto.cantidadPorUnidad}
              onChange={(e) => {}
                // setnuevoProducto({ ...nuevoProducto, quantity: e.target.value })
              }
              className="text-color_green_7 bg-color_green_3 mb-5   w-full  rounded-xl  p-4 text-base outline-none"
            />
          </div>
          <div className="w-full">
            <p className="text-color_green_6 mb-1">
              ¿Cuantos {nuevoProducto.tipoVenta} sobran?
            </p>
            <input
              type="number"
              value={nuevoProducto.sobrante}
              onChange={(e) => {}
                // setnuevoProducto({ ...nuevoProducto, spare: e.target.value })
              }
              className="text-color_green_7 bg-color_green_3 mb-5   w-full  rounded-xl  p-4 text-base outline-none"
            />
          </div>
          <div className="mb-5 w-full">
            <p className="text-color_green_6 mb-1">
              ¿Cantidad minima para alertarte?
            </p>
            <input
              type="number"
              value={nuevoProducto.alertaCantidad}
              onChange={(e) => {}
                // setnuevoProducto({ ...nuevoProducto, alert_quantity: e.target.value })
              }
              className="text-color_green_7 bg-color_green_3 mb-5   w-full  rounded-xl  p-4 text-base outline-none"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <ButtonNext onClick={handleSubmit} text={<IconNext />} />
      </div>
    </div>
  )
}

export default StockProducto
