import { AuthContext } from 'context/auth/AuthContext'
import { ChatContext } from 'context/chat/ChatContext'
import { ProductoContext } from 'context/productos/ProductoContext'
import { UserContext } from 'context/user/UserContext'
import { scrollBottomAnimated } from 'helpers/scrollToBottom'
import { useSocket } from 'hooks/useSocket'
import { useContext, useEffect } from 'react'
import { ICategoria, IProducto, IRespuesta, IRol, IUsuario } from 'types-yola'
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
  const { dispatchUser } = useContext(UserContext)
  const { dispatchProducto } = useContext(ProductoContext)

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

    socket?.on('GET_ROLS', (res: IRespuesta<IRol[]>) => {
      console.log(res);
      
      dispatchUser({
        type: 'OBTENER_ROLES',
        payload: res.data
      })
    })

    socket?.on('GET_ALL_PRODUCTS', (res: IRespuesta<IProducto[]>) => {
      console.log(res);
      
      dispatchProducto({
        type: 'OBTENER_PRODUCTOS',
        payload: res.data
      })
    })

    socket?.on('GET_CATEGORIES', (res: IRespuesta<ICategoria[]>) => {
      console.log(res);
      
      dispatchProducto({
        type: 'OBTENER_CATEGORIAS',
        payload: res.data
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
