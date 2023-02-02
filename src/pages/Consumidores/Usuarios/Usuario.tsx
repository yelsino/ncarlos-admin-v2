import { IconArrow } from 'Components/Icons'
import MenuUsuario from 'Components/Plantillas/MenuUsuario'
import { UserContext } from 'context/user/userContext'
import { useEffect, useContext } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import './usuarios.css'

const Usuario = () => {
  const params = useParams()
  const { userID } = params
  const { usuarioSeleccionado: seleccionado, obtenerUsuario } =
    useContext(UserContext)
  // const { user_selected: { user } } = users

  useEffect(() => {
    obtenerUsuario(userID)
  }, [])

  return (
    <div>
      <div className="border-color_green_4 flex items-center gap-x-5 border-b pb-7 sm:gap-x-10">
        <img
          alt="img usuarios"
          className="img_perfil h-20 w-20 object-cover 2xl:h-28 2xl:w-28  "
          src={seleccionado.foto}
        />
        <div>
          <p className="font-poppins text-color_gray_1 text-3xl font-bold uppercase 2xl:text-4xl">
            {seleccionado?.sobreNombre}
          </p>
          <p className="truncate text-lg capitalize text-gray-600 2xl:text-xl">
            {seleccionado.nombres} {seleccionado.apellidos}
          </p>
        </div>
      </div>

      <Link
        to={`/comprador/usuarios/${userID}/elementos`}
        className="text-color_green_7 absolute top-10 sm:hidden"
      >
        <IconArrow stile="h-5 w-5" />
      </Link>
      <div className="flex  pt-7 ">
        <MenuUsuario />
        <Outlet />
      </div>
    </div>
  )
}

export default Usuario
