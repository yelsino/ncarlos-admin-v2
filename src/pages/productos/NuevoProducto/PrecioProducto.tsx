import { useContext } from 'react'
import ButtonNext from '../../../Components/utilidades/ButtonNext'
import { IconNext } from '../../../Components/Icons'
import { useNavigate, useOutletContext } from 'react-router-dom'
import NotificacionContext from '../../../context/Notificaciones/notificacionContext'

const PrecioProducto = () => {
  const navigate = useNavigate()
  const [product, setProduct] = useOutletContext<any>()
  const alert = useContext(NotificacionContext) as any

  const handleSubmit = () => {
    if (
      product.wholesaling_price <= 0 ||
      product.wholesaling_weight <= 0 ||
      product.retail_price <= 0
    ) {
      alert.setNotificacion({
        type: 1,
        message: 'Los datos deben ser mayor a cero'
      })
      return
    }
    navigate('/productos/nuevo-producto/stock')
  }

  return (
    <>
      <p className="text-color_green_7 font-semibold text-2xl font-poppins text-center">{product.name}</p>
      <div className="flex  justify-between my-5 ">
        <div className="flex items-center gap-x-5">
          <div className="bg-color_green_3 rounded-lg w-20 h-20">
            <img alt='img abarrote' src={product.img_local} />
          </div>
          <p className="text-lg text-color_green_6">

            Venta por {product.wholesale_form} y {product.form_retail}
          </p>
        </div>
        <div className="flex items-center">
        </div>
      </div>
      <p className="text-color_green_7 font-light text-lg font-poppins text-center mb-5">Configuración de precios</p>
      <div className='flex flex-col items-center w-full '>

        <div className='w-full'>
          <p className='text-color_green_6 text-lg mb-1'>Precio por {product.wholesale_form}</p>
          <input
            value={product.wholesaling_price}
            type='number'
            onChange={(e) => setProduct({ ...product, wholesaling_price: e.target.value })}
            className='rounded-xl p-4 outline-none   text-base sm:text-lg text-color_green_7  w-full bg-color_green_3 mb-5'
          />
        </div>
        <div className='w-full'>
          <p className='text-color_green_6 text-lg mb-1'>{product.form_retail} por {product.wholesale_form}</p>
          <input
            onChange={(e) => setProduct({ ...product, wholesaling_weight: e.target.value })}
            type='number'
            value={product.wholesaling_weight}
            className='rounded-xl p-4 outline-none   text-base sm:text-lg text-color_green_7  w-full bg-color_green_3 mb-5'
          />
        </div>
        <div className='w-full mb-5'>
          <p className='text-color_green_6 text-lg mb-1'>Precio por {product.form_retail}</p>
          <input
            value={product.retail_price}
            type='number'
            onChange={(e) => setProduct({ ...product, retail_price: e.target.value })}
            className='rounded-xl p-4 outline-none   text-base sm:text-lg text-color_green_7  w-full bg-color_green_3 mb-5'
          />
        </div>

        <div className='flex justify-center'>
          <ButtonNext
            onClick={handleSubmit}
            text={<IconNext />} />
        </div>

      </div>
    </>
  )
}

export default PrecioProducto
