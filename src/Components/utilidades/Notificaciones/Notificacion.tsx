import { IconWork } from 'Components/Icons'
import { memo } from 'react'
import './notificacion.css'
import useNotificacion from './useNotification'

const Notificacion = ({ data }:any) => {
  const { id, message } = data

  const [handlePauseTimer, handleStartTimer] = useNotificacion(id)

  return (
    <div
      onMouseEnter={handlePauseTimer}
      onMouseLeave={handleStartTimer}
      className={'shadow-md select-all bg-white    rounded-md my-3 font-medium transition  flex items-center  border-color_green_8 border-opacity-50 border-t ease-in-out duration-500'} >
      <span className=' p-4 text-color_green_7'><IconWork /></span>
      <span className='pr-4 '>{message}</span>
    </div>
  )
}

export default memo(Notificacion)
