import { useContext } from 'react'
import ButtonNext from '../../../Components/utilidades/ButtonNext'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { NotificacionContext } from 'context/Notificaciones/notificacionContext'
import { IconNext } from 'Components/Icons'

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
      <p className="text-color_green_7 font-poppins text-center text-2xl font-semibold">
        {product.name}
      </p>
      <div className="my-5  flex justify-between ">
        <div className="flex items-center gap-x-5">
          <div className="bg-color_green_3 h-20 w-20 rounded-lg">
            <img alt="img abarrote" src={product.img_local} />
          </div>
          <p className="text-color_green_6 text-lg">
            Venta por {product.wholesale_form} y {product.form_retail}
          </p>
        </div>
        <div className="flex items-center"></div>
      </div>
      <p className="text-color_green_7 font-poppins mb-5 text-center text-lg font-light">
        Configuración de precios
      </p>
      <div className="flex w-full flex-col items-center ">
        <div className="w-full">
          <p className="text-color_green_6 mb-1 text-lg">
            Precio por {product.wholesale_form}
          </p>
          <input
            value={product.wholesaling_price}
            type="number"
            onChange={(e) =>
              setProduct({ ...product, wholesaling_price: e.target.value })
            }
            className="text-color_green_7 bg-color_green_3 mb-5   w-full rounded-xl p-4  text-base outline-none sm:text-lg"
          />
        </div>
        <div className="w-full">
          <p className="text-color_green_6 mb-1 text-lg">
            {product.form_retail} por {product.wholesale_form}
          </p>
          <input
            onChange={(e) =>
              setProduct({ ...product, wholesaling_weight: e.target.value })
            }
            type="number"
            value={product.wholesaling_weight}
            className="text-color_green_7 bg-color_green_3 mb-5   w-full rounded-xl p-4  text-base outline-none sm:text-lg"
          />
        </div>
        <div className="mb-5 w-full">
          <p className="text-color_green_6 mb-1 text-lg">
            Precio por {product.form_retail}
          </p>
          <input
            value={product.retail_price}
            type="number"
            onChange={(e) =>
              setProduct({ ...product, retail_price: e.target.value })
            }
            className="text-color_green_7 bg-color_green_3 mb-5   w-full rounded-xl p-4  text-base outline-none sm:text-lg"
          />
        </div>

        <div className="flex justify-center">
          <ButtonNext onClick={handleSubmit} text={<IconNext />} />
        </div>
      </div>
    </>
  )
}

export default PrecioProducto
