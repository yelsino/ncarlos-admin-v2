// @ts-nocheckk

import { useCallback, useEffect, useState } from 'react'
import io from 'socket.io-client'

export const useSocket = (serverPath:any) => {
  const [socket, setSocket] = useState<any>(null)
  const [online, setOnline] = useState(false)

  // conectar
  const conectarSocket = useCallback(() => {
    const token = localStorage.getItem('token')

    const socketTemp:any = io(serverPath, {
      transports: ['websocket'],
      autoConnect: true,
      forceNew: true,
      query: {
        'x-token': token
      }
    })

    setSocket(socketTemp)
  }, [serverPath])

  // desconectar
  const desconectarSocket = useCallback(() => {
    socket?.disconnect()
  }, [socket])

  useEffect(() => {
    setOnline(socket?.connected)
  }, [socket])

  useEffect(() => {
    socket?.on('connect', () => setOnline(true))
  }, [socket])

  useEffect(() => {
    socket?.on('disconnect', () => setOnline(false))
  }, [socket])

  return {
    socket,
    online,
    conectarSocket,
    desconectarSocket
  }
}
