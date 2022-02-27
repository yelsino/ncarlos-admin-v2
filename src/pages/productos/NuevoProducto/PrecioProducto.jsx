import mandarina from '../../../assets/img/mandarina.png';
import ButtonNext from '../../../Components/utilidades/ButtonNext';
import { IconNext } from '../../../Components/Icons';


const PrecioProducto = () => {
  return (
    <>
      <p className="text-color_green_7 font-semibold text-2xl font-poppins text-center">Mandarina wando</p>
      <div className="flex  justify-between my-5 ">
        <div className="flex items-center gap-x-5">
          <div className="bg-color_green_3 rounded-lg w-20 h-20">
            <img alt='img abarrote' src={mandarina} />
          </div>
          <p className="text-lg text-color_green_6">

            Venta por cajones y kilos
          </p>
        </div>
        <div className="flex items-center">
        </div>
      </div>
      <p className="text-color_green_7 font-light text-lg font-poppins text-center mb-5">Configuración de precios</p>
      <div className='flex flex-col items-center w-full '>

        <div className='w-full'>
          <p className='text-color_green_6 text-lg mb-1'>Precio por cajón</p>
          <input
            className='rounded-xl p-4 outline-none   text-base sm:text-lg text-color_green_7  w-full bg-color_green_3 mb-5'
          />
        </div>
        <div className='w-full'>
          <p className='text-color_green_6 text-lg mb-1'>Kilos por cajón</p>
          <input
            className='rounded-xl p-4 outline-none   text-base sm:text-lg text-color_green_7  w-full bg-color_green_3 mb-5'
          />
        </div>
        <div className='w-full mb-5'>
          <p className='text-color_green_6 text-lg mb-1'>Precio por kilo</p>
          <input
            className='rounded-xl p-4 outline-none   text-base sm:text-lg text-color_green_7  w-full bg-color_green_3 mb-5'
          />
        </div>

        <div className='flex justify-center'>
          <ButtonNext text={<IconNext />} />
        </div>

      </div>
    </>
  );
}

export default PrecioProducto;