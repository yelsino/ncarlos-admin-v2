import { IconLink } from 'Components/Icons'
import { UserContext } from 'context/user/userContext'
import { useContext } from 'react'

import { Link } from 'react-router-dom'

const UsuarioDirecciones = () => {
  const { users }: any = useContext(UserContext)
  const {
    user_selected: { directions }
  } = users

  console.log(directions)

  return (
    <div className="w-full">
      <h2 className="text-color_green_7 mb-5 text-center text-xl">
        Direcciones
      </h2>

      <div className="direcciones flex flex-col gap-y-5 overflow-y-auto">
        {directions?.map((d: any) => (
          <Link to={`/comprador/usuarios/3/direcciones/${d?.id}`} key={d?.id}>
            <p className="hover:text-color_green_7 flex justify-between text-gray-500">
              {d?.nombre}
              <div className="flex items-center gap-x-3">
                <span>{d?.provincia}</span>
                <span className="text-color_green_7">
                  <IconLink />
                </span>
              </div>
            </p>
          </Link>
        ))}

        {directions?.length === 0 && (
          <p className="text-center">NO HAY DIRECCIONES</p>
        )}
      </div>
    </div>
  )
}

export default UsuarioDirecciones
