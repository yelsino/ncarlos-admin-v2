import LOGO from '../../../assets/img/logo.png'
import { useNavigate } from 'react-router-dom'
import { IconCar } from 'Components/Icons'
import Titulo from 'Components/utilidades/Titulo'
import Parrafo from 'Components/utilidades/Parrafo'
import ButtonAction from 'Components/utilidades/ButtonAction'

const MensajeRegistro = () => {
  const navigate = useNavigate()
  return (
    <div className="flex w-full flex-col items-center gap-5 p-10 md:w-1/2">
      <div className=" w-24 select-none object-contain  sm:w-32 md:hidden md:w-32">
        <img src={LOGO} alt="logo negocios carlos" />
      </div>
      <div className="font-poppins text-color_green_4 absolute top-5  right-5  hidden items-center justify-center gap-x-2 text-lg font-extrabold  sm:top-10 sm:right-10 sm:flex">
        <span>
          <IconCar />
        </span>
        <h1>Administrador</h1>
      </div>
      <Titulo texto="REGISTRO ENVIADO" />
      <Parrafo
        text="
             Sus datos estan registrados, debe estar atento a su dispositivo movil o correo indicado para validar sus datos.
              "
      />

      <div className="mt-5 w-72 sm:w-80">
        <ButtonAction
          type="button"
          text="TERMINAR"
          onClick={() => {
            navigate('/auth/login')
          }}
        />
      </div>
    </div>
  )
}

export default MensajeRegistro
