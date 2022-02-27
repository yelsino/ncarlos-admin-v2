import { useContext } from "react";
import { PERFIL12 } from "../../../components/Images";
import { AuthContext } from "../../../context/auth/AuthContext";
import { ChatContext } from "../../../context/chat/ChatContext";

const Mensajes = () => {
  const { chatState } = useContext(ChatContext);
  const { auth } = useContext(AuthContext);
  let msg_de = "";
  return (
    <div
      className=" msg_history tracking-tight text-color_green_7"
      id="mensajes"
    >
      {chatState.mensajes.map((msg, index) => {
        if (msg_de !== msg.de && msg_de !== "") {
          chatState.mensajes[index - 1].css = 'ocultar';
        }
        msg_de = msg.de;

        return msg.de === auth.uid ? (
          <div
            className={`flex gap-x-3 justify-end my-1 items-end msg_derecha ${"2xl:"}`}
          >
            <p
              key={msg.id}
              className="bg-color_green_2 py-1 rounded-full  px-3 inline-block"
            >
              {msg.mensaje}
            </p>
            {/* <p>{horaMes(msg.createdAt)}</p> */}
          </div>
        ) : (
          <div

            key={msg._id}
            className={`
            flex gap-x-3 justify-start  items-end  ${msg.css === 'ocultar'
                ? 'msg_visible'
                : 'msg_invisible'
              }`}
          >
            <span
              // style={msg.css}
              className="pb-2 ">
              <img
                className={`img_perfil_trabajador_inchat w-8 h-8 object-cover `}
                src={PERFIL12}
              />
            </span>
            <div className="flex flex-col gap-y-1">
              <p className="bg-color_green_3 py-1 rounded-full  px-3 inline-block">
                {msg.mensaje}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Mensajes;


