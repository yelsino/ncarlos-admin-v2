import { Link } from "react-router-dom";
import { IconLink } from "../../Components/Icons";

const ReclamosActivos = () => {
  return (
    <div>

      <div className="flex font-bold text-color_gray_1 mb-5 font-poppins sm:text-lg sm:px-5">
        <span className=" w-9/12 truncate md:w-7/12">Asunto</span>
        <div className="flex  w-3/12 md:w-5/12">
          <span className="w-full hidden md:flex justify-center ">Fecha</span>
          <span className="w-full   text-center">Orden</span>
        </div>
      </div>

      <div className="pedidos-activos overflow-y-auto flex flex-col gap-y-5  sm:px-5">
        {listas.map(l => (
          <Link
            key={l.id} to={`/comprador/usuarios/3/reclamos/8`}
            className=" text-gray-500 hover:text-color_green_7 text-base sm:text-lg w-full relative flex items-center py-1 "
          >
            <div className="w-full flex ">
              <span className=" w-9/12 truncate md:w-7/12">{l.nombre}</span>
              <div className=" flex  w-3/12 md:w-5/12">

                <span className="w-full hidden md:flex justify-center  truncate">12/05/21 5pm</span>
                <span className="w-full   text-center">#010</span>

              </div>
            </div>
            <span className="text-color_green_7 absolute right-0 md:-right-3 "><IconLink /></span>
          </Link>
        ))}

      </div>


    </div>
  );
}

export default ReclamosActivos;

const listas = [
  { id: '1', nombre: 'Productos malogrados en mal estado', codigo: 10 },
  { id: '2', nombre: 'Productos malogrados en mal estado', codigo: 10 },
  { id: '3', nombre: 'Productos malogrados en mal estado', codigo: 10 },
  { id: '4', nombre: 'Productos malogrados en mal estado', codigo: 10 },
  { id: '5', nombre: 'Productos malogrados en mal estado', codigo: 10 },
  { id: '6', nombre: 'Productos malogrados en mal estado', codigo: 10 },
  { id: '7', nombre: 'Productos malogrados en mal estado', codigo: 10 },
  { id: '8', nombre: 'Productos malogrados en mal estado', codigo: 10 },
  { id: '9', nombre: 'Productos malogrados en mal estado', codigo: 10 },
  { id: '10', nombre: 'Productos malogrados en mal estado', codigo: 10 },
  { id: '11', nombre: 'Productos malogrados en mal estado', codigo: 10 },
  { id: '12', nombre: 'Productos malogrados en mal estado', codigo: 10 },
  { id: '13', nombre: 'Productos malogrados en mal estado', codigo: 10 },
  { id: '14', nombre: 'Productos malogrados en mal estado', codigo: 10 },
  { id: '15', nombre: 'Productos malogrados en mal estado', codigo: 10 },
  { id: '16', nombre: 'Productos malogrados en mal estado', codigo: 10 },
  { id: '17', nombre: 'Productos malogrados en mal estado', codigo: 10 },
  { id: '18', nombre: 'Productos malogrados en mal estado', codigo: 10 },
]