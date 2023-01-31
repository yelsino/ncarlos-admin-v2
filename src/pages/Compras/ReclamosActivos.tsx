import { useContext, useEffect } from 'react'

import { Link } from 'react-router-dom'
import { IconLink } from '../../Components/Icons'
import { UserContext } from '../../context/user/UserContext'

const ReclamosActivos = () => {
  const { users, getClaimsAll }:any = useContext(UserContext)

  useEffect(() => {
    getClaimsAll()
  }, [])

  return (
    <div>
      <div className="flex font-bold text-color_gray_1 mb-5 font-poppins sm:text-lg sm:px-5">
        <span className=" w-9/12 truncate md:w-7/12">Asunto</span>
        <div className="flex  w-3/12 md:w-5/12">
          <span className="w-full hidden md:flex justify-center ">Fecha</span>
          <span className="w-full   text-center">Orden</span>
        </div>
      </div>

      <div className="pedidos-activos overflow-y-auto flex flex-col gap-y-5  sm:px-5">
        {users.claims?.map((c:any) => (
          <Link
            key={c?._id} to={'/comprador/usuarios/3/reclamos/8'}
            className=" text-gray-500 hover:text-color_green_7 text-base sm:text-lg w-full relative flex items-center py-1 "
          >
            <div className="w-full flex ">
              <span className=" w-9/12 truncate md:w-7/12">{c?.subject}</span>
              <div className=" flex  w-3/12 md:w-5/12">

                <span className="w-full hidden md:flex justify-center  truncate">12/05/21 5pm</span>
                <span className="w-full   text-center">#010</span>

              </div>
            </div>
            <span className="text-color_green_7 absolute right-0 md:-right-3 "><IconLink /></span>
          </Link>
        ))}

      </div>

    </div>
  )
}

export default ReclamosActivos
