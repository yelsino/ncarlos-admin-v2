import {
  IconCardBuyInactive,
  IconProductInactivo,
  IconWork
} from 'Components/Icons'
import { NavLink } from 'react-router-dom'

const MenuReportes = () => {
  // const location = useLocation()

  // const { pathname } = location;

  // const currentPath = pathname.split('/');

  return (
    <div className="border-color_green_4 flex flex-col gap-y-5 border-b py-5 font-mono text-lg font-semibold">
      <NavLink
        to="/reportes/ventas"
        className={({ isActive }) =>
          `transition ease-in duration-300  flex items-center gap-x-2 ${
            isActive ? ' text-color_green_7' : 'text-color_gray_1'
          }`
        }
      >
        <IconCardBuyInactive />
        <span>Ventas</span>
      </NavLink>

      <NavLink
        to="/reportes/productos"
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
        to="/reportes/precios"
        className={({ isActive }) =>
          `transition ease-in duration-300  flex items-center gap-x-2 ${
            isActive ? ' text-color_green_7' : 'text-color_gray_1'
          }`
        }
      >
        <IconWork />
        <span>Precios</span>
      </NavLink>
    </div>
  )
}

export default MenuReportes
