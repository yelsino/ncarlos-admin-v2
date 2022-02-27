import { memo } from 'react'
import './notificacion.css'
import useNotificacion from './useNotification';
const textos = {
  0: 'success_notificacion', // success
  1: 'alert_notificacion', // alert
  2: 'error_notificacion', // error
}

const Notificacion = ({ data }) => {
  const { id, type, message } = data;

  const [handlePauseTimer, handleStartTimer] = useNotificacion(id)


  return (
    <div
      onMouseEnter={handlePauseTimer}
      onMouseLeave={handleStartTimer}
      className={`shadow-md select-all bg-white  border-2 ${textos[type]} p-4 rounded-md my-3 font-medium transition  ease-out duration-500 `} ><span className=''>{message}  </span></div>
  );
}

export default memo(Notificacion);