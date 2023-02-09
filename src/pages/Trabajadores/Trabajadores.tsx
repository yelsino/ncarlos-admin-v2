import { IconLink, IconOutUser } from 'Components/Icons'
import { AuthContext } from 'context/auth/AuthContext'
import { UserContext } from 'context/user/UserContext'
import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { useOpenChat } from '../../hooks/useOpenChat'

const Trabajadores = () => {
  const { uid } = useContext(AuthContext)
  const { usuarios, filtrarUsuarios } = useContext(UserContext)
  const { roles } = useContext(UserContext)

  useEffect(() => {
    if(roles.length !== 0) {
      const findRol = roles.find((r) => r.nombre === 'TRABAJADOR')
      filtrarUsuarios({ roles: [findRol._id]});
    }
  }, [roles])

  return (
    <div className="mt-10 w-full px-7">
      <p className="text-color_green_7 font-poppins my-7 text-center text-lg">
        Trabajadores
      </p>
      <div className="font-poppins mb-3 flex justify-between pr-5 text-sm sm:px-5 sm:text-lg">
        <div className="text-color_gray_1 inline w-8/12 font-bold sm:w-6/12">
          <div className="  inline">Nombres</div>
        </div>

        <div className="flex w-4/12 sm:w-6/12">
          <div className="text-color_gray_1   hidden w-full truncate text-center font-bold sm:inline md:mx-2">
            Celular
          </div>

          <div className="text-color_gray_1 hidden  w-full   truncate text-center font-bold lg:inline ">
            Documento
          </div>
          <div className=" text-color_gray_1 w-full  text-center  font-bold ">
            Email
          </div>
        </div>
      </div>

      <div className="items_clientes overflow-y-auto pr-5 sm:px-5">
        {usuarios
          .filter((usuario) => usuario._id !== uid)
          .map((v) => (
            <Link
              key={v._id}
              to={`/trabajadores/${v._id}/chat`}
              className="hover:text-color_green_7 relative flex w-full items-center py-2 text-base text-gray-500 sm:text-lg"
            >
              <div className="flex w-8/12 items-center gap-x-3 sm:w-6/12 ">
                {
                  v.foto 
                  ? (<img
                    alt="img trabajadores"
                    className="  h-10 w-10 rounded-full object-cover"
                    src={v.foto}
                    onError={(error)=>{
                      error.currentTarget.src =
                        'https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/48/null/external-user-user-tanah-basah-basic-outline-tanah-basah-4.png'
                    }}
                  />)
                  : ( <IconOutUser stile='w-8 h-8' />)
                }

                <p className="truncate capitalize">{` ${v.nombres} ${v.apellidos}`}</p>
              </div>

              <div className="flex w-4/12 sm:w-6/12 ">
                <span className=" hidden   w-full text-center sm:mx-2 sm:inline">
                  {v.celular}
                </span>
                <span className=" hidden w-full truncate text-center lg:inline">
                  {v.documento}
                </span>
                <span className=" flex w-full   justify-center">
                  <span className=" truncate text-center">{v.correo}</span>
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

export default Trabajadores
