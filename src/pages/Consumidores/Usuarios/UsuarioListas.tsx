import { IconLink } from 'Components/Icons'
import { UserContext } from 'context/user/userContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const UsuarioListas = () => {
  const { users }:any = useContext(UserContext)
  const { user_selected: { lists } } = users

  return (
    <div className="w-full ">
      <h2 className="text-color_green_7 text-center text-xl mb-5">Listas</h2>

      <div className="listas overflow-y-auto flex flex-col gap-y-5">
        {lists?.map((l:any) => (
          <Link key={l?._id} to={`/comprador/usuarios/3/listas/${l?._id}`}>
            <p className="flex justify-between text-gray-500 hover:text-color_green_7">{l?.nombre}<div className="flex items-center gap-x-3"><span>cantidad {l?.cantidad}</span><span className="text-color_green_7"><IconLink /></span></div></p>
          </Link>
        ))}

        {
          lists?.length === 0 && <p className='text-center'>NO HAY LISTAS</p>
        }

      </div>
    </div>
  )
}

export default UsuarioListas
