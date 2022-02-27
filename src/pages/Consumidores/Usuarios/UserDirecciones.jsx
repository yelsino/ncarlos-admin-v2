import { Link } from "react-router-dom";
import { IconLink } from "../../../components/Icons";

const UsuarioDirecciones = () => {
  return (
    <div className="w-full">
      <h2 className="text-color_green_7 text-center text-xl mb-5">Direcciones</h2>

      <div className="direcciones overflow-y-auto flex flex-col gap-y-5">
        {
          direcciones.map(d => (
            <Link to={`/comprador/usuarios/3/direcciones/${d.id}`} key={d.id} >
              <p className="flex justify-between text-color_green_6">{d.nombre}<div className="flex items-center gap-x-3"><span>{d.provincia}</span><span className="text-color_green_7"><IconLink /></span></div></p>
            </Link>
          ))
        }

      </div>
    </div>
  );
}

export default UsuarioDirecciones;

const direcciones = [
  { id: '1', nombre: 'Jr augusto B. leguia 256', provincia: 'satipo' },
  { id: '2', nombre: 'Jr augusto B. leguia 256', provincia: 'satipo' },
  { id: '3', nombre: 'Jr augusto B. leguia 256', provincia: 'satipo' },
  { id: '4', nombre: 'Jr augusto B. leguia 256', provincia: 'satipo' },
  { id: '5', nombre: 'Jr augusto B. leguia 256', provincia: 'satipo' },
  { id: '6', nombre: 'Jr augusto B. leguia 256', provincia: 'satipo' },
  { id: '7', nombre: 'Jr augusto B. leguia 256', provincia: 'satipo' },
  { id: '8', nombre: 'Jr augusto B. leguia 256', provincia: 'satipo' },
  { id: '9', nombre: 'Jr augusto B. leguia 256', provincia: 'satipo' },
  { id: '10', nombre: 'Jr augusto B. leguia 256', provincia: 'satipo' },
  { id: '11', nombre: 'Jr augusto B. leguia 256', provincia: 'satipo' },
  { id: '12', nombre: 'Jr augusto B. leguia 256', provincia: 'satipo' },
  { id: '13', nombre: 'Jr augusto B. leguia 256', provincia: 'satipo' },
  { id: '14', nombre: 'Jr augusto B. leguia 256', provincia: 'satipo' },
  { id: '15', nombre: 'Jr augusto B. leguia 256', provincia: 'satipo' },
  { id: '16', nombre: 'Jr augusto B. leguia 256', provincia: 'satipo' },
  { id: '17', nombre: 'Jr augusto B. leguia 256', provincia: 'satipo' },
  { id: '18', nombre: 'Jr augusto B. leguia 256', provincia: 'satipo' },
]