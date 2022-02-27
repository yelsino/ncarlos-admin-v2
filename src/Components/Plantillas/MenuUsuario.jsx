import { NavLink, useParams } from "react-router-dom";
import { IconCardBuy, IconDirecciones, IconListas, IconReclamos, IconUser } from "../Icons";

const MenuUsuario = () => {

  const params = useParams();
  const { userID } = params;

  return (
    <div className=" flex-col  gap-y-2 pr-6 font-semibold hidden sm:flex">
      <NavLink
        to={`/comprador/usuarios/${userID}/datos`}
        className={({ isActive }) => (`flex items-center gap-x-3  p-2  ${isActive ? 'text-color_green_7 ' : 'text-gray-500'}`)}>
        <IconUser stile='h-6 w-6' />
        <p className=" ">Datos</p>
      </NavLink>

      <NavLink to={`/comprador/usuarios/${userID}/compras`} className={({ isActive }) => (`flex items-center gap-x-3  p-2  ${isActive ? 'text-color_green_7 ' : 'text-gray-500'}`)}>
        <IconCardBuy stile='h-6 w-6' />
        <p className="">Compras</p>
      </NavLink>
      <NavLink to={`/comprador/usuarios/${userID}/listas`} className={({ isActive }) => (`flex items-center gap-x-3  p-2  ${isActive ? 'text-color_green_7 ' : 'text-gray-500'}`)}>
        <IconListas stile='h-6 w-6' />
        <p className="">Listas</p>
      </NavLink>
      <NavLink to={`/comprador/usuarios/${userID}/direcciones`} className={({ isActive }) => (`flex items-center gap-x-3  p-2  ${isActive ? 'text-color_green_7 ' : 'text-gray-500'}`)}>
        <IconDirecciones stile='h-6 w-6' />
        <p className="">Direcciones</p>
      </NavLink>
      <NavLink to={`/comprador/usuarios/${userID}/reclamos`} className={({ isActive }) => (`flex items-center gap-x-3  p-2  ${isActive ? 'text-color_green_7 ' : 'text-gray-500'}`)}>
        <IconReclamos stile='h-6 w-6' />
        <p className="">Reclamos</p>
      </NavLink>
    </div>
  );
}

export default MenuUsuario;