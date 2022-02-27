import { NavLink, Outlet, useParams } from "react-router-dom";
import { IconBox, IconCard, IconUser } from "../../../Components/Icons";

const PedidoActivo = () => {

  const params = useParams();
  const { pedidoactivoID } = params;

  const navstiles = (isActive) => (`flex items-center gap-x-1 p-3 rounded-lg ${isActive ? 'bg-color_green_3' : ''} `);

  return (
    <div className='w-full overflow-auto  max-w-lg mx-auto'>



      <div className='text-color_green_7 flex justify-between  mb-6'>
        <NavLink to={`/ventas/pedidos/${pedidoactivoID}/detalles`} className={({ isActive }) => (navstiles(isActive))}>
          <IconBox />
          Detalles
        </NavLink>
        <NavLink to={`/ventas/pedidos/${pedidoactivoID}/productos`} className={({ isActive }) => (navstiles(isActive))}>
          <IconCard />
          Productos
        </NavLink>
        <NavLink to={`/ventas/pedidos/${pedidoactivoID}/tracking`} className={({ isActive }) => (navstiles(isActive))}>
          <IconUser />
          Tracking
        </NavLink>
      </div>


      <Outlet />
    </div>
  );
}

export default PedidoActivo;