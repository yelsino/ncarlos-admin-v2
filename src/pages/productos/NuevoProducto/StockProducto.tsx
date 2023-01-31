import { useContext } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { IconNext } from '../../../Components/Icons'
import ButtonNext from '../../../Components/utilidades/ButtonNext'
import { NotificacionContext } from '../../../context/Notificaciones/notificacionContext'

const StockProducto = () => {
  const [product, setProduct] = useOutletContext() as any
  const navigate = useNavigate() as any

  const alert = useContext(NotificacionContext) as any

  const handleSubmit = () => {
    if (
      product.quantity <= 0 ||
      product.spare <= 0 ||
      product.alert_quantity <= 0
    ) {
      alert.setNotificacion({
        type: 1,
        message: 'Los datos deben ser mayor a cero'
      })
      return
    }
    navigate('/productos/nuevo-producto/resumen')
  }

  return (
    <div className='flex-col flex items-center w-full '>
      <p className="text-color_green_7 font-semibold text-2xl font-poppins text-center">{product?.name}</p>
      <div className='w-full'>
        <div className='w-36 mx-auto'>
          <img src={product.img_local} />
        </div>

        <div className="  text-color_green_6 mt-3 w-full ">
          <p className="flex  px-5 justify-between">
            <span className="  ">Cantidad por {product?.wholesale_form}</span>
            <span className="text-color_green_7    ">{product?.wholesaling_weight} {product?.form_retail}</span>
          </p>
          <span className="bg-color_green_4 my-3 block w-full border border-color_green_4" />

          <p className="flex justify-between  px-5">
            <span className="  ">Precio por {product?.wholesale_form}</span>
            <span className="text-color_green_7  ">S/. {product.wholesaling_price}</span>
          </p>
          <span className="bg-color_green_4 my-3 block w-full border border-color_green_4" />

          <p className="flex justify-between  px-5">
            <span className="  ">Precio por {product?.form_retail}</span>
            <span className="text-color_green_7  ">s/. {product.retail_price} </span>
          </p>
        </div>

        <p className="text-color_green_7 font-light text-lg font-poppins text-center my-5">Configuración de precios</p>
        <div className='flex flex-col items-center w-full '>

          <div className='w-full'>
            <p className='text-color_green_6 mb-1'>¿Cuantas {product.wholesale_form} tienes?</p>
            <input
              type='number'
              value={product.quantity}
              onChange={(e) => setProduct({ ...product, quantity: e.target.value })}
              className='rounded-xl p-4 outline-none   text-base  text-color_green_7  w-full bg-color_green_3 mb-5'
            />
          </div>
          <div className='w-full'>
            <p className='text-color_green_6 mb-1'>¿Cuantos {product.form_retail} sobran?</p>
            <input
             type='number'
             value={product.spare}
            onChange={(e) => setProduct({ ...product, spare: e.target.value })}
              className='rounded-xl p-4 outline-none   text-base  text-color_green_7  w-full bg-color_green_3 mb-5'
            />
          </div>
          <div className='w-full mb-5'>
            <p className='text-color_green_6 mb-1'>¿Cantidad minima para alertarte?</p>
            <input
             type='number'
             value={product.alert_quantity}
             onChange={(e) => setProduct({ ...product, alert_quantity: e.target.value })}
              className='rounded-xl p-4 outline-none   text-base  text-color_green_7  w-full bg-color_green_3 mb-5'
            />
          </div>

        </div>

      </div>
      <div className='flex justify-center'>
        <ButtonNext
          onClick={handleSubmit}
          text={<IconNext />} />
      </div>
    </div>
  )
}

export default StockProducto
