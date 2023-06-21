import { IconLink } from 'Components/Icons'
import { UserContext } from 'context/user/userContext'
import { useContext, useEffect } from 'react'

import { Link } from 'react-router-dom'

const ReclamosActivos = () => {
  const { claims, getClaimsAll } = useContext(UserContext)

  useEffect(() => {
    getClaimsAll()
  }, [])

  return (
    <div>
      <div className="text-color_gray_1 font-poppins mb-5 flex font-bold sm:px-5 sm:text-lg">
        <span className=" w-9/12 truncate md:w-7/12">Asunto</span>
        <div className="flex  w-3/12 md:w-5/12">
          <span className="hidden w-full justify-center md:flex ">Fecha</span>
          <span className="w-full   text-center">Orden</span>
        </div>
      </div>

      <div className="pedidos-activos flex flex-col gap-y-5 overflow-y-auto  sm:px-5">
        {claims?.map((c: any) => (
          <Link
            key={c?._id}
            to={'/comprador/usuarios/3/reclamos/8'}
            className=" hover:text-color_green_7 relative flex w-full items-center py-1 text-base text-gray-500 sm:text-lg "
          >
            <div className="flex w-full ">
              <span className=" w-9/12 truncate md:w-7/12">{c?.subject}</span>
              <div className=" flex  w-3/12 md:w-5/12">
                <span className="hidden w-full justify-center truncate  md:flex">
                  12/05/21 5pm
                </span>
                <span className="w-full   text-center">#010</span>
              </div>
            </div>
            <span className="text-color_green_7 absolute right-0 md:-right-3 ">
              <IconLink />
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ReclamosActivos
