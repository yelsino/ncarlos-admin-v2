import { NotificacionContext } from 'context/Notificaciones/notificacionContext'
import { useContext, useEffect, useState } from 'react'

const useNotificacion = (initialState = {}) => {
  const notificacionContext = useContext(NotificacionContext)
  const { removeNotificacion }:any = notificacionContext

  const [width, setWidth] = useState(0)
  const [intervalID, setIntervalID] = useState<any>(null)

  const handleStartTimer = () => {
    const id = setInterval(() => {
      setWidth((prev) => {
        if (prev < 500) {
          return prev + 100
        }
        clearInterval(id)
        return prev
      })
    }, 1000)
    setIntervalID(id)
  }

  const handlePauseTimer = () => {
    clearInterval(intervalID)
  }

  const handleCloseNotificacion = () => {
    handlePauseTimer()
    // setExit(true);
    setTimeout(() => {
      // remover nitificacion
      removeNotificacion(initialState)
    }, 400)
  }

  useEffect(() => {
    // if (width >= 500) {
    if (width >= 500) {
      // Close notification
      handleCloseNotificacion()
    }
  }, [width])

  useEffect(() => {
    handleStartTimer()
  }, [])

  return [handlePauseTimer, handleStartTimer]
}

export default useNotificacion
