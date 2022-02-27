
import IMGDEVELOPER from "../../assets/img/developer.svg";
import './estilos.css'
import { Outlet } from 'react-router-dom'


const Restore = () => {


  return (
    <div className="bg-color_green_1 h-full flex justify-center items-center flex-col">
      <div className='max-w-5xl  flex justify-center items-center '>
        <Outlet />
        <div className="hidden md:w-1/2 md:flex p-10">
          <div className="w-10/12">
            <img src={IMGDEVELOPER} alt="img admin negocios carlos" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Restore;