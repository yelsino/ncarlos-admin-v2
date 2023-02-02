import {
  IconCardBuyInactive,
  IconProductInactivo,
  IconUsersInactive,
  IconWork
} from 'Components/Icons'
import { NavLink, useLocation } from 'react-router-dom'

const SidebarMovil = () => {
  const location = useLocation()

  const { pathname } = location

  const currentPath = pathname.split('/')

  return (
    <div className="bg-color_green_1 fixed left-0 bottom-0 z-30 flex  w-full  justify-center p-2 sm:hidden">
      <div className=" text-color_green_3 font-poppins left-0 flex w-11/12 justify-around py-3 font-semibold   ">
        <NavLink
          to="/comprador/clientes"
          className={`transition duration-300 ease-in ${
            currentPath[1] === 'comprador'
              ? ' text-color_green_7'
              : 'text-color_gray_1'
          }`}
        >
          <IconUsersInactive />
        </NavLink>
        <NavLink
          to="/ventas/pedidos"
          className={`transition duration-300 ease-in ${
            currentPath[1] === 'ventas'
              ? ' text-color_green_7'
              : 'text-color_gray_1'
          }`}
        >
          <IconCardBuyInactive />
        </NavLink>
        {/* <NavLink to='/reportes' className={`transition ease-in duration-300 ${currentPath[1] === 'reportes' ? ' text-color_green_7' : 'text-color_gray_1'}`} >
          <IconEstadisticaInactivo />
        </NavLink> */}
        <NavLink
          to="/productos"
          className={({ isActive }) =>
            `transition ease-in duration-300 ${
              isActive ? ' text-color_green_7' : 'text-color_gray_1'
            }`
          }
        >
          <IconProductInactivo />
        </NavLink>
        <NavLink
          to="/trabajadores"
          className={`transition duration-300 ease-in ${
            currentPath[1] === 'trabajadores'
              ? ' text-color_green_7'
              : 'text-color_gray_1'
          }`}
        >
          <IconWork />
        </NavLink>
      </div>
    </div>
  )
}

export default SidebarMovil
