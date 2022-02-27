// @ts-nocheck

import { useContext, useRef, useState } from "react";
import { IconArrowRight, IconCameraOutline, IconMicrofono, IconPictureOutline, IconSend } from "../../../components/Icons";
import { AuthContext } from "../../../context/auth/AuthContext";
import { ChatContext } from "../../../context/chat/ChatContext";
import { SocketContext } from "../../../context/Socket/SocketContext";

const NavChat = () => {

  const [mensaje, setMensaje] = useState("");
  const { socket } = useContext(SocketContext);
  const { auth } = useContext(AuthContext);
  const { chatState } = useContext(ChatContext)


  const enviarMensaje = () => {
    if (mensaje.length === 0) return;
    setMensaje('');

    socket.emit('mensaje-personal', {
      de: auth.uid,
      para: chatState.chatActivo,
      mensaje: mensaje
    })
  }



  const textarea = useRef()

  return (
    <div className="fixed sm:absolute  bottom-0 flex z-50  mx-auto items-center sm:w-full justify-between py-4 border-t left-0 w-full   px-5 sm:px-0 gap-x-4 bg-color_green_1 ">

      <div className={` text-color_gray_1 flex justify-between  h-full   ${mensaje.length >= 1 ? 'w-1/12' : 'w-5/12'}`}>
        <span className={`${mensaje.length >= 1 ? 'hidden' : 'inline'}`}>
          <IconPictureOutline />
        </span>
        <span className={`${mensaje.length >= 1 ? 'hidden' : 'inline'}`}>
          <IconMicrofono />

        </span>
        <span className={`${mensaje.length >= 1 ? 'hidden' : 'inline'}`}>
          <IconCameraOutline />
        </span>
        <span className={`${mensaje.length >= 1 ? 'inline' : 'hidden'}`}>
          <IconArrowRight />
        </span>
      </div>




      <textarea
        ref={textarea}
        value={mensaje}
        onChange={(e) => {
          setMensaje(e.target.value.replace(/(\r\n|\n|\r)/gm, ""))
        }}
        className={`input_chat bg-color_green_3 rounded-3xl text-color_green_7 placeholder-color_green_7`}
        style={{
          height: mensaje.length > 0 ? `${textarea.current.scrollHeight}px` : '56px',
        }}
        placeholder="Escribe aqui!"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            enviarMensaje()
          }
        }}

      />

      <button
        onClick={enviarMensaje}
        className={`w-1/12 flex justify-center  ${mensaje.length >= 1 ? 'text-color_green_7 ' : 'text-color_gray_1'}`}>
        <IconSend />
      </button>
    </div>
  );
}

export default NavChat;