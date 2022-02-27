import { useContext } from "react";
import { Link, } from "react-router-dom";
import { AuthContext } from "../../../context/auth/AuthContext";
import { useOpenChat } from "../../../hooks/useOpenChat";

const Colegas = () => {


  const { auth } = useContext(AuthContext);

  const [chatState, abrirChat] = useOpenChat();


  return (
    <div className=" pb-2 pt-3 font-poppins  flex flex-col border-b border-color_green_4 ">
      <p className="text-color_green_5  text-sm">Colegas</p>
      {/* {auth.name} */}
      <div className="flex flex-col gap-y-4 py-4 text-sm">

        {
          chatState.usuarios.filter(usuario => usuario.uid !== auth.uid).map(usuario => (<Link
            onClick={() => abrirChat(usuario.uid)}
            key={usuario.uid} to={`/trabajadores/${usuario.uid}/chat`} className="flex justify-between items-center">
            <div className="flex gap-x-3 items-center ">
              {/* {console.log(usuario.roles.find(e => e.name === 'ADMIN'))} */}
              <img alt="img de colega" src={usuario.img} className="w-10 rounded-full h-10 object-cover " />
              <div>
                <p className="text-color_gray_1 font-semibold truncate w-32">{usuario.apodo}</p>
                <p className="text-xs text-color_green_5 font-light">{
                  usuario.roles.find(e => e.name === 'ADMIN')?.name === 'ADMIN'
                    ? 'ADMINISTRADOR'
                    : usuario.roles[0].name}
                </p>
              </div>
            </div>
            {
              usuario.online
                ? <span className="bg-color_green_8 w-2 h-2 rounded-full block"></span>
                : <span className="bg-gray-500 w-2 h-2 rounded-full block"></span>
            }

          </Link>
          ))}

        <p className=" text-sm text-color_green_7 font-semibold cursor-pointer">ver mas</p>

      </div>
    </div>
  );
}

export default Colegas;