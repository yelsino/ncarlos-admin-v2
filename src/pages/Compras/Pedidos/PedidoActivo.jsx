import { NavLink, Outlet, useParams } from "react-router-dom";
import { IconBox, IconCard, IconUser } from "../../../components/Icons";

const PedidoActivo = () => {

  const params = useParams();
  const { pedidoactivoID } = params;

  const navstiles = (isActive) => (`flex items-center gap-x-1 p-3 rounded-lg ${isActive ? 'bg-color_green_3' : ''} `);

  return (
    <div className='w-full overflow-auto  max-w-lg mx-auto'>
      <h2 className=' text-center bg-color_green_3  text-color_green_7 tracking-widest py-4 rounded-lg text-lg font-semibold'>Orden #005</h2>

      <p className="text-center my-5 text-lg text-color_green_7 font-medium">Recibido</p>


      <div className='text-color_green_7 flex justify-between my-5 '>
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