
import { useContext, useRef, useState } from 'react'
import {
  IconArrowRight,
  IconCameraOutline,
  IconMicrofono,
  IconPictureOutline,
  IconSend
} from '../../../Components/Icons'
import { AuthContext } from '../../../context/auth/AuthContext'
import { ChatContext } from '../../../context/chat/ChatContext'
import { SocketContext } from '../../../context/Socket/SocketContext'

const NavChat = () => {
  const [mensaje, setMensaje] = useState('')
  const { socket } = useContext(SocketContext)
  const { auth } = useContext(AuthContext) as any
  const { chatState } = useContext(ChatContext) as any

  const enviarMensaje = () => {
    if (mensaje.length === 0) return
    setMensaje('')

    socket.emit('mensaje-personal', {
      de: auth.uid,
      para: chatState.chatActivo,
      mensaje
    })
  }

  const textarea = useRef()

  return (
    <div className="bg-color_green_1 fixed  bottom-0 left-0 z-50  mx-auto flex w-full items-center justify-between gap-x-4 border-t py-4   px-5 sm:absolute sm:w-full sm:px-0 ">
      <div
        className={` text-color_gray_1 flex h-full  justify-between   ${
          mensaje.length >= 1 ? 'w-1/12' : 'w-5/12'
        }`}
      >
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

      {/* <textarea
        ref={textarea as any}
        value={mensaje as any}
        onChange={(e) => {
          setMensaje(e.target.value.replace(/(\r\n|\n|\r)/gm, ''))
        }}
        className={
          'input_chat bg-color_green_3 text-color_green_7 placeholder:text-color_green_7 rounded-3xl'
        }
        style={{
          height:
            mensaje.length > 0 ? `${textarea.current.scrollHeight}px` : '56px'
        }}
        placeholder="Escribe aqui!"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            enviarMensaje()
          }
        }}
      /> */}

      <button
        onClick={enviarMensaje}
        className={`flex w-1/12 justify-center  ${
          mensaje.length >= 1 ? 'text-color_green_7 ' : 'text-color_gray_1'
        }`}
      >
        <IconSend />
      </button>
    </div>
  )
}

export default NavChat
