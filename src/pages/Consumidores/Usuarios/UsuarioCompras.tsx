import { IconLink } from 'Components/Icons'
import { UserContext } from 'context/user/userContext'
import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'

const UsuarioCompras = () => {
  const params = useParams()
  const { userID } = params

  const { users }:any = useContext(UserContext)
  const { user_selected: { orders } } = users

  return (
    <div className="w-full ">
      <h2 className="text-color_green_7 text-center text-xl mb-5 sm:hidden">Compras</h2>

      <div className=" flex  font-poppins font-semibold mb-5 pr-5 ">
        <span className="w-6/12  truncate">Fecha de compra</span>
        <div className="w-6/12   flex gap-x-3">
          <span className=" w-full   truncate">Valor Compra</span>
          <span className="w-full   truncate text-center">N° orden</span>
        </div>
      </div>

      <div className="flex flex-col gap-y-5 pr-5 listas overflow-y-auto">
        {
          orders?.map((o:any) => (
            <Link key={o?._id} to={`/comprador/usuarios/${userID}/compras/${o?._id}/detalle`} className="flex  text-gray-500 hover:text-color_green_7 relative">

              <span className="w-6/12 truncate">Lunes 25 de noviembre 2022</span>
              <div className="w-6/12   flex gap-x-3">
                <span className="w-full text-center">S/. 155.0</span>
                <span className="w-full text-center ">#{o?.number_order}</span>

              </div>
              <span className="text-color_green_7 absolute -right-5"><IconLink /></span>

            </Link>
          ))
        }

{
          orders?.length === 0 && <p className='text-center'>NO HAY LISTAS</p>
        }
      </div>
    </div>
  )
}

export default UsuarioCompras
