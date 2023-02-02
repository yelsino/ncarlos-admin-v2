import { IconCamera, IconMoney, IconPicture } from 'Components/Icons'
import ButtonAction from 'Components/utilidades/ButtonAction'
import { useNavigate } from 'react-router-dom'

const NuevoCredito = () => {
  const navigate = useNavigate()
  return (
    <div className="nuevo_credito overflow-y-auto flex flex-col items-center gap-y-5 mt-5   ">

      <div className="w-10/12">
        <label
          htmlFor='password' className="text-color_green_6">Monto</label>
        <div className="relative flex items-center  ">
          <input
            autoComplete={'off'}
            name="password"
            id='text'

            type="text"
            className='rounded-md p-4 outline-none   text-base sm:text-lg text-color_green_7  w-full bg-color_green_3'
          />
          <button
            className="absolute text-color_green_7 right-3">
            <IconMoney />
          </button>
        </div>
      </div>
      <div className="w-10/12">
        <label
          htmlFor='password' className="text-color_green_6">Abono</label>
        <div className="relative flex items-center  ">
          <input
            autoComplete={'off'}
            name="password"
            id='text'

            type="text"
            className='rounded-md p-4 outline-none   text-base sm:text-lg text-color_green_7  w-full bg-color_green_3'
          />
          <button
            className="absolute text-color_green_7 right-3">
            <IconMoney />
          </button>
        </div>
      </div>
      <div className="w-10/12">
        <label
          htmlFor='password' className="text-color_green_6">Fecha</label>
        <div className="relative flex items-center  ">
          <input
            autoComplete={'off'}
            name="password"
            id='text'

            type="text"
            className='rounded-md p-4 outline-none   text-base sm:text-lg text-color_green_7  w-full bg-color_green_3'
          />
          <button
            className="absolute text-color_green_7 right-3">
            <IconMoney />
          </button>
        </div>
      </div>
      <span className="text-color_green_7 ">
        <IconCamera />
      </span>

      <div className="w-10/12">
        <label
          htmlFor='password' className="text-color_green_6">Fotos</label>
        <div className="flex gap-x-5">
          <span className="text-color_green_6">
            <IconPicture />
          </span>
          <span className="text-color_green_6">
            <IconPicture />
          </span>
          <span className="text-color_green_6">
            <IconPicture />
          </span>
          <span className="text-color_green_6">
            <IconPicture />
          </span>
        </div>
      </div>
      <div className="   w-10/12 ">
        <ButtonAction text='REGISTRAR' onClick={() => navigate('/')} />
      </div>
    </div>
  )
}

export default NuevoCredito
