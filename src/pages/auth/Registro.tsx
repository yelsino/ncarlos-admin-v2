import IMGDEVELOPER from 'assets/img/developer.svg'
import './estilos.css'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import { Operario } from 'types-yola'

export interface OutletRegistro {
  operario: Operario;
  setOperario: React.Dispatch<React.SetStateAction<Operario>>;
}

const Registro = () => {

  const [operario, setOperario] = useState<Operario>({
    nombres: '',
    apellidos: '',
    documento: '',
    correo: '',
    password: '',
    celular: '',
    direccion: '',
    sobreNombre: ''
  })


  return (
    <div className="bg-color_green_1 flex h-full flex-col items-center justify-center">
      <div className="flex  max-w-5xl items-center justify-center ">
        <Outlet context={{operario, setOperario} as OutletRegistro} />
        <div className="hidden p-10 md:flex md:w-1/2">
          <div className="w-10/12">
            <img src={IMGDEVELOPER} alt="img admin negocios carlos" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registro
