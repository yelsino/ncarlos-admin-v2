import LOGO from '../../../assets/img/logo.png'
import { IconCar, } from "../../../Components/Icons";
import Titulo from "../../../Components/utilidades/Titulo";
import ButtonAction from "../../../Components/utilidades/ButtonAction";
import Parrafo from "../../../Components/utilidades/Parrafo";
import { useNavigate } from 'react-router-dom';



const MensajeRestore = () => {

  const navigate = useNavigate();
  return (

    <div
      className="w-full md:w-1/2 p-10 flex flex-col items-center gap-5">
      <div className=" w-24 md:w-32 sm:w-32  select-none md:hidden object-contain">
        <img src={LOGO} alt="logo de negocios carlos" />
      </div>
      <div className="hidden sm:flex absolute top-5  right-5  sm:top-10 sm:right-10 font-extrabold font-poppins text-color_green_4 text-lg  items-center justify-center gap-x-2">
        <span><IconCar /></span>
        <h1 >Administrador</h1>
      </div>
      <Titulo texto="PETICION ENVIADA" />
      <Parrafo text='
            Recuerda que el administrador tiene que validar esta petición, asi que esté al tanto de su correo o movil.
              ' />

      <div className="w-72 sm:w-80 mt-5">
        <ButtonAction
          onClick={() => {
            navigate('/auth/login')
          }}
          type="button"
          text="TERMINAR"
        />

      </div>
    </div>

  );
}

export default MensajeRestore;