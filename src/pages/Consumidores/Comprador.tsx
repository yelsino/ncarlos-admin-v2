import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { IconSearch } from '../../Components/Icons'
import './comprador.css'

const Comprador = () => {
  // get ruta
  const location = useLocation()

  const { pathname } = location

  const currentPath = pathname.split('/')[2]

  return (

    <div className="max-w-7xl w-full  ">

      <div className=" top-5 left-0 flex justify-between  text-lg font-medium font-poppins  my-7   px-7 ">
        <span className="block w-10" />
        <div className="flex items-center">
          <NavLink to='/comprador/clientes' className={({ isActive }) => (`transition ease-in duration-200 ${isActive ? ' text-color_green_7' : 'text-color_green_4'}`)} >
            Caseros
          </NavLink>
          <span className="mx-3 sm:mx-6 block w-1 h-4 bg-color_green_4 rounded-full" />
          <NavLink to='/comprador/usuarios' className={({ isActive }) => (`transition ease-in duration-200 ${isActive ? ' text-color_green_7' : 'text-color_green_4'}`)} >
            Usuarios
          </NavLink>
        </div>
        <Link to={`/comprador/search/${currentPath}`} className="text-color_green_7 flex ">
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
