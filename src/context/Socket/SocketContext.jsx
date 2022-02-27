import { createContext, useContext, useEffect } from "react";
import { scrollBottomAnimated } from "../../helpers/scrollToBottom";
import { useSocket } from "../../hooks/useSocket";
import { chatTypes } from "../../types/chatTypes";
import { AuthContext } from "../auth/AuthContext";
import { ChatContext } from "../chat/ChatContext";



export const SocketContext = createContext(null);


export const SocketProvider = ({ children }) => {
  const { socket, online, conectarSocket, desconectarSocket } = useSocket('https://ns-carlos-v2.herokuapp.com');

  const { auth } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);



  useEffect(() => {
    if (auth.logged) {
      conectarSocket();
    }
  }, [auth, conectarSocket]);


  useEffect(() => {
    if (!auth.logged) {
      desconectarSocket();
    }
  }, [auth, desconectarSocket]);




  useEffect(() => {
    socket?.on('lista-usuarios', (usuarios) => {
      dispatch({
        type: chatTypes.usuariosCargados,
        payload: usuarios
      })
    })
  }, [socket, dispatch]);

  useEffect(() => {

    socket?.on('mensaje-personal', (mensaje) => {
      dispatch({
        type: chatTypes.NUEVO_MENSAJE,
        payload: mensaje
      })

      scrollBottomAnimated('mensajes')

    })
  }, [socket, dispatch])


  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  )
}
