import { useReducer } from 'react'
import { IUsuario } from 'types-yola'
import { ChatContext } from './ChatContext'
import { chatReducer } from './chatReducer'

export interface ChatState {
  chatActivo: string | null
  userSelected: string | null
  usuarios: IUsuario[]
  mensajes: any[]
}

const INITIAL_STATE: ChatState = {
  // uid: '',
  chatActivo: null, // UID del usuario al que yo quiero enviar mensajes
  userSelected: null,
  usuarios: [], // Todos los usuarios de la base datos
  mensajes: [] // El chat seleccionado
}

export const ChatProvider = ({ children }: any) => {
  const [chatState, dispatch] = useReducer(chatReducer, INITIAL_STATE)

  return (
    <ChatContext.Provider
      value={{
        ...chatState,
        chatDispatch: dispatch
      }}
    >
      {children}
    </ChatContext.Provider>
  )
}
