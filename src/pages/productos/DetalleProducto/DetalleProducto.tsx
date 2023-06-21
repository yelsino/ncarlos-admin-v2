import ButtonAction from 'Components/utilidades/ButtonAction'
import { ProductoContext } from 'context/productos/productoContext'
import { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import mandarina from '../../../assets/img/mandarina.png'

const DetalleProducto = () => {
  const navigate = useNavigate()
  const { categoria} = useParams();
  const { producto } = useContext(ProductoContext);


  useEffect(() => {
    if (!producto) {
      navigate('/productos/' + categoria)
    }
  }, [producto])
  
  
  return (
    <>
      {producto && (
        <div className="mx-auto  max-w-sm overflow-y-auto pt-10">
        <div className="flex w-full flex-col items-center ">
          <p className="text-color_green_7 font-poppins text-center text-2xl font-semibold">
            {producto.nombre}
          </p>
          <div className="w-full">
            <div className="mx-auto w-28">
              <img src={producto.imagen} />
            </div>
  
            <div className="  text-color_green_6 mt-3 w-full ">
              <p className="flex  justify-between px-5">
                <span className="  ">Categoria</span>
                <span className="text-color_green_7">{producto.categoria.nombre}</span>
              </p>
              <span className="bg-color_green_4 border-color_green_4 my-3 block w-full border-b" />
  
              <p className="flex justify-between  px-5">
                <span className="  ">Cantidad por {producto.envoltorio.toLowerCase()}</span>
                <span className="text-color_green_7  ">{producto.cantidadPorUnidad} {producto.tipoVenta.toLocaleLowerCase()}</span>
              </p>
  
              <span className="bg-color_green_4 border-color_green_4 my-3 block w-full border-b" />
  
              <p className="flex justify-between  px-5">
                <span className="  ">Precio por {producto.envoltorio.toLocaleLowerCase()}</span>
                <span className="text-color_green_7  ">S/. {producto.precioVenta}</span>
              </p>
  
              <span className="bg-color_green_4 border-color_green_4 my-3 block w-full border-b" />
  
              <p className="flex justify-between  px-5">
                <span className="  ">Precio por {producto.tipoVenta.toLocaleLowerCase()}</span>
                <span className="text-color_green_7  ">S/. {producto.precios[0].precio}</span>
              </p>
  
              <span className="bg-color_green_4 border-color_green_4 my-3 block w-full border-b" />
  
              <p className="flex justify-between  px-5">
                <span className="  ">Total en {producto.envoltorio.toLowerCase()}</span>
                <span className="text-color_green_7  ">{producto.unidades} {producto.envoltorio.toLocaleLowerCase()} {producto.sobrante} {producto.tipoVenta.toLowerCase()}</span>
              </p>
  
              <span className="bg-color_green_4 border-color_green_4 my-3 block w-full border-b" />
  
              <p className="flex justify-between  px-5">
                <span className="  ">Total en {producto.tipoVenta.toLocaleLowerCase()}</span>
                <span className="text-color_green_7  ">{producto.cantidadPorUnidad * producto.unidades} {producto.tipoVenta.toLocaleLowerCase()}</span>
              </p>
  
              <span className="bg-color_green_4 border-color_green_4 my-3 block w-full border-b" />
  
              <p className="flex justify-between  px-5">
                <span className="  ">Alertarme en</span>
                <span className="text-color_green_7">{producto.alertaCantidad} {producto.tipoVenta.toLowerCase()}</span>
              </p>
            </div>
          </div>
          <div className="my-5 w-full">
            <ButtonAction
              type="button"
              onClick={() => navigate('/productos/nuevo-producto/nombre')}
              text=" ACTUALIZAR "
            />
          </div>
        </div>
      </div>

      )}
    </>
    
  )
}

export default DetalleProducto
