import { NavLink, Outlet, useParams } from "react-router-dom";
import { IconBox, IconCard, IconUser } from "../../../../Components/Icons";


const CompraUsuario = () => {

  const params = useParams()
  const { userID, compraID } = params;

  const navstiles = (isActive) => (`flex items-center gap-x-1 p-3 rounded-lg ${isActive ? 'bg-color_green_3' : ''} `);

  return (
    <div className=" w-full usuario_compra overflow-y-auto">
      <p className="text-center text-color_green_7 font-medium">compra {compraID}</p>
      <div className='text-color_green_7 flex justify-between my-5'>
        <NavLink to={`/comprador/usuarios/${userID}/compras/${compraID}/detalle`} className={({ isActive }) => (navstiles(isActive))}>
          <IconBox />
          Detalle
        </NavLink>
        <NavLink to={`/comprador/usuarios/${userID}/compras/${compraID}/productos`} className={({ isActive }) => (navstiles(isActive))}>
          <IconCard />
          Productos
        </NavLink>
        <NavLink to={`/comprador/usuarios/${userID}/compras/${compraID}/reclamos`} className={({ isActive }) => (navstiles(isActive))}>
          <IconUser />
          Reclamos
        </NavLink>
      </div>

      <Outlet />


    </div>
  );
}

export default CompraUsuario;