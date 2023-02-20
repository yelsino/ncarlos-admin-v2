import { IconNotificacion, IconOutUser, IconSearch, IconUser } from 'Components/Icons'
import NavbarMenu from 'Components/Organismos/Navbar/NavbarMenu'
import { AuthContext } from 'context/auth/AuthContext'
import { useContext } from 'react'
import './plantillas.css'
import { Link } from 'react-router-dom'
// import Logo from '../../assets/img/logo.png'

const Navbar = () => {
  const { user } = useContext(AuthContext)
  return (
    <div className=" font-poppins  hidden items-center justify-between border-b pb-2 sm:flex ">
      <Link to="/" className="flex items-center gap-x-3">
        {/* <div><img alt='img user' src={Logo} className='w-14 h-14' /></div> */}
        <h1 className="text-color_green_7 hidden text-lg font-extrabold tracking-tight  md:flex">
          {' '}
          CARLOS
        </h1>
      </Link>
      <div className="relative flex items-center">
        <span className="text-color_green_7 absolute left-4 ">
          <IconSearch />
        </span>
        <input
          className=" bg-color_green_2 placeholder:text-color_green_7 text-color_green_7 rounded-full  px-12 py-2 outline-none "
          placeholder="Buscar Caseros"
        />
      </div>
      <div className="text-color_gray_1 flex items-center ">
        <span className="hover:text-color_green_7 cursor-pointer px-3 transition duration-300 ease-in">
          <IconNotificacion />
        </span>
        <div className="navbar_perfil  relative  py-2 pl-3">
          {
            user.foto
            ? (
              <img
                src={user?.foto}
                alt="img user"
                className="h-10 w-10 rounded-full object-cover"
              />
            )
            : (
              <IconOutUser stile='w-7 h-7' />
            )
          }
          {/* <img
            src={user?.foto}
            alt="img user"
            className="h-10 w-10 rounded-full object-cover"
            onError={(e:any)=>{
              // genera una imagen aleatoria de internet
              e.target.src =  `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`
            }}
          /> */}
          <div className="navbar_menu  absolute -right-3  top-14  ">
            <NavbarMenu />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
