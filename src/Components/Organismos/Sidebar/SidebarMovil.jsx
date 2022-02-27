import { NavLink, useLocation } from "react-router-dom";
import { IconCardBuyInactive, IconProductInactivo, IconUsersInactive, IconWork } from "../../Icons";

const Sidebar = () => {
  const location = useLocation()

  const { pathname } = location;

  const currentPath = pathname.split('/');


  return (
    <div className="w-full left-0 fixed p-2 bg-color_green_1 z-30  bottom-0  flex justify-center sm:hidden">
      <div className=" py-3 w-11/12 left-0 text-color_green_3 flex justify-around font-semibold font-poppins   ">
        <NavLink
          to='/comprador/clientes' className={`transition ease-in duration-300 ${currentPath[1] === 'comprador' ? ' text-color_green_7' : 'text-color_gray_1'}`}
        >
          <IconUsersInactive />
        </NavLink>
        <NavLink to='/ventas/pedidos' className={`transition ease-in duration-300 ${currentPath[1] === 'ventas' ? ' text-color_green_7' : 'text-color_gray_1'}`} >
          <IconCardBuyInactive />

        </NavLink>
        {/* <NavLink to='/reportes' className={`transition ease-in duration-300 ${currentPath[1] === 'reportes' ? ' text-color_green_7' : 'text-color_gray_1'}`} >
          <IconEstadisticaInactivo />
        </NavLink> */}
        <NavLink to='/productos' className={({ isActive }) => (`transition ease-in duration-300 ${isActive ? ' text-color_green_7' : 'text-color_gray_1'}`)} >
          <IconProductInactivo />
        </NavLink>
        <NavLink to='/trabajadores' className={`transition ease-in duration-300 ${currentPath[1] === 'trabajadores' ? ' text-color_green_7' : 'text-color_gray_1'}`} >
          <IconWork />
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;