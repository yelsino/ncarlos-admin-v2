import mandarina from '../../../assets/img/mandarina.png'
import { IconNext } from '../../../Components/Icons';
import ButtonNext from '../../../Components/utilidades/ButtonNext';


const StockProducto = () => {
  return (
    <div className='flex-col flex items-center w-full '>
      <p className="text-color_green_7 font-semibold text-2xl font-poppins text-center">Mandarina wando</p>
      <div className='w-full'>
        <div className='w-36 mx-auto'>
          <img src={mandarina} />
        </div>

        <div className="  text-color_green_6 mt-3 w-full ">
          <p className="flex  px-5 justify-between">
            <span className="  ">Cantidad por cajon</span>
            <span className="text-color_green_7    ">14</span>
          </p>
          <span className="bg-color_green_4 my-3 block w-full border border-color_green_4" />

          <p className="flex justify-between  px-5">
            <span className="  ">Precio por cajon</span>
            <span className="text-color_green_7  ">S/. 125.00</span>
          </p>
          <span className="bg-color_green_4 my-3 block w-full border border-color_green_4" />

          <p className="flex justify-between  px-5">
            <span className="  ">Precio por kilo</span>
            <span className="text-color_green_7  ">entregado</span>
          </p>
        </div>


        <p className="text-color_green_7 font-light text-lg font-poppins text-center my-5">Configuración de precios</p>
        <div className='flex flex-col items-center w-full '>

          <div className='w-full'>
            <p className='text-color_green_6 mb-1'>¿Cuantas cajas tienes?</p>
            <input
              className='rounded-xl p-4 outline-none   text-base  text-color_green_7  w-full bg-color_green_3 mb-5'
            />
          </div>
          <div className='w-full'>
            <p className='text-color_green_6 mb-1'>¿Cuantos kilos sobran?</p>
            <input
              className='rounded-xl p-4 outline-none   text-base  text-color_green_7  w-full bg-color_green_3 mb-5'
            />
          </div>
          <div className='w-full mb-5'>
            <p className='text-color_green_6 mb-1'>¿Cantidad minima para alertarte?</p>
            <input
              className='rounded-xl p-4 outline-none   text-base  text-color_green_7  w-full bg-color_green_3 mb-5'
            />
          </div>



        </div>


      </div>
      <div className='flex justify-center'>
        <ButtonNext text={<IconNext />} />
      </div>
    </div>
  );
}

export default StockProducto;