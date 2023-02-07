import ButtonAction from 'Components/utilidades/ButtonAction'
import { NotificacionContext } from 'context/Notificaciones/NotificacionContext'
import { ProductoContext } from 'context/productos/ProductoContext'
import { useContext } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { OutletProducto } from '../NuevoProducto'

const ResumenProducto = () => {
  const { productos } = useContext(ProductoContext) as any
  const {nuevoProducto, setNuevoProducto} = useOutletContext<OutletProducto>();
  const navigate = useNavigate()
  const { createNewProduct } = useContext(ProductoContext) as any
  const alert = useContext(NotificacionContext) as any

  const sendNewProduct = async () => {
    // const res = await createNewProduct(product)
    // if (res) {
    //   // vaciar estado y ls
    //   localStorage.removeItem('LSproduct')
    //   setProduct(productos.keys_product)
    // } else {
    //   alert.setNotificacion({
    //     type: 1,
    //     message: 'ERROR: verifica si llenaste todos los campos'
    //   })
    // }
    navigate(`/productos/${nuevoProducto.categoria.nombre}`)
  }

  return (
    <div className="flex w-full flex-col items-center ">
      <p className="text-color_green_7 font-poppins text-center text-2xl font-semibold">
        {nuevoProducto?.nombre}
      </p>
      <div className="w-full">
        <div className="mx-auto w-28">
          <img src={nuevoProducto.imagenLocal} />
        </div>

        <div className="  text-color_green_6 mt-3 w-full ">
          <p className="flex  justify-between px-5">
            <span className="  ">Categoria</span>
            <span className="text-color_green_7    ">{nuevoProducto?.categoria.nombre}</span>
          </p>
          <span className="bg-color_green_4 border-color_green_4 my-3 block w-full border-b" />

          <p className="flex justify-between  px-5">
            <span className="  ">Cantidad por {nuevoProducto?.envoltorio}</span>
            <span className="text-color_green_7  ">
              {nuevoProducto?.cantidadPorUnidad} {nuevoProducto?.tipoVenta}
            </span>
          </p>

          <span className="bg-color_green_4 border-color_green_4 my-3 block w-full border-b" />

          <p className="flex justify-between  px-5">
            <span className="  ">Precio por {nuevoProducto?.envoltorio}</span>
            <span className="text-color_green_7  ">
              S/. {nuevoProducto?.precioVenta}
            </span>
          </p>

          <span className="bg-color_green_4 border-color_green_4 my-3 block w-full border-b" />

          <p className="flex justify-between  px-5">
            <span className="  ">Precio por {nuevoProducto.tipoVenta}</span>
            <span className="text-color_green_7  ">
              S/. {nuevoProducto.precioVenta}
            </span>
          </p>

          <span className="bg-color_green_4 border-color_green_4 my-3 block w-full border-b" />

          <p className="flex justify-between  px-5">
            <span className="  ">Total en {nuevoProducto.envoltorio}</span>
            <span className="text-color_green_7  ">
              {nuevoProducto.cantidadPorUnidad} {nuevoProducto.envoltorio}{' '}
              {nuevoProducto.sobrante} {nuevoProducto.tipoVenta}
            </span>
          </p>

          <span className="bg-color_green_4 border-color_green_4 my-3 block w-full border-b" />

          <p className="flex justify-between  px-5">
            <span className="  ">Total en {nuevoProducto.tipoVenta}</span>
            <span className="text-color_green_7  ">
              {nuevoProducto.sobrante} {nuevoProducto.tipoVenta}
            </span>
          </p>

          <span className="bg-color_green_4 border-color_green_4 my-3 block w-full border-b" />

          <p className="flex justify-between  px-5">
            <span className="  ">Alertarme en</span>
            <span className="text-color_green_7">
              {nuevoProducto.alertaCantidad} {nuevoProducto.tipoVenta}
            </span>
          </p>
        </div>
      </div>
      <div className="my-5 w-11/12 pt-5">
        <ButtonAction 
          onClick={sendNewProduct} 
          text=" CREAR" 
          type='button' 
        />
      </div>
    </div>
  )
}

export default ResumenProducto
