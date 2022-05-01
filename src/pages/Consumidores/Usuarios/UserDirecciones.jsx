import {useContext} from 'react';

import { Link } from "react-router-dom";
import { IconLink } from "../../../Components/Icons";
import { UserContext } from '../../../context/user/UserContext';

const UsuarioDirecciones = () => {

  const { users } = useContext(UserContext);
  const { user_selected: {directions} } = users;

  console.log(directions);
  

  return (
    <div className="w-full">
      <h2 className="text-color_green_7 text-center text-xl mb-5">Direcciones</h2>

      <div className="direcciones overflow-y-auto flex flex-col gap-y-5">
        {
          directions?.map(d => (
            <Link to={`/comprador/usuarios/3/direcciones/${d?.id}`} key={d?.id} >
              <p className="flex justify-between text-gray-500 hover:text-color_green_7">{d?.nombre}<div className="flex items-center gap-x-3"><span>{d?.provincia}</span><span className="text-color_green_7"><IconLink /></span></div></p>
            </Link>
          ))
        }

{
          directions?.length === 0 && <p className='text-center'>NO HAY DIRECCIONES</p>
        }

      </div>
    </div>
  );
}

export default UsuarioDirecciones;

