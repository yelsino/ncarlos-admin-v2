import { Link } from "react-router-dom";
import { IconLink } from "../../../Components/Icons";

const UsuarioReclamos = () => {
  return (
    <div className="w-full">
      <h2 className="text-color_green_7 text-center text-xl mb-5">Reclamos</h2>

      <div className="flex flex-col gap-y-5 reclamos overflow-y-auto">
        {
          reclamos.map(r => (
            <Link key={r.id} to={`/comprador/usuarios/3/reclamos/${r.id}`}>
              <p className="flex justify-between text-gray-500 hover:text-color_green_7">{r.descripcion}<div className="flex items-center gap-x-3"><span>{r.fecha}</span><span className="text-color_green_7"><IconLink /></span></div></p>
            </Link>
          ))
        }

      </div>
    </div>
  );
}

export default UsuarioReclamos;

const reclamos = [
  { id: '1', fecha: '12/05/22', descripcion: 'Producto malogrado' },
  { id: '2', fecha: '12/05/22', descripcion: 'Producto malogrado' },
  { id: '3', fecha: '12/05/22', descripcion: 'Producto malogrado' },
  { id: '4', fecha: '12/05/22', descripcion: 'Producto malogrado' },
  { id: '5', fecha: '12/05/22', descripcion: 'Producto malogrado' },
  { id: '6', fecha: '12/05/22', descripcion: 'Producto malogrado' },
  { id: '7', fecha: '12/05/22', descripcion: 'Producto malogrado' },
  { id: '8', fecha: '12/05/22', descripcion: 'Producto malogrado' },
  { id: '9', fecha: '12/05/22', descripcion: 'Producto malogrado' },
  { id: '10', fecha: '12/05/22', descripcion: 'Producto malogrado' },
  { id: '11', fecha: '12/05/22', descripcion: 'Producto malogrado' },
  { id: '12', fecha: '12/05/22', descripcion: 'Producto malogrado' },
  { id: '13', fecha: '12/05/22', descripcion: 'Producto malogrado' },
  { id: '14', fecha: '12/05/22', descripcion: 'Producto malogrado' },
  { id: '15', fecha: '12/05/22', descripcion: 'Producto malogrado' },
  { id: '16', fecha: '12/05/22', descripcion: 'Producto malogrado' },
  { id: '17', fecha: '12/05/22', descripcion: 'Producto malogrado' },
  { id: '18', fecha: '12/05/22', descripcion: 'Producto malogrado' },
]