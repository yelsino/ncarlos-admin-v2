import { AuthContext } from 'context/auth/AuthContext'
import { ChatContext } from 'context/chat/ChatContext'
import { ProductoContext } from 'context/productos/productoContext'
import { scrollBottomAnimated } from 'helpers/scrollToBottom'
import { useSocket } from 'hooks/useSocket'
import { useContext, useEffect } from 'react'
import { ICategoria, IPedido, IProducto, IRespuesta, IRol, IUsuario } from 'types-yola'
import { SocketContext } from './SocketContext'
import { UserContext } from 'context/user/userContext'
import { OrderContext } from 'context/orders/orderContext'

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
  const { dispatchOrder } = useContext(OrderContext)

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

    socket?.on('GET_ALL_ORDERS', (res: IRespuesta<IPedido[]>) => {
      console.log(res);
      
      dispatchOrder({
        type: 'GET_ORDERS',
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
