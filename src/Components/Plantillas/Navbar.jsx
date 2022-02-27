import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import { AuthContext } from '../../context/auth/AuthContext';
import { IconNotificacion, IconSearch } from '../Icons';
import NavbarMenu from '../Organismos/Navbar/NavbarMenu';


const Navbar = () => {
  const { auth } = useContext(AuthContext);
  return (
    <div className=" font-poppins  justify-between border-b items-center pb-2 hidden sm:flex ">
      <Link to='/' className='flex items-center gap-x-3'>
        <div><img alt='img user' src={Logo} className='w-14 h-14' /></div>
        <h1 className='text-lg font-extrabold tracking-tight text-color_green_7 hidden  md:flex'> CARLOS</h1>
      </Link>
      <div className='relative flex items-center'>
        <span className='absolute left-4 text-color_green_7 '><IconSearch /></span>
        <input
          className=' px-12 py-2 rounded-full bg-color_green_2  placeholder-color_green_7 outline-none text-color_green_7 '
          placeholder='Buscar Caseros'
        />
      </div>
      <div className='flex items-center text-color_gray_1 '>
        <span className='px-3 hover:text-color_green_7 transition ease-in duration-300 cursor-pointer'>
          <IconNotificacion />
        </span>
        <div className='relative  navbar_perfil  py-2 pl-3'>
          <img src={auth.user?.img} alt='img user' className='w-10 h-10 object-cover rounded-full' />
          <div className='absolute  -right-3 top-14  navbar_menu  '>
            <NavbarMenu />
          </div>
        </div>
      </div>

    </div >
  );
}

export default Navbar;