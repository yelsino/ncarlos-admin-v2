import { NavLink, useLocation } from "react-router-dom";
import { IconCardBuyInactive, IconProductInactivo, IconUsersInactive, IconWork } from "../../Icons";

const Menu = () => {

  const location = useLocation()

  const { pathname } = location;

  const currentPath = pathname.split('/');

  return (
    <div className="  py-5   font-semibold font-mono text-lg flex flex-col border-b border-color_green_4 gap-y-5">
      <NavLink to='/ventas/pedidos' className={`transition ease-in duration-300  flex items-center gap-x-2 ${currentPath[1] === 'ventas' ? ' text-color_green_7' : 'text-color_gray_1'}`} >
        <IconCardBuyInactive />
        <span>Ventas</span>
      </NavLink>



      <NavLink to='/productos' className={({ isActive }) => (`transition ease-in duration-300  flex items-center gap-x-2 ${isActive ? ' text-color_green_7' : 'text-color_gray_1'}`)} >
        <IconProductInactivo />
        <span>Productos</span>
      </NavLink>

      <NavLink
        to='/comprador/clientes' className={`transition ease-in duration-300 flex items-center gap-x-2 ${currentPath[1] === 'comprador' ? ' text-color_green_7' : 'text-color_gray_1'}`}
      >
        <IconUsersInactive />
        <span>Usuarios</span>

      </NavLink>

      <NavLink to='/trabajadores' className={`transition ease-in duration-300  flex items-center gap-x-2 ${currentPath[1] === 'trabajadores' ? ' text-color_green_7' : 'text-color_gray_1'}`} >
        <IconWork />
        <span>Trabajadores</span>
      </NavLink>
    </div>
  );
}

export default Menu;