import {
  IconConfigInactivo,
  IconEstadisticaInactivo,
  IconLogOut,
  IconUserOutline
} from 'Components/Icons'
import { AuthContext } from 'context/auth/AuthContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const NavbarMenu = () => {
  const { userLogout } = useContext(AuthContext)

  return (
    <>
      <div className="bg-color_green_1   absolute -top-1 right-2 z-30 h-14 w-14 rotate-45 rounded-lg border border-gray-50" />

      <div className=" shadow-3xl navbar_item_b  z-auto  flex h-56      w-60 flex-col rounded-md  p-5 opacity-100" />

      <div className=" bg-color_green_1 absolute top-0 left-0 z-40 flex w-full   flex-col rounded-lg pt-3 font-mono text-lg font-semibold">
        <Link
          to="/reportes/ventas"
          className="flex cursor-pointer items-center gap-x-3 py-3 px-5 hover:bg-gray-100"
        >
          <span>
            <IconEstadisticaInactivo stile="h-7 w-7" />
          </span>
          <span>Ver Reportes</span>
        </Link>
        <p className="flex cursor-pointer items-center gap-x-3 py-3 px-5 hover:bg-gray-100">
          <span>
            <IconUserOutline />
          </span>
          <span>Ver Perfil </span>
        </p>
        <p className="flex cursor-pointer items-center gap-x-3 py-3 px-5 hover:bg-gray-100">
          <span>
            <IconConfigInactivo />
          </span>
          <span>Configuración</span>
        </p>
        <button
          onClick={() => userLogout()}
          className="mt-1 flex cursor-pointer items-center gap-x-3 border-t py-3 px-5  font-bold hover:bg-gray-100"
        >
          <span>
            <IconLogOut />
          </span>
          <span>Cerrar Sesión</span>
        </button>
      </div>
    </>
  )
}

export default NavbarMenu
