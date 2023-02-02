import { UserContext } from 'context/user/userContext'
import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IconLink } from '../../../Components/Icons'
import { AuthContext } from '../../../context/auth/AuthContext'

const Clientes = () => {
  const { usuarios, obtenerCaseros } = useContext(UserContext)
  const { uid } = useContext(AuthContext)

  useEffect(() => {
    obtenerCaseros()
  }, [])

  return (
    <div className="">
      {/* <button onClick={() => obtenerCaseros()}>CASEROS</button> */}
      <div className=" font-poppins mb-3 flex justify-between pr-5 text-sm sm:px-5 sm:text-lg">
        <div className="text-color_gray_1 inline w-8/12 font-bold sm:w-6/12">
          <div className="  inline">Nombres</div>
        </div>

        <div className="flex w-4/12 sm:w-6/12">
          <div className="text-color_gray_1   hidden w-full text-center font-bold sm:inline">
            Total
          </div>

          <div className="text-color_gray_1 hidden  w-full   truncate text-center font-bold md:inline ">
            Gastó
          </div>

          <div className=" text-color_gray_1 w-full  text-center  font-bold ">
            Deuda{' '}
          </div>
        </div>
      </div>
      <div className="items_clientes overflow-y-auto pr-5 sm:px-5">
        {usuarios
          .filter((c) => c._id !== uid)
          .map((v) => (
            <Link
              key={v._id}
              to={`/comprador/clientes/${v._id}/compras`}
              className="hover:text-color_green_7 relative flex w-full items-center py-2 text-base text-gray-500 sm:text-lg"
            >
              <div className="flex w-8/12 items-center gap-x-3 sm:w-6/12 ">
                <img
                  alt="img casero"
                  className="  h-10 w-10 rounded-full object-cover"
                  src={v.foto}
                />
                <p className="truncate capitalize">{` ${v.nombres} ${v.apellidos}`}</p>
              </div>

              <div className="flex w-4/12 text-base sm:w-6/12">
                <span className=" hidden   w-full text-center sm:inline ">{` ${200}`}</span>
                <span className=" hidden w-full text-center md:inline">{`S./ ${258.5}`}</span>
                <span className=" flex w-full   justify-center">
                  <span className=" text-center ">{`s/ ${400}`}</span>
                </span>
              </div>
              <div className=" text-color_green_7 absolute -right-5">
                <IconLink />
              </div>
            </Link>
          ))}
      </div>
    </div>
  )
}

export default Clientes
