import { UserContext } from 'context/user/userContext'
import { useContext } from 'react'

const UsuarioInfo = () => {
  const { users }: any = useContext(UserContext)
  const {
    user_selected: { user }
  } = users

  return (
    <div className="mx-auto flex flex-col items-center justify-center  gap-5">
      <p className="text-color_green_6  flex w-full  sm:flex-col md:flex-row">
        <span className=" w-36 sm:w-full md:w-36 ">Nombres:</span>
        <span className="text-color_green_7">{user?.names}</span>
      </p>
      <p className="text-color_green_6  flex w-full  sm:flex-col md:flex-row">
        <span className="  w-36 truncate sm:w-full md:w-36 ">Apellidos:</span>
        <span className="text-color_green_7">{user?.surnames}</span>
      </p>
      <p className="text-color_green_6  flex w-full  sm:flex-col md:flex-row">
        <span className="  w-36 truncate sm:w-full md:w-36 ">
          N° documento:
        </span>
        <span className="text-color_green_7">{user?.document}</span>
      </p>
      <p className="text-color_green_6  flex w-full  sm:flex-col md:flex-row">
        <span className="  w-36 truncate sm:w-full md:w-36 ">N° celular:</span>
        <span className="text-color_green_7">{user?.mobile}</span>
      </p>
      <p className="text-color_green_6  flex w-full  sm:flex-col md:flex-row">
        <span className=" w-36 truncate sm:w-full md:w-36">Correo:</span>
        <span className="text-color_green_7">{user?.email}</span>
      </p>

      <p className="mt-3 w-full cursor-pointer  text-center  text-base  text-red-500 ">
        eliminar usuario
      </p>
    </div>
  )
}

export default UsuarioInfo
