import { useLocation, useNavigate, useOutletContext } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import IMG from '../../../assets/img/iconito.png'
import { NotificacionContext } from 'context/Notificaciones/notificacionContext'
import ButtonNext from 'Components/utilidades/ButtonNext'
import { IconNext } from 'Components/Icons'

const NombreProducto = () => {
  const location = useLocation()
  const navigate = useNavigate()

  // context
  const [product, setProduct] = useOutletContext<any>()
  const alert = useContext(NotificacionContext) as any

  const handleSubmit = () => {
    if (!product.name || !product.img) {
      alert.setNotificacion({
        type: 1,
        message: 'Todos los campos son requeridos'
      })
      return
    }
    navigate('/productos/nuevo-producto/datos-basicos')
  }

  useEffect(() => {
    localStorage.setItem(
      'LSproduct',
      JSON.stringify({
        ...product,
        category: location.state?.from
      })
    )
  }, [])

  const encodeImageFileAsURL = (e: any) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.onloadend = function () {
      setProduct({
        ...product,
        img: file,
        img_local: reader.result
      })
    }
    reader.readAsDataURL(file)
  }

  return (
    <>
      <p className="text-color_green_7 font-poppins text-center text-2xl font-semibold">
        Nuevo producto
      </p>
      <div className="flex w-full flex-col items-center ">
        <div className="mt-10 ">
          <label
            className="border-color_green_7 text-color_green_7 hover:bg-color_green_3 cursor-pointer rounded-full border p-2 px-6 py-4 leading-6 duration-300 ease-in"
            htmlFor="archivo_producto"
          >
            Seleccionar Archivo
          </label>
          <input
            id="archivo_producto"
            onChange={encodeImageFileAsURL}
            type="file"
            className="hidden"
          />
        </div>

        <div className="my-10 w-64">
          <img src={product.img ? product.img_local : IMG} />
          {/* <img src="BASE64"/> */}
          {/* <img src={IMG} /> */}
        </div>
        <p className="text-color_green_6 mb-5 text-lg">Nombre de producto</p>
        <input
          value={product.name}
          onKeyUp={(e) => {
            if (e.key === 'Enter' && product.name) {
              navigate('/productos/nuevo-producto/datos-basicos')
            }
          }}
          onChange={(e) => {
            setProduct({ ...product, name: e.target.value })
          }}
          className="text-color_green_7 bg-color_green_3 mb-10   w-11/12 rounded-xl p-4  text-base outline-none sm:text-lg"
        />
      </div>

      <div className="flex justify-center">
        <ButtonNext onClick={handleSubmit} text={<IconNext />} />
      </div>
    </>
  )
}

export default NombreProducto
