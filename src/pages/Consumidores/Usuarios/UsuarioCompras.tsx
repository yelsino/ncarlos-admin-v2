import { IconLink } from 'Components/Icons'
import { UserContext } from 'context/user/UserContext'
import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'

const UsuarioCompras = () => {
  const params = useParams()
  const { userID } = params

  const { users }: any = useContext(UserContext)
  const {
    user_selected: { orders }
  } = users

  return (
    <div className="w-full ">
      <h2 className="text-color_green_7 mb-5 text-center text-xl sm:hidden">
        Compras
      </h2>

      <div className=" font-poppins  mb-5 flex pr-5 font-semibold ">
        <span className="w-6/12  truncate">Fecha de compra</span>
        <div className="flex   w-6/12 gap-x-3">
          <span className=" w-full   truncate">Valor Compra</span>
          <span className="w-full   truncate text-center">N° orden</span>
        </div>
      </div>

      <div className="listas flex flex-col gap-y-5 overflow-y-auto pr-5">
        {orders?.map((o: any) => (
          <Link
            key={o?._id}
            to={`/comprador/usuarios/${userID}/compras/${o?._id}/detalle`}
            className="hover:text-color_green_7  relative flex text-gray-500"
          >
            <span className="w-6/12 truncate">Lunes 25 de noviembre 2022</span>
            <div className="flex   w-6/12 gap-x-3">
              <span className="w-full text-center">S/. 155.0</span>
              <span className="w-full text-center ">#{o?.number_order}</span>
            </div>
            <span className="text-color_green_7 absolute -right-5">
              <IconLink />
            </span>
          </Link>
        ))}

        {orders?.length === 0 && <p className="text-center">NO HAY LISTAS</p>}
      </div>
    </div>
  )
}

export default UsuarioCompras
