import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { IconSearch } from '../../Components/Icons'
import './compras.css'

const ComprasAdmin = () => {
  // get ruta
  const location = useLocation()

  const { pathname } = location

  const currentPath = pathname.split('/')[2]

  return (
    <div className="w-full max-w-7xl  ">
      <div className="font-poppins top-5 left-0 my-7 flex  justify-between px-7 text-lg font-medium sm:justify-center">
        <span className="block w-10 sm:hidden" />

        <div className="flex items-center ">
          <NavLink
            to="/ventas/pedidos"
            className={({ isActive }) =>
              `transition ease-in duration-200 ${
                isActive ? ' text-color_green_7' : 'text-color_green_4'
              }`
            }
          >
            Pedidos
          </NavLink>
          <span className="bg-color_green_4 mx-4 block h-4 w-1 rounded-full" />
          <NavLink
            to="/ventas/reclamos"
            className={({ isActive }) =>
              `transition ease-in duration-200 ${
                isActive ? ' text-color_green_7' : 'text-color_green_4'
              }`
            }
          >
            Reclamos
          </NavLink>
        </div>

        <Link
          to={`/comprador/search/${currentPath}`}
          className="text-color_green_7 sm:hidden"
        >
          <IconSearch />
        </Link>
      </div>
      <div className="w-full px-7 ">
        <Outlet />
      </div>
    </div>
  )
}

export default ComprasAdmin
