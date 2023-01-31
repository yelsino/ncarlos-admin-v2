import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { IconLink } from '../../../Components/Icons'
import { UserContext } from '../../../context/user/UserContext'

const UsuarioReclamos = () => {
  const { users }:any = useContext(UserContext)
  const { user_selected: { claims } } = users

  return (
    <div className="w-full">
      <h2 className="text-color_green_7 text-center text-xl mb-5">Reclamos</h2>

      <div className="flex flex-col gap-y-5 reclamos overflow-y-auto">
        {
          claims?.map((r:any) => (
            <Link key={r?.id} to={`/comprador/usuarios/3/reclamos/${r?.id}`}>
              <p className="flex justify-between text-gray-500 hover:text-color_green_7">{r?.descripcion}<div className="flex items-center gap-x-3"><span>{r?.fecha}</span><span className="text-color_green_7"><IconLink /></span></div></p>
            </Link>
          ))
        }

        {
          claims?.length === 0 && <p className='text-center'>NO HAY LISTAS</p>
        }

      </div>
    </div>
  )
}

export default UsuarioReclamos
