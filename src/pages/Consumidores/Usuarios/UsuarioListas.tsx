import { IconLink } from 'Components/Icons'
import { UserContext } from 'context/user/UserContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const UsuarioListas = () => {
  const { users }: any = useContext(UserContext)
  const {
    user_selected: { lists }
  } = users

  return (
    <div className="w-full ">
      <h2 className="text-color_green_7 mb-5 text-center text-xl">Listas</h2>

      <div className="listas flex flex-col gap-y-5 overflow-y-auto">
        {lists?.map((l: any) => (
          <Link key={l?._id} to={`/comprador/usuarios/3/listas/${l?._id}`}>
            <p className="hover:text-color_green_7 flex justify-between text-gray-500">
              {l?.nombre}
              <div className="flex items-center gap-x-3">
                <span>cantidad {l?.cantidad}</span>
                <span className="text-color_green_7">
                  <IconLink />
                </span>
              </div>
            </p>
          </Link>
        ))}

        {lists?.length === 0 && <p className="text-center">NO HAY LISTAS</p>}
      </div>
    </div>
  )
}

export default UsuarioListas
