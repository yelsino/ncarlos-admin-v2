import ButtonAction from 'Components/utilidades/ButtonAction'
import { NotificacionContext } from 'context/notificaciones/notificacionContext'
import { ProductoContext } from 'context/productos/productoContext'
import { useContext } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { OutletProducto } from '../NuevoProducto'

const ResumenProducto = () => {
  const {nuevoProducto, setNuevoProducto} = useOutletContext<OutletProducto>();
  const navigate = useNavigate()
  const {setNotificacion} = useContext(NotificacionContext)
  const {createNewProduct} = useContext(ProductoContext)

  const sendNewProduct = async () => {
    navigate(`/productos/${nuevoProducto.categoria.nombre}`)
  }

  return (
    <div className="flex w-full flex-col items-center ">

      <div className="flex justify-center flex-col items-center gap-y-3">
        <p className="font-poppins text-xl font-semibold">
          {nuevoProducto.nombre}
        </p>
        <div className="mb-3 flex h-[130px] w-[140px] items-center justify-center rounded-tl-[50px] rounded-tr-[10px] rounded-bl-[20px] rounded-br-[50px] bg-emerald-300 bg-opacity-50 ">
          <img src={nuevoProducto.imagenLocal} className=" mb-3 scale-125" />
        </div>
      </div>

      <div className="w-full">
        

        <p className="text-color_green_7 font-poppins mb-7 text-center text-lg font-light">
          Datos del producto
        </p>
        <div className="  text-color_green_6 mt-3 w-full lowercase">
          <p className="flex  justify-between px-5">
            <span className="  ">Categoria</span>
            <span className="text-color_green_7    ">
              {nuevoProducto?.categoria.nombre}
            </span>
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
              S/. {nuevoProducto.precioUnidad}
            </span>
          </p>

          <span className="bg-color_green_4 border-color_green_4 my-3 block w-full border-b" />

          <p className="flex justify-between  px-5">
            <span className="  ">Total de {nuevoProducto.envoltorio}</span>
            <span className="text-color_green_7  ">
              {nuevoProducto.unidades} {nuevoProducto.envoltorio}{' '}
              {nuevoProducto.sobrante} {nuevoProducto.tipoVenta}
            </span>
          </p>

          <span className="bg-color_green_4 border-color_green_4 my-3 block w-full border-b" />

          <p className="flex justify-between  px-5">
            <span className="  ">Total en {nuevoProducto.tipoVenta}</span>
            <span className="text-color_green_7  ">
              {nuevoProducto.cantidadPorUnidad * nuevoProducto.unidades}{' '}
              {nuevoProducto.tipoVenta}
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

      <p className="text-color_green_7 font-poppins mb-5 text-center text-lg font-light pt-5">
            Precios al minoreo
      </p>

      <div className='w-full text-color_green_6 mt-3 lowercase'>
        {nuevoProducto.precios.map((precio, index) => (
         <div key={precio._id}>
           <p className="flex  justify-between px-5">
            <span className="  ">{precio.textoPesoA}</span>
            <span className="text-color_green_7    ">
              S/. {precio.precio} 
            </span>
          </p>
          <span className="bg-color_green_4 border-color_green_4 my-3 block w-full border-b" />
         </div>
        ))}
      </div>
      <div className="my-5 w-11/12 pt-5">
        <ButtonAction onClick={sendNewProduct} text=" CREAR" type="button" />
      </div>
    </div>
  )
}

export default ResumenProducto
