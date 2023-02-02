import IMGDEVELOPER from '../../assets/img/developer.svg'
import './estilos.css'
import { Outlet } from 'react-router-dom'

const Registro = () => {
  return (
    <div className="bg-color_green_1 flex h-full flex-col items-center justify-center">
      <div className="flex  max-w-5xl items-center justify-center ">
        <Outlet />
        <div className="hidden p-10 md:flex md:w-1/2">
          <div className="w-10/12">
            <img src={IMGDEVELOPER} alt="img admin negocios carlos" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registro
