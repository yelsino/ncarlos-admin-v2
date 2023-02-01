import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IconLink } from '../../../Components/Icons'
import { AuthContext } from '../../../context/auth/AuthContext'
import { UserContext } from '../../../context/user/UserContext'

const Clientes = () => {
  const { usuarios, obtenerCaseros } = useContext(UserContext)
  const { uid } = useContext(AuthContext)

  useEffect(() => {
    obtenerCaseros()
  }, [])

  return (
    <div className="">
      {/* <button onClick={() => obtenerCaseros()}>CASEROS</button> */}
      <div className=" flex justify-between text-sm sm:text-lg mb-3 font-poppins pr-5 sm:px-5">
        <div className="w-8/12 sm:w-6/12 text-color_gray_1 font-bold inline"><div className="  inline">Nombres</div></div>

        <div className="flex w-4/12 sm:w-6/12">
          <div className="font-bold   text-color_gray_1 w-full text-center hidden sm:inline">Total</div>

          <div className="font-bold w-full  text-center   text-color_gray_1 hidden md:inline truncate ">Gastó</div>

          <div className=" w-full font-bold  text-center  text-color_gray_1 ">Deuda </div>
        </div>

      </div>
      <div className="items_clientes overflow-y-auto sm:px-5 pr-5">
        {usuarios.filter((c) => c._id !== uid)
          .map((v) => (
            <Link
              key={v._id}
              to={`/comprador/clientes/${v._id}/compras`}
              className="text-gray-500 hover:text-color_green_7 text-base sm:text-lg w-full relative flex items-center py-2"
            >
              <div className="w-8/12 sm:w-6/12 flex items-center gap-x-3 ">
                <img alt="img casero" className="  rounded-full object-cover h-10 w-10" src={v.foto} />
                <p className='truncate capitalize'>{` ${v.nombres} ${v.apellidos}`}</p>
              </div>

              <div className="w-4/12 sm:w-6/12 flex text-base">
                <span className=" text-center   w-full hidden sm:inline ">{` ${200}`}</span>
                <span className=" md:inline hidden text-center w-full">{`S./ ${258.5}`}</span>
                <span className=" flex justify-center   w-full">
                  <span className=" text-center ">{`s/ ${400}`}</span>
                </span >

              </div >
              <div className=" absolute -right-5 text-color_green_7"><IconLink /></div>

            </Link>
          ))}

      </div>

    </div>
  )
}

export default Clientes
