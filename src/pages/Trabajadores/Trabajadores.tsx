import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { IconLink } from '../../Components/Icons'
import { AuthContext } from '../../context/auth/AuthContext'
import { useOpenChat } from '../../hooks/useOpenChat'

const Trabajadores = () => {
  const { auth } = useContext(AuthContext) as any
  const [chatState] = useOpenChat() as any

  return (
    <div className="w-full px-7 mt-10">
      <p className="text-center text-color_green_7 font-poppins text-lg my-7">Trabajadores</p>
      <div className="flex justify-between text-sm sm:text-lg mb-3 font-poppins pr-5 sm:px-5">
        <div className="w-8/12 sm:w-6/12 text-color_gray_1 font-bold inline"><div className="  inline">Nombres</div></div>

        <div className="flex w-4/12 sm:w-6/12">
          <div className="font-bold   text-color_gray_1 w-full text-center hidden sm:inline truncate md:mx-2">Celular</div>

          <div className="font-bold w-full  text-center   text-color_gray_1 hidden lg:inline truncate ">Documento</div>
          <div className=" w-full font-bold  text-center  text-color_gray_1 ">Email</div>

        </div>
      </div>

      <div className="items_clientes overflow-y-auto sm:px-5 pr-5">

        {chatState.usuarios.filter((usuario:any) => usuario.uid !== auth.uid).map((v:any) => (
          <Link
            key={v.uid}
            to={`/trabajadores/${v.uid}/chat`}
            className="text-gray-500 hover:text-color_green_7 text-base sm:text-lg w-full relative flex items-center py-2"
          >
            <div className="w-8/12 sm:w-6/12 flex items-center gap-x-3 ">
              <img alt="img trabajadores" className="  rounded-full object-cover h-10 w-10" src={v.img} />
              <p className='truncate capitalize'>{` ${v.names} ${v.surnames}`}</p>
            </div>

            <div className="w-4/12 sm:w-6/12 flex ">
              <span className=" text-center   w-full hidden sm:inline sm:mx-2">{v.phone}</span>
              <span className=" lg:inline hidden text-center w-full truncate">{v.documento}</span>
              <span className=" flex justify-center   w-full">
                <span className=" text-center truncate">{v.email}</span>
              </span >

            </div >
            <div className=" absolute -right-5 text-color_green_7"><IconLink /></div>

          </Link>
        ))}
      </div>

    </div>
  )
}

export default Trabajadores
