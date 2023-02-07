import { useContext } from 'react'
import { PERFIL12 } from '../../../Components/Images'
import { AuthContext } from '../../../context/auth/AuthContext'
import { ChatContext } from '../../../context/chat/chatContext'

const Mensajes = () => {
  const { chatState } = useContext(ChatContext) as any
  const { auth } = useContext(AuthContext) as any
  let msgDe = ''
  return (
    <div
      className=" msg_history text-color_green_7 tracking-tight"
      id="mensajes"
    >
      {chatState.mensajes.map((msg: any, index: any) => {
        if (msgDe !== msg.de && msgDe !== '') {
          chatState.mensajes[index - 1].css = 'ocultar'
        }
        msgDe = msg.de

        return msg.de === auth.uid ? (
          <div
            className={`msg_derecha my-1 flex items-end justify-end gap-x-3 ${'2xl:'}`}
          >
            <p
              key={msg.id}
              className="bg-color_green_2 inline-block rounded-full  py-1 px-3"
            >
              {msg.mensaje}
            </p>
            {/* <p>{horaMes(msg.createdAt)}</p> */}
          </div>
        ) : (
          <div
            key={msg._id}
            className={`
            flex items-end justify-start  gap-x-3  ${
              msg.css === 'ocultar' ? 'msg_visible' : 'msg_invisible'
            }`}
          >
            <span
              // style={msg.css}
              className="pb-2 "
            >
              <img
                alt="img mensaje"
                className={'img_perfil_trabajador_inchat h-8 w-8 object-cover '}
                src={PERFIL12}
              />
            </span>
            <div className="flex flex-col gap-y-1">
              <p className="bg-color_green_3 inline-block rounded-full  py-1 px-3">
                {msg.mensaje}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Mensajes
