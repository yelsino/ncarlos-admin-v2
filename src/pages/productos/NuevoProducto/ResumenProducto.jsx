import mandarina from '../../../assets/img/mandarina.png'
import ButtonAction from "../../../Components/utilidades/ButtonAction";

const ResumenProducto = () => {
  return (
    <div className='flex-col flex items-center w-full '>
      <p className="text-color_green_7 font-semibold text-2xl font-poppins text-center">Mandarina wando</p>
      <div className='w-full'>
        <div className='w-28 mx-auto'>
          <img src={mandarina} />
        </div>

        <div className="  text-color_green_6 mt-3 w-full ">
          <p className="flex  px-5 justify-between">
            <span className="  ">Categoria</span>
            <span className="text-color_green_7    ">frutas</span>
          </p>
          <span className="bg-color_green_4 my-3 block w-full border-b border-color_green_4" />

          <p className="flex justify-between  px-5">
            <span className="  ">Cantidad por cajón</span>
            <span className="text-color_green_7  ">10 kilos</span>
          </p>

          <span className="bg-color_green_4 my-3 block w-full border-b border-color_green_4" />


          <p className="flex justify-between  px-5">
            <span className="  ">Precio por cajón</span>
            <span className="text-color_green_7  ">S/. 25.00</span>
          </p>


          <span className="bg-color_green_4 my-3 block w-full border-b border-color_green_4" />


          <p className="flex justify-between  px-5">
            <span className="  ">Precio por kilo</span>
            <span className="text-color_green_7  ">S/. 5.00</span>
          </p>


          <span className="bg-color_green_4 my-3 block w-full border-b border-color_green_4" />

          <p className="flex justify-between  px-5">
            <span className="  ">Total en cajas</span>
            <span className="text-color_green_7  ">10 cajas 5 kilos</span>
          </p>

          <span className="bg-color_green_4 my-3 block w-full border-b border-color_green_4" />


          <p className="flex justify-between  px-5">
            <span className="  ">Total en kilos</span>
            <span className="text-color_green_7  ">105 kilos</span>
          </p>

          <span className="bg-color_green_4 my-3 block w-full border-b border-color_green_4" />

          <p className="flex justify-between  px-5">
            <span className="  ">Alertarme en</span>
            <span className="text-color_green_7">10 kilos</span>
          </p>

        </div>

      </div>
      <div className="my-5 w-full">
        <ButtonAction text=' CREAR ' />
      </div>
    </div>
  );
}

export default ResumenProducto;