import IMG from '../../../assets/img/nuevo_producto2.png'
import { IconNext } from '../../../Components/Icons';
import ButtonNext from '../../../Components/utilidades/ButtonNext';

const NombreProducto = () => {
  return (
    <>
      <p className="text-color_green_7 font-semibold text-2xl font-poppins text-center">Nuevo producto</p>
      <div className='flex flex-col items-center w-full '>
        <div className='my-10'>
          <img src={IMG} />
        </div>
        <p className='text-color_green_6 text-lg mb-5'>Nombre de producto</p>
        <input
          className='rounded-xl p-4 outline-none   text-base sm:text-lg text-color_green_7  w-11/12 bg-color_green_3 mb-10'
        />
      </div>

      <div className='flex justify-center'>
        <ButtonNext text={<IconNext />} />
      </div>
    </>
  );
}

export default NombreProducto;