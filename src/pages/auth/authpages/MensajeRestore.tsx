import LOGO from '../../../assets/img/logo.png'
import { useNavigate } from 'react-router-dom'
import { IconCar } from 'Components/Icons'
import Titulo from 'Components/utilidades/Titulo'
import Parrafo from 'Components/utilidades/Parrafo'
import ButtonAction from 'Components/utilidades/ButtonAction'

const MensajeRestore = () => {
  const navigate = useNavigate()
  return (
    <div className="flex w-full flex-col items-center gap-5 p-10 md:w-1/2">
      <div className=" w-24 select-none object-contain  sm:w-32 md:hidden md:w-32">
        <img src={LOGO} alt="logo de negocios carlos" />
      </div>
      <div className="font-poppins text-color_green_4 absolute top-5  right-5  hidden items-center justify-center gap-x-2 text-lg font-extrabold  sm:top-10 sm:right-10 sm:flex">
        <span>
          <IconCar />
        </span>
        <h1>Administrador</h1>
      </div>
      <Titulo texto="PETICION ENVIADA" />
      <Parrafo
        text="
            Recuerda que el administrador tiene que validar esta petición, asi que esté al tanto de su correo o movil.
              "
      />

      <div className="mt-5 w-72 sm:w-80">
        <ButtonAction
          onClick={() => {
            navigate('/auth/login')
          }}
          type="button"
          text="TERMINAR"
        />
      </div>
    </div>
  )
}

export default MensajeRestore
