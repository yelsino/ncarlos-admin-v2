import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { IconBox, IconCard, IconMoney } from "../../../../components/Icons";

const Credito = () => {

  const params = useParams()
  const location = useLocation()
  const { clienteID, creditoID } = params
  const { pathname } = location;

  const currentPath = pathname.split('/');
  const rutas = ['nuevo-abono'];
  var filterRutes = rutas.filter((tag) => (currentPath.includes(tag) && tag));

  const navstiles = (isActive) => (`flex items-center gap-x-1 px-3 font-semibold py-1 rounded-lg ${isActive ? 'text-color_green_7' : 'text-color_gray_1'} `);





  return (
    <div className="w-full max-w-md mx-auto ">
      <div className="border-b " />
      {
        filterRutes.length !== 1 &&
        <div className=' flex justify-between my-7'>
          <NavLink to={`/comprador/clientes/${clienteID}/creditos/${creditoID}/detalles`} className={({ isActive }) => (navstiles(isActive))}>
            <IconBox />
            Detalles
          </NavLink>
          <NavLink to={`/comprador/clientes/${clienteID}/creditos/${creditoID}/abonos`} className={({ isActive }) => (navstiles(isActive))}>
            <IconBox />
            Abonos
          </NavLink>
          <NavLink to={`/comprador/clientes/${clienteID}/creditos/${creditoID}/fotos`} className={({ isActive }) => (navstiles(isActive))}>
            <IconCard />
            Fotos
          </NavLink>
        </div>
      }

      <div className="">
        <Outlet />
      </div>
      {
        filterRutes.length !== 1 &&
        <div>
          <NavLink to={`/comprador/clientes/${clienteID}/creditos/${creditoID}/nuevo-abono`} className=" fixed bottom-24 right-10 bg-color_green_9 p-3 shadow-lg rounded-full text-color_green_3">
            <IconMoney />
          </NavLink>
        </div>
      }

    </div>
  );
}

export default Credito;