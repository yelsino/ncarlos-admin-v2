import LOGO from '../../../assets/img/logo.png'
import { IconCar, } from "../../../Components/Icons";
import Titulo from "../../../Components/utilidades/Titulo";
import ButtonAction from "../../../Components/utilidades/ButtonAction";
import Parrafo from "../../../Components/utilidades/Parrafo";
import { useNavigate } from 'react-router-dom';


const MensajeRegistro = () => {

  const navigate = useNavigate();
  return (
    <div
      className="w-full md:w-1/2 p-10 flex flex-col items-center gap-5">
      <div className=" w-24 md:w-32 sm:w-32  select-none md:hidden object-contain">
        <img src={LOGO} alt="logo negocios carlos" />
      </div>
      <div className="hidden sm:flex absolute top-5  right-5  sm:top-10 sm:right-10 font-extrabold font-poppins text-color_green_4 text-lg  items-center justify-center gap-x-2">
        <span><IconCar /></span>
        <h1 >Administrador</h1>
      </div>
      <Titulo texto="REGISTRO ENVIADO" />
      <Parrafo text='
             Sus datos estan registrados, debe estar atento a su dispositivo movil o correo indicado para validar sus datos.
              ' />

      <div className="w-72 sm:w-80 mt-5">
        <ButtonAction
          type="button"
          text="TERMINAR"
          onClick={() => {
            navigate('/auth/login')
          }}
        />
      </div>
    </div>

  );
}

export default MensajeRegistro;