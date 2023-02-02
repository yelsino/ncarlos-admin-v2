import { IconBox, IconCard, IconUser } from 'Components/Icons'
import { UserContext } from 'context/user/userContext'
import { useEffect, useContext } from 'react'
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom'
import './casero.css'

const Casero = () => {
  const params = useParams()
  const { clienteID } = params

  const location = useLocation()
  const { pathname } = location
  const currentPath = pathname.split('/')

  const { obtenerUsuario, usuarioSeleccionado: seleccionado } =
    useContext(UserContext)

  useEffect(() => {
    obtenerUsuario(clienteID)
  }, [])

  const navstiles = (isActive: any) =>
    `flex items-center gap-x-1 p-3 rounded-lg ${
      isActive ? 'bg-color_green_3' : ''
    } `

  return (
    <>
      {seleccionado ? (
        <div className="w-full overflow-auto ">
          {/* <button onClick={()=>{
        console.log(casero);
      }}>
        IMPR
      </button> */}
          {/* <h2 className=' text-center bg-color_green_3 text-sm text-color_green_7 tracking-widest py-4 rounded-lg'>{`SOY EL CLIENTE ${clienteID}`}</h2> */}
          <div className="border-color_green_4 flex items-center gap-x-5 border-b pb-7 sm:gap-x-10">
            <img
              alt="img usuario"
              className="img_perfil h-20 w-20 object-cover 2xl:h-28 2xl:w-28  "
              src={seleccionado.foto}
            />
            <div>
              <p className="font-poppins text-color_gray_1 text-3xl font-bold capitalize 2xl:text-4xl">
                {seleccionado.sobreNombre}
              </p>
              <p className="truncate text-lg capitalize text-gray-600 2xl:text-xl">
                {seleccionado.nombres + ' ' + seleccionado.apellidos}
              </p>
            </div>
          </div>
          {currentPath[4] === 'nuevo-credito' && (
            <p className="text-color_green_5 mt-2 text-center">NUEVO CREDITO</p>
          )}
          {currentPath[4] !== 'nuevo-credito' && (
            <div className="text-color_green_7 my-5 mx-auto flex w-full max-w-md justify-between  ">
              <NavLink
                to={`/comprador/clientes/${clienteID}/info`}
                className={({ isActive }) => navstiles(isActive)}
              >
                <IconUser />
                Datos
              </NavLink>
              <NavLink
                to={`/comprador/clientes/${clienteID}/compras`}
                className={({ isActive }) => navstiles(isActive)}
              >
                <IconBox />
                Compras
              </NavLink>
              <NavLink
                to={`/comprador/clientes/${clienteID}/creditos`}
                className={({ isActive }) => navstiles(isActive)}
              >
                <IconCard />
                Creditos
              </NavLink>
            </div>
          )}

          <div className=" flex">
            <Outlet />
          </div>
        </div>
      ) : (
        <p>cargando</p>
      )}
    </>
  )
}

export default Casero
