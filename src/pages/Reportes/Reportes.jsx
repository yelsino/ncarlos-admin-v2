import { Link, Outlet } from "react-router-dom";
import { IconCar, IconCardBuy, IconPrecios, IconProduct } from "../../components/Icons";
import './reportes.css'
const Reportes = () => {
  return (

    <div className=" p-5 pt-6">
      <Outlet />



    </div>



  );
}

export default Reportes;



{/* <div className="w-11/12 mt-7 ">
      <p className="text-lg font-medium text-center text-color_green_7">Reportes</p>

      <div className="flex flex-col gap-y-10 mt-10 ml-2">
        <Link to='/reportes/ventas' className="flex items-center gap-x-5">
          <div className="bg-color_green_3 rounded-lg w-16 h-16 flex justify-center items-center text-color_green_7">
            <span><IconCardBuy stile='w-8 h-8' /></span>
          </div>
          <div className="flex flex-col">

            <span className="text-lg text-color_green_7">VENTAS</span>
            <span className="text-color_green_5">100 ventas en total</span>
          </div>
        </Link>

        <Link to='/reportes/productos' className="flex items-center gap-x-5">
          <div className="bg-color_green_3 rounded-lg w-16 h-16 flex justify-center items-center text-color_green_7">
            <span><IconProduct stile='w-8 h-8' /></span>
          </div>
          <div className="flex flex-col">

            <span className="text-lg text-color_green_7">PRODUCTOS</span>
            <span className="text-color_green_5">Existen 100 productos en tienda</span>
          </div>
        </Link>

        <Link to='/reportes/precios' className="flex items-center gap-x-5">
          <div className="bg-color_green_3 rounded-lg w-16 h-16 flex justify-center items-center text-color_green_7">
            <span><IconPrecios stile='w-8 h-8' /></span>
          </div>
          <div className="flex flex-col">

            <span className="text-lg text-color_green_7">PRECIOS</span>
            <span className="text-color_green_5">10%  aumentado al mes anterior</span>
          </div>
        </Link>
      </div>

    </div> */}