import { useEffect, useContext } from 'react';
import { Link, Outlet, useParams } from "react-router-dom";
import { IconArrow } from "../../../Components/Icons";
import MenuUsuario from "../../../Components/Plantillas/MenuUsuario";
import { UserContext } from '../../../context/user/UserContext';
import './usuarios.css';

const Usuario = () => {
  const params = useParams();
  const { userID } = params;
  const { users, getDetailUser } = useContext(UserContext);
  const { user_selected: {user} } = users;

  useEffect(() => {
    getDetailUser(userID);
  },[]);


  return (
    <div>
      <div className="flex items-center gap-x-5 sm:gap-x-10 border-b pb-7 border-color_green_4">
        <img alt="img usuarios" className="img_perfil w-20 h-20 2xl:w-28 2xl:h-28 object-cover  " src={user?.img} />
        <div>
          <p className="text-3xl 2xl:text-4xl font-poppins font-bold text-color_gray_1 uppercase">{user?.nickname}</p>
          <p className="text-lg 2xl:text-xl text-gray-600 truncate capitalize">{user?.names} {user?.surnames}</p>
        </div>
      </div>

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