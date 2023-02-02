import ButtonAction from 'Components/utilidades/ButtonAction'
import { NotificacionContext } from 'context/Notificaciones/notificacionContext'
import { ProductoContext } from 'context/productos/productoContext'
import { useContext } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'

const ResumenProducto = () => {
  const { productos } = useContext(ProductoContext) as any
  const [product, setProduct] = useOutletContext() as any
  const navigate = useNavigate()
  const { createNewProduct } = useContext(ProductoContext) as any
  const alert = useContext(NotificacionContext) as any

  const sendNewProduct = async () => {
    const res = await createNewProduct(product)
    if (res) {
      navigate(`/productos/${product.category}`)
      // vaciar estado y ls
      localStorage.removeItem('LSproduct')
      setProduct(productos.keys_product)
    } else {
      alert.setNotificacion({
        type: 1,
        message: 'ERROR: verifica si llenaste todos los campos'
      })
    }
  }

  return (
    <div className="flex w-full flex-col items-center ">
      <p className="text-color_green_7 font-poppins text-center text-2xl font-semibold">
        {product?.name}
      </p>
      <div className="w-full">
        <div className="mx-auto w-28">
          <img src={product.img_local} />
        </div>

        <div className="  text-color_green_6 mt-3 w-full ">
          <p className="flex  justify-between px-5">
            <span className="  ">Categoria</span>
            <span className="text-color_green_7    ">{product?.category}</span>
          </p>
          <span className="bg-color_green_4 border-color_green_4 my-3 block w-full border-b" />

          <p className="flex justify-between  px-5">
            <span className="  ">Cantidad por {product?.wholesale_form}</span>
            <span className="text-color_green_7  ">
              {product?.wholesaling_weight} {product?.form_retail}
            </span>
          </p>

          <span className="bg-color_green_4 border-color_green_4 my-3 block w-full border-b" />

          <p className="flex justify-between  px-5">
            <span className="  ">Precio por {product?.wholesale_form}</span>
            <span className="text-color_green_7  ">
              S/. {product?.wholesaling_price}
            </span>
          </p>

          <span className="bg-color_green_4 border-color_green_4 my-3 block w-full border-b" />

          <p className="flex justify-between  px-5">
            <span className="  ">Precio por {product.form_retail}</span>
            <span className="text-color_green_7  ">
              S/. {product.retail_price}
            </span>
          </p>

          <span className="bg-color_green_4 border-color_green_4 my-3 block w-full border-b" />

          <p className="flex justify-between  px-5">
            <span className="  ">Total en {product.wholesale_form}</span>
            <span className="text-color_green_7  ">
              {product.wholesaling_weight} {product.wholesale_form}{' '}
              {product.spare} {product.form_retail}
            </span>
          </p>

          <span className="bg-color_green_4 border-color_green_4 my-3 block w-full border-b" />

          <p className="flex justify-between  px-5">
            <span className="  ">Total en {product.form_retail}</span>
            <span className="text-color_green_7  ">
              {product.spare} {product.form_retail}
            </span>
          </p>

          <span className="bg-color_green_4 border-color_green_4 my-3 block w-full border-b" />

          <p className="flex justify-between  px-5">
            <span className="  ">Alertarme en</span>
            <span className="text-color_green_7">
              {product.alert_quantity} {product.form_retail}
            </span>
          </p>
        </div>
      </div>
      <div className="my-5 w-11/12 pt-5">
        <ButtonAction onClick={sendNewProduct} text=" CREAR " />
      </div>
    </div>
  )
}

export default ResumenProducto
