import { IconSearch } from 'Components/Icons'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import './comprador.css'

const Comprador = () => {
  // get ruta
  const location = useLocation()

  const { pathname } = location

  const currentPath = pathname.split('/')[2]

  return (
    <div className="w-full max-w-7xl  ">
      <div className=" font-poppins top-5 left-0 my-7  flex justify-between px-7  text-lg   font-medium ">
        <span className="block w-10" />
        <div className="flex items-center">
          <NavLink
            to="/comprador/clientes"
            className={({ isActive }) =>
              `transition ease-in duration-200 ${
                isActive ? ' text-color_green_7' : 'text-color_green_4'
              }`
            }
          >
            Caseros
          </NavLink>
          <span className="bg-color_green_4 mx-3 block h-4 w-1 rounded-full sm:mx-6" />
          <NavLink
            to="/comprador/usuarios"
            className={({ isActive }) =>
              `transition ease-in duration-200 ${
                isActive ? ' text-color_green_7' : 'text-color_green_4'
              }`
            }
          >
            Usuarios
          </NavLink>
        </div>
        <Link
          to={`/comprador/search/${currentPath}`}
          className="text-color_green_7 flex "
        >
          <span className="sm:hidden">
            <IconSearch />
          </span>
        </Link>
      </div>
      <div className="w-full px-7 ">
        <Outlet />
      </div>
    </div>
  )
}

export default Comprador
