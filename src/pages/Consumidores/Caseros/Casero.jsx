import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom'
import { IconBox, IconCard, IconUser } from '../../../Components/Icons';
import { PERFIL3, } from '../../../Components/Images';
import './casero.css'

const Casero = () => {

  const params = useParams();
  const { clienteID } = params;

  const location = useLocation()

  const { pathname } = location;

  const currentPath = pathname.split('/');




  const navstiles = (isActive) => (`flex items-center gap-x-1 p-3 rounded-lg ${isActive ? 'bg-color_green_3' : ''} `);

  return (
    <div className='w-full overflow-auto '>
      {/* <h2 className=' text-center bg-color_green_3 text-sm text-color_green_7 tracking-widest py-4 rounded-lg'>{`SOY EL CLIENTE ${clienteID}`}</h2> */}
      <div className="flex items-center gap-x-5 sm:gap-x-10 border-b pb-7 border-color_green_4">
        <img alt='img usuario' className="img_perfil w-20 h-20 2xl:w-28 2xl:h-28 object-cover  " src={PERFIL3} />
        <div>
          <p className="text-3xl 2xl:text-4xl font-poppins font-bold text-color_gray_1">Kimberly</p>
          <p className="text-lg 2xl:text-xl text-gray-600 truncate">Kimberly Felipe Castillo Rivero</p>
        </div>
      </div>
      {
        currentPath[4] === 'nuevo-credito' &&
        <p className='text-center text-color_green_5 mt-2'>NUEVO CREDITO</p>
      }
      {
        currentPath[4] !== 'nuevo-credito' &&
        <div className='text-color_green_7 flex justify-between my-5 w-full max-w-md mx-auto  '>
          <NavLink to={`/comprador/clientes/${clienteID}/info`} className={({ isActive }) => (navstiles(isActive))}>
            <IconUser />
            Datos
          </NavLink>
          <NavLink to={`/comprador/clientes/${clienteID}/compras`} className={({ isActive }) => (navstiles(isActive))}>
            <IconBox />
            Compras
          </NavLink>
          <NavLink to={`/comprador/clientes/${clienteID}/creditos`} className={({ isActive }) => (navstiles(isActive))}>
            <IconCard />
            Creditos
          </NavLink>

        </div>
      }

      <div className=' flex'>
        <Outlet />
      </div>
    </div>
  );
}

export default Casero;