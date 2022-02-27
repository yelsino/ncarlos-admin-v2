

import { Outlet } from 'react-router-dom';
import { IconNext } from '../../Components/Icons';
import ButtonNext from '../../Components/utilidades/ButtonNext';
import PuntosNext from '../../Components/utilidades/PuntosNext';

const NuevoProducto = () => {
  return (
    <div className="pt-10  max-w-sm mx-auto overflow-y-auto nuevo_producto">
      <Outlet />

      <div className='mt-3'>
        <PuntosNext puntos={rutas} />
      </div>
    </div>
  );
}

export default NuevoProducto;


const rutas = [
  { id: 1, link: '/productos/nuevo-producto/nombre' },
  { id: 2, link: '/productos/nuevo-producto/datos-basicos' },
  { id: 3, link: '/productos/nuevo-producto/precios' },
  { id: 3, link: '/productos/nuevo-producto/stock' },
  { id: 4, link: '/productos/nuevo-producto/resumen' },
]