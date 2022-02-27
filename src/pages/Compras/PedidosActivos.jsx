import { Link } from "react-router-dom";
import { IconLink } from "../../Components/Icons";


const PedidosActivos = () => {



  return (
    <div className="relative">

      <div className="absolute bottom-32 right-0 z-20 rounded-full bg-black text-white w-12 h-12 flex justify-center items-center shadow-lg text-sm font-bold font-poppins cursor-pointer">
        ADD
      </div>

      <div className="flex font-bold text-color_gray_1 mb-5 font-poppins sm:text-lg sm:px-5">
        <span className="w-8/12 sm:w-5/12 truncate ">Lista</span>
        <div className="w-4/12 sm:w-7/12 flex">
          <span className="w-full text-center hidden md:block truncate">Productos</span>
          <span className="w-full truncate text-right hidden sm:block">Monto</span>
          <span className="w-full sm:mx-2 truncate  text-center">Orden</span>
        </div>
      </div>

      <div className="pedidos-activos overflow-y-auto flex flex-col gap-y-5  sm:px-5">
        {listas.map(l => (
          <Link
            key={l.id} to={`/ventas/pedidos/${l.id}/detalles`}
            className="text-gray-500 hover:text-color_green_7 text-base sm:text-lg w-full relative flex items-center py-1 "
          >
            <div className="w-full flex ">
              <span className="w-8/12 sm:w-5/12 truncate">{l.nombre}</span>
              <div className="w-4/12 sm:w-7/12 flex">
                <span className="w-full text-center hidden md:block">{15}</span>
                <span className="w-full text-right hidden sm:block">S/.{59.9}</span>
                <span className="w-full  text-center">#0{l.codigo}</span>

              </div>
            </div>
            <span className="text-color_green_7 absolute right-0 md:-right-3 "><IconLink /></span>
          </Link>
        ))}

      </div>
    </div>
  );
}

export default PedidosActivos;

const listas = [
  { id: '1', nombre: 'Lista primaveral dietetico', codigo: 10 },
  { id: '2', nombre: 'Lista primaveral dietetico', codigo: 10 },
  { id: '3', nombre: 'Lista primaveral dietetico', codigo: 10 },
  { id: '4', nombre: 'Lista primaveral dietetico', codigo: 10 },
  { id: '5', nombre: 'Lista primaveral dietetico', codigo: 10 },
  { id: '6', nombre: 'Lista primaveral dietetico', codigo: 10 },
  { id: '7', nombre: 'Lista primaveral dietetico', codigo: 10 },
  { id: '8', nombre: 'Lista primaveral dietetico', codigo: 10 },
  { id: '9', nombre: 'Lista primaveral dietetico', codigo: 10 },
  { id: '10', nombre: 'Lista primaveral dietetico', codigo: 10 },
  { id: '11', nombre: 'Lista primaveral dietetico', codigo: 10 },
  { id: '12', nombre: 'Lista primaveral dietetico', codigo: 10 },
  { id: '13', nombre: 'Lista primaveral dietetico', codigo: 10 },
  { id: '14', nombre: 'Lista primaveral dietetico', codigo: 10 },
  { id: '15', nombre: 'Lista primaveral dietetico', codigo: 10 },
  { id: '16', nombre: 'Lista primaveral dietetico', codigo: 10 },
  { id: '17', nombre: 'Lista primaveral dietetico', codigo: 10 },
  { id: '18', nombre: 'Lista primaveral dietetico', codigo: 10 },
]