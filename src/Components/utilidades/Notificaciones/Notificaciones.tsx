import { useContext } from 'react'
import { createPortal } from 'react-dom'
import Notificacion from './Notificacion'
import { NotificacionContext } from 'context/notificaciones/notificacionContext'

const Notificaciones = () => {
  const notificacionRoot: any = document.getElementById('notificacion-root')

  const notificacionContext = useContext(NotificacionContext)
  const { notificaciones }: any = notificacionContext

  return createPortal(
    <div className="fixed bottom-10 left-4  ">
      {notificaciones.map((v: any) => (
        <Notificacion key={v.id} data={v} />
      ))}
    </div>,
    notificacionRoot
  )
}

export default Notificaciones
