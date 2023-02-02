import {
  IconCardBuyInactive,
  IconProductInactivo,
  IconUsersInactive,
  IconWork
} from 'Components/Icons'
import { NavLink, useLocation } from 'react-router-dom'

const Menu = () => {
  const location = useLocation()

  const { pathname } = location

  const currentPath = pathname.split('/')

  return (
    <div className="  border-color_green_4   flex flex-col gap-y-5 border-b py-5 font-mono text-lg font-semibold">
      <NavLink
        to="/ventas/pedidos"
        className={`flex items-center gap-x-2  transition duration-300 ease-in ${
          currentPath[1] === 'ventas'
            ? ' text-color_green_7'
            : 'text-color_gray_1'
        }`}
      >
        <IconCardBuyInactive />
        <span>Ventas</span>
      </NavLink>

      <NavLink
        to="/productos"
        className={({ isActive }) =>
          `transition ease-in duration-300  flex items-center gap-x-2 ${
            isActive ? ' text-color_green_7' : 'text-color_gray_1'
          }`
        }
      >
        <IconProductInactivo />
        <span>Productos</span>
      </NavLink>

      <NavLink
        to="/comprador/clientes"
        className={`flex items-center gap-x-2 transition duration-300 ease-in ${
          currentPath[1] === 'comprador'
            ? ' text-color_green_7'
            : 'text-color_gray_1'
        }`}
      >
        <IconUsersInactive />
        <span>Usuarios</span>
      </NavLink>

      <NavLink
        to="/trabajadores"
        className={`flex items-center gap-x-2  transition duration-300 ease-in ${
          currentPath[1] === 'trabajadores'
            ? ' text-color_green_7'
            : 'text-color_gray_1'
        }`}
      >
        <IconWork />
        <span>Trabajadores</span>
      </NavLink>
    </div>
  )
}

export default Menu
