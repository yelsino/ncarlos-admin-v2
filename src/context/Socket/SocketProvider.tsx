import { useContext, useEffect } from 'react'
import { scrollBottomAnimated } from '../../helpers/scrollToBottom'
import { useSocket } from '../../hooks/useSocket'
import { chatTypes } from '../../types/chatTypes'
import { AuthContext } from '../auth/AuthContext'
import { ChatContext } from '../chat/ChatContext'
import { SocketContext } from './SocketContext'

interface Props {
  children: JSX.Element | JSX.Element[]
}

const baseUrl = import.meta.env.VITE_SOME_KEY

export const SocketProvider = ({ children }:Props) => {
  const { socket, online, conectarSocket, desconectarSocket } = useSocket(baseUrl)

  const { auth }:any = useContext(AuthContext)
  const { dispatch }:any = useContext(ChatContext)

  useEffect(() => {
    if (auth.logged) {
      conectarSocket()
    }
  }, [auth, conectarSocket])

  useEffect(() => {
    if (!auth.logged) {
      desconectarSocket()
    }
  }, [auth, desconectarSocket])

  useEffect(() => {
    socket?.on('lista-usuarios', (usuarios:any) => {
      dispatch({
        type: chatTypes.usuariosCargados,
        payload: usuarios
      })
    })
  }, [socket, dispatch])

  useEffect(() => {
    socket?.on('mensaje-personal', (mensaje:any) => {
      dispatch({
        type: chatTypes.NUEVO_MENSAJE,
        payload: mensaje
      })

      scrollBottomAnimated('mensajes')
    })
  }, [socket, dispatch])

  return (
    <SocketContext.Provider value={{ 
      socket, 
      online, 
      conectarSocket, 
      desconectarSocket 
    }}>
      {children}
    </SocketContext.Provider>
  )
}
