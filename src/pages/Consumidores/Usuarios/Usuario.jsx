import { Link, Outlet, useParams } from "react-router-dom";
import { IconArrow } from "../../../components/Icons";
import { PERFIL10, PERFIL11, PERFIL12, PERFIL2, PERFIL3, PERFIL4, PERFIL6, PERFIL7, PERFIL8, PERFIL9 } from "../../../components/Images";
import MenuUsuario from "../../../components/Plantillas/MenuUsuario";
import './usuarios.css';

const Usuario = () => {
  const params = useParams();
  const { userID } = params;
  return (
    <div>
      <div className="flex items-center gap-x-5 sm:gap-x-10 border-b pb-7 border-color_green_4">
        <img className="img_perfil w-20 h-20 sm:w-28 sm:h-28 object-cover  " src={PERFIL12} />
        <div>
          <p className="text-3xl sm:text-4xl font-poppins font-bold text-color_gray_1">Anna</p>
          <p className="text-lg sm:text-xl text-gray-600 truncate">Anna Felipe Castillo Rivero</p>
        </div>
      </div>
      {/* <p className="p-4 mb-7 bg-color_green_3 text-center text-color_green_7 rounded-lg">JUAN ALVERTO COÑAZOS</p> */}

      <Link to={`/comprador/usuarios/${userID}/elementos`} className="absolute top-10 text-color_green_7 sm:hidden">
        <IconArrow stile='h-5 w-5' />
      </Link>
      <div className="flex  pt-7 ">
        <MenuUsuario />
        <Outlet />
      </div>
    </div>
  );
}

export default Usuario;