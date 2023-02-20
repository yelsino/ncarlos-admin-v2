import { IconLink } from 'Components/Icons'
import { AuthContext } from 'context/auth/AuthContext'
import { UserContext } from 'context/user/UserContext'
import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './usuarios.css'
const Usuarios = () => {
  const { usuarios, filtrarUsuarios } = useContext(UserContext)
  const { uid } = useContext(AuthContext)
  const { roles } = useContext(UserContext)

  useEffect(() => {
    if(roles.length !== 0) {
      const findRol = roles.find((r) => r.nombre === 'USUARIO')
      filtrarUsuarios({ roles: [findRol._id]});
    }
  }, [roles])

  return (
    <div className="">
      <div className=" font-poppins mb-3 flex justify-between pr-5 text-sm sm:px-5 sm:text-lg">
        <div className="text-color_gray_1 inline w-8/12 font-bold sm:w-6/12">
          <div className="  inline">Nombres</div>
        </div>

        <div className="flex w-4/12 sm:w-6/12">
          <div className="text-color_gray_1   hidden w-full text-center font-bold sm:inline">
            Total
          </div>

          <div className="text-color_gray_1 hidden  w-full   truncate text-center font-bold md:inline ">
            Reclamos
          </div>

          <div className=" text-color_gray_1 w-full  text-center  font-bold ">
            Gastó{' '}
          </div>
        </div>
      </div>

      <div className="items_clientes overflow-y-auto pr-5 sm:px-5">
        {usuarios
          .filter((u: any) => u.uid !== uid)
          .map((v) => (
            <Link
              key={v._id}
              to={`/comprador/usuarios/${v._id}/datos`}
              className="hover:text-color_green_7 relative flex w-full items-center py-2 text-base text-gray-500 sm:text-lg"
            >
              <div className="flex w-8/12 items-center gap-x-3 sm:w-6/12 ">

              <div className='w-6 h-6'>
                <img
                    alt="img trabajadores"
                    className="   rounded-full object-cover"
                    onError={(error)=>{
                      error.currentTarget.src =
                        'https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/48/null/external-user-user-tanah-basah-basic-outline-tanah-basah-4.png'
                    }}
                    src={v.foto}
                  />
              </div>


                <p className="truncate capitalize">{` ${v.nombres} ${v.apellidos}`}</p>
              </div>

              <div className="flex w-4/12 sm:w-6/12 ">
                <span className=" hidden   w-full text-center sm:inline ">{` ${200}`}</span>
                <span className=" hidden w-full text-center md:inline">
                  {'3'}
                </span>
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

export default Usuarios
