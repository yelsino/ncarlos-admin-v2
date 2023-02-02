import { AuthContext } from 'context/auth/AuthContext'
import { useOpenChat } from 'hooks/useOpenChat'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const Colegas = () => {
  const { uid } = useContext(AuthContext)

  const { usuarios, abrirChat } = useOpenChat()

  return (
    <div className=" font-poppins border-color_green_4 flex  flex-col border-b pb-2 pt-3 ">
      <p className="text-color_green_5  text-sm">Colegas</p>
      <div className="flex flex-col gap-y-4 py-4 text-sm">
        {usuarios
          .filter((usuario: any) => usuario.uid !== uid)
          .map((usuario: any) => (
            <Link
              onClick={() => abrirChat(usuario.uid)}
              key={usuario.uid}
              to={`/trabajadores/${usuario.uid}/chat`}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-x-3 ">
                <img
                  alt="img de colega"
                  src={usuario.img}
                  className="h-10 w-10 rounded-full object-cover "
                />
                <div>
                  <p className="text-color_gray_1 w-32 truncate font-semibold capitalize">
                    {usuario.nickname.split(' ')[0]}
                  </p>
                  <p className="text-color_green_5 text-xs font-light">
                    {usuario.rols.find((e: any) => e.name === 'ADMIN')?.name ===
                    'ADMIN'
                      ? 'ADMINISTRADOR'
                      : usuario.rols[0].name}
                  </p>
                </div>
              </div>
              {usuario.online ? (
                <span className="bg-color_green_8 block h-2 w-2 rounded-full"></span>
              ) : (
                <span className="block h-2 w-2 rounded-full bg-gray-500"></span>
              )}
            </Link>
          ))}

        <p className=" text-color_green_7 flex cursor-pointer items-center justify-between text-sm font-semibold">
          <span>ver mas</span>
          <span className="text-lg">...</span>
        </p>
      </div>
    </div>
  )
}

export default Colegas
