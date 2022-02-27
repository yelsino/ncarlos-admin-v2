import mandarina from '../../../assets/img/mandarina.png'
import { IconNext } from '../../../Components/Icons';
import ButtonNext from '../../../Components/utilidades/ButtonNext';

const DatosBasicosProducto = () => {
  return (
    <div className='flex-col flex items-center'>
      <p className="text-color_green_7 font-semibold text-2xl font-poppins text-center">Mandarina wando</p>
      <div>
        <div>
          <img src={mandarina} />
        </div>
        <p className="text-color_green_7 font-light text-lg font-poppins text-center">¿Categoria del producto?</p>
        <div className='grid grid-cols-2 gap-5 mt-5'>
          <div className='flex items-center gap-x-2 '>
            <span className='block border rounded-full w-4 h-4 border-color_green_6' />
            <label className='text-color_green_6'>Frutas</label>
          </div>
          <div className='flex items-center gap-x-2 '>
            <span className='block border rounded-full w-4 h-4 border-color_green_6' />
            <label className='text-color_green_6'>Vegetales</label>
          </div>
          <div className='flex items-center gap-x-2 '>
            <span className='block border rounded-full w-4 h-4 border-color_green_6' />
            <label className='text-color_green_6'>Menestras</label>
          </div>
        </div>

        <p className="text-color_green_7 font-light text-lg font-poppins text-center pt-5">¿Forma de venta en minoreo?</p>
        <div className='grid grid-cols-2 gap-5 mt-5'>
          <div className='flex items-center gap-x-2 '>
            <span className='block border rounded-full w-4 h-4 border-color_green_6' />
            <label className='text-color_green_6'>Frutas</label>
          </div>
          <div className='flex items-center gap-x-2 '>
            <span className='block border rounded-full w-4 h-4 border-color_green_6' />
            <label className='text-color_green_6'>Vegetales</label>
          </div>

        </div>

        <p className="text-color_green_7 font-light text-lg font-poppins text-center pt-5">¿Forma de venta en mayoreo?</p>
        <div className='grid grid-cols-2 gap-5 my-5'>
          <div className='flex items-center gap-x-2 '>
            <span className='block border rounded-full w-4 h-4 border-color_green_6' />
            <label className='text-color_green_6'>costales</label>
          </div>
          <div className='flex items-center gap-x-2 '>
            <span className='block border rounded-full w-4 h-4 border-color_green_6' />
            <label className='text-color_green_6'>bolsas</label>
          </div>
          <div className='flex items-center gap-x-2 '>
            <span className='block border rounded-full w-4 h-4 border-color_green_6' />
            <label className='text-color_green_6'>cajones</label>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <ButtonNext text={<IconNext />} />
      </div>
    </div>
  );
}

export default DatosBasicosProducto;