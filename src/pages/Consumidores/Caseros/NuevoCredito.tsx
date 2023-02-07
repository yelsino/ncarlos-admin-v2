import { IconCamera, IconMoney, IconPicture } from 'Components/Icons'
import ButtonAction from 'Components/utilidades/ButtonAction'
import { useNavigate } from 'react-router-dom'

const NuevoCredito = () => {
  const navigate = useNavigate()
  return (
    <div className="nuevo_credito mt-5 flex flex-col items-center gap-y-5 overflow-y-auto   ">
      <div className="w-10/12">
        <label htmlFor="password" className="text-color_green_6">
          Monto
        </label>
        <div className="relative flex items-center  ">
          <input
            autoComplete={'off'}
            name="password"
            id="text"
            type="text"
            className="text-color_green_7 bg-color_green_3 w-full   rounded-md p-4 text-base  outline-none sm:text-lg"
          />
          <button className="text-color_green_7 absolute right-3">
            <IconMoney />
          </button>
        </div>
      </div>
      <div className="w-10/12">
        <label htmlFor="password" className="text-color_green_6">
          Abono
        </label>
        <div className="relative flex items-center  ">
          <input
            autoComplete={'off'}
            name="password"
            id="text"
            type="text"
            className="text-color_green_7 bg-color_green_3 w-full   rounded-md p-4 text-base  outline-none sm:text-lg"
          />
          <button className="text-color_green_7 absolute right-3">
            <IconMoney />
          </button>
        </div>
      </div>
      <div className="w-10/12">
        <label htmlFor="password" className="text-color_green_6">
          Fecha
        </label>
        <div className="relative flex items-center  ">
          <input
            autoComplete={'off'}
            name="password"
            id="text"
            type="text"
            className="text-color_green_7 bg-color_green_3 w-full   rounded-md p-4 text-base  outline-none sm:text-lg"
          />
          <button className="text-color_green_7 absolute right-3">
            <IconMoney />
          </button>
        </div>
      </div>
      <span className="text-color_green_7 ">
        <IconCamera />
      </span>

      <div className="w-10/12">
        <label htmlFor="password" className="text-color_green_6">
          Fotos
        </label>
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
        <ButtonAction text="REGISTRAR" onClick={() => navigate('/')} type="submit" />
      </div>
    </div>
  )
}

export default NuevoCredito
