import { UserContext } from 'context/user/UserContext'
import { useContext } from 'react'

const CaseroInfo = () => {
  const { usuarioSeleccionado: seleccionado } = useContext(UserContext)

  return (
    <div className="datos_casero mx-auto mt-5    flex  flex-col gap-5 overflow-y-auto">
      <p className="text-color_green_6  flex w-full ">
        <span className="w-36">Nombres:</span>
        <span className="text-color_green_7">{seleccionado.nombres}</span>
      </p>
      <p className="text-color_green_6  flex w-full">
        <span className="w-36 ">Apellidos:</span>
        <span className="text-color_green_7">{seleccionado.apellidos}</span>
      </p>
      <p className="text-color_green_6  flex w-full">
        <span className="  w-36 ">N° documento:</span>
        <span className="text-color_green_7">{seleccionado.documento}</span>
      </p>
      <p className="text-color_green_6  flex w-full">
        <span className="  w-36 ">N° celular:</span>
        <span className="text-color_green_7">{seleccionado.celular}</span>
      </p>
      <p className="text-color_green_6  flex w-full">
        <span className=" w-36">Correo:</span>
        <span className="text-color_green_7">{seleccionado.correo}</span>
      </p>

      <p className="mt-3 w-full cursor-pointer  text-center  text-base  text-red-500 ">
        eliminar usuario
      </p>
    </div>
  )
}

export default CaseroInfo
