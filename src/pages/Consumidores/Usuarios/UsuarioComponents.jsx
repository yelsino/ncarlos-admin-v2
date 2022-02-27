import { Link, useParams } from "react-router-dom";
import { IconCardBuy, IconDirecciones, IconListas, IconReclamos, IconUser } from "../../../components/Icons";


const UsuarioComponents = () => {
  const params = useParams();
  const { userID } = params;
  return (
    <div className="w-full sm:hidden">
      <div className=" flex justify-center gap-x-24 text-center my-5">
        <div className="text-lg ">
          <p className="text-color_green_5 mb-1 ">Compras</p>
          <span className="text-color_green_7">100</span>
        </div>
        <div className="text-lg ">
          <p className="text-color_green_5 mb-1 ">Inversión</p>
          <span className="text-color_green_7">S/. 100.0</span>
        </div>
      </div>


      <div className="flex flex-col gap-y-5">
        <Link to={`/comprador/usuarios/${userID}/datos`} className="flex items-center gap-x-3  p-2">
          <span className="text-color_green_7">
            <IconUser stile='h-8 w-8' />
          </span>
          <div>
            <p className="text-color_green_7 text-lg">Datos</p>
            <p className="text-color_green_5 text-sm">Registrado el 11/05/2022</p>
          </div>
        </Link>
        <Link to={`/comprador/usuarios/${userID}/compras`} className="flex items-center gap-x-3  p-2">
          <span className="text-color_green_7">
            <IconCardBuy stile='h-8 w-8' />
          </span>
          <div>
            <p className="text-color_green_7 text-lg">Compras</p>
            <p className="text-color_green_5 text-sm">5 compras en total</p>
          </div>
        </Link>
        <Link to={`/comprador/usuarios/${userID}/listas`} className="flex items-center gap-x-3  p-2">
          <span className="text-color_green_7">
            <IconListas stile='h-8 w-8' />
          </span>
          <div>
            <p className="text-color_green_7 text-lg">Listas</p>
            <p className="text-color_green_5 text-sm">10 listas de compras</p>
          </div>
        </Link>
        <Link to={`/comprador/usuarios/${userID}/direcciones`} className="flex items-center gap-x-3  p-2">
          <span className="text-color_green_7">
            <IconDirecciones stile='h-8 w-8' />
          </span>
          <div>
            <p className="text-color_green_7 text-lg">Direcciones</p>
            <p className="text-color_green_5 text-sm">10 Direcciones registrada</p>
          </div>
        </Link>
        <Link to={`/comprador/usuarios/${userID}/reclamos`} className="flex items-center gap-x-3  p-2">
          <span className="text-color_green_7">
            <IconReclamos stile='h-8 w-8' />
          </span>
          <div>
            <p className="text-color_green_7 text-lg">Reclamos</p>
            <p className="text-color_green_5 text-sm">5 reclamos en total</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default UsuarioComponents;