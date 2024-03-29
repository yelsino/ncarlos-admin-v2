import { IconCall, IconInfo, IconMessaje } from 'Components/Icons'
import { useOpenChat } from 'hooks/useOpenChat'
import { useEffect } from 'react'
import { NavLink, Outlet, useParams } from 'react-router-dom'
import './Trabajador.css'

const Trabajador = () => {
  // falta abrir chat si reacarga la pagina
  const [chatState, abrirChat] = useOpenChat() as any

  const { userSelected } = chatState
  const params = useParams()

  useEffect(() => {
    abrirChat(params.trabajadorID)
  }, [])

  return (
    <>
      <div className="mx-auto mt-5 max-w-lg px-5 ">
        <div className="border-color_green_4 border-b pb-2 sm:pb-7">
          <div className="flex items-center justify-between">
            <div className="flex gap-x-5 sm:gap-x-10">
              <img
                alt="img trabajador"
                className="img_perfil_trabajador hidden h-12 w-12 object-cover sm:flex sm:h-16 sm:w-16 "
                src={userSelected?.img}
              />
              <img
                alt="img trabajador"
                className="h-14 w-14 rounded-full object-cover sm:hidden sm:h-16  sm:w-16  "
                src={userSelected?.img}
              />
              <div className="flex flex-col justify-center ">
                <p className="font-poppins  text-color_gray_1 truncate text-2xl font-bold uppercase">
                  {userSelected?.nickname}{' '}
                </p>
                <p className="hidden truncate capitalize text-gray-600 sm:flex">
                  {userSelected?.names} {userSelected?.surnames}
                </p>
              </div>
            </div>

            <div className="bg-color_green_1 flex gap-x-3 py-4 md:gap-x-7">
              <NavLink
                to={`/trabajadores/${params.trabajadorID}/call`}
                className={({ isActive }) =>
                  `cursor-pointer ${
                    isActive ? 'text-color_green_7' : 'text-color_gray_1'
                  }`
                }
              >
                <IconCall />
              </NavLink>

              <NavLink
                onClick={() => abrirChat(params.trabajadorID)}
                to={`/trabajadores/${params.trabajadorID}/chat`}
                className={({ isActive }) =>
                  `cursor-pointer ${
                    isActive ? 'text-color_green_7' : 'text-color_gray_1'
                  }`
                }
              >
                <IconMessaje />
              </NavLink>

              <NavLink
                to={`/trabajadores/${params.trabajadorID}/info`}
                className={({ isActive }) =>
                  `cursor-pointer ${
                    isActive ? 'text-color_green_7' : 'text-color_gray_1'
                  }`
                }
              >
                <IconInfo />
              </NavLink>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  )
}

export default Trabajador
