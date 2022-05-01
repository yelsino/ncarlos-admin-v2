import { memo } from 'react'
import { IconWork } from '../../Icons';
import './notificacion.css'
import useNotificacion from './useNotification';
import { Transition } from '@headlessui/react'
// const textos = {
//   0: 'success_notificacion', // success
//   1: 'alert_notificacion', // alert
//   2: 'error_notificacion', // error
// }

const Notificacion = ({ data }) => {
  const { id, message } = data;

  const [handlePauseTimer, handleStartTimer] = useNotificacion(id)
  // ${textos[type]} añadir al div
  // extraer type si fuese el caso

  return (
    <div
      onMouseEnter={handlePauseTimer}
      onMouseLeave={handleStartTimer}
      className={`shadow-md select-all bg-white    rounded-md my-3 font-medium transition  flex items-center  border-color_green_8 border-opacity-50 border-t ease-in-out duration-500`} >
      <span className=' p-4 text-color_green_7'><IconWork /></span>
      <span className='pr-4 '>{message}</span>
    </div>
  );
}

export default memo(Notificacion);