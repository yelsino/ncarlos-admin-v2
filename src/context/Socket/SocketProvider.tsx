import { AuthContext } from 'context/auth/AuthContext'
import { ChatContext } from 'context/chat/ChatContext'
import { scrollBottomAnimated } from 'helpers/scrollToBottom'
import { useSocket } from 'hooks/useSocket'
import { useContext, useEffect } from 'react'
import { SocketContext } from './SocketContext'

interface Props {
  children: JSX.Element | JSX.Element[]
}

const baseUrl = import.meta.env.VITE_SOME_KEY

export const SocketProvider = ({ children }: Props) => {
  const { socket, online, conectarSocket, desconectarSocket } =
    useSocket(baseUrl)

  const { logged }: any = useContext(AuthContext)
  const { dispatch }: any = useContext(ChatContext)

  useEffect(() => {
    if (logged) {
      conectarSocket()
    }
  }, [logged, conectarSocket])

  useEffect(() => {
    if (!logged) {
      desconectarSocket()
    }
  }, [logged, desconectarSocket])

  useEffect(() => {
    socket?.on('LISTA_USUARIOS', (usuarios: any) => {
      dispatch({
        type: 'USUARIOS_CARGADOS',
        payload: usuarios
      })
    })
  }, [socket, dispatch])

  useEffect(() => {
    socket?.on('MENSJE_PERSONAL', (mensaje: any) => {
      dispatch({
        type: 'NUEVO_MENSAJE',
        payload: mensaje
      })

      scrollBottomAnimated('mensajes')
    })
  }, [socket, dispatch])

  return (
    <SocketContext.Provider
      value={{
        socket,
        online,
        conectarSocket,
        desconectarSocket
      }}
    >
      {children}
    </SocketContext.Provider>
  )
}
