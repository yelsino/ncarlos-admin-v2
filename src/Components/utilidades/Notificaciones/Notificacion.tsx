import { IconWork } from 'Components/Icons'
import { memo } from 'react'
import './notificacion.css'
import useNotificacion from './useNotification'

const Notificacion = ({ data }: any) => {
  const { id, message } = data

  const [handlePauseTimer, handleStartTimer] = useNotificacion(id)

  return (
    <div
      onMouseEnter={handlePauseTimer}
      onMouseLeave={handleStartTimer}
      className={
        'border-color_green_8 my-3 flex    select-all items-center rounded-md border-t  border-opacity-50 bg-white  font-medium shadow-md transition duration-500 ease-in-out'
      }
    >
      <span className=" text-color_green_7 p-4">
        <IconWork />
      </span>
      <span className="pr-4 ">{message}</span>
    </div>
  )
}

export default memo(Notificacion)
