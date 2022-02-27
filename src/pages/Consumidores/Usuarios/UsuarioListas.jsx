import { Link } from "react-router-dom";
import { IconLink } from "../../../Components/Icons";

const UsuarioListas = () => {
  return (
    <div className="w-full ">
      <h2 className="text-color_green_7 text-center text-xl mb-5">Listas</h2>

      <div className="listas overflow-y-auto flex flex-col gap-y-5">
        {listas.map(l => (
          <Link key={l.id} to={`/comprador/usuarios/3/listas/${l.id}`}>
            <p className="flex justify-between text-gray-500 hover:text-color_green_7">{l.nombre}<div className="flex items-center gap-x-3"><span>cantidad {l.cantidad}</span><span className="text-color_green_7"><IconLink /></span></div></p>
          </Link>
        ))}

      </div>
    </div>
  );
}

export default UsuarioListas;

const listas = [
  { id: '1', nombre: 'Lista primaveral dietetico', cantidad: 10 },
  { id: '2', nombre: 'Lista primaveral dietetico', cantidad: 10 },
  { id: '3', nombre: 'Lista primaveral dietetico', cantidad: 10 },
  { id: '4', nombre: 'Lista primaveral dietetico', cantidad: 10 },
  { id: '5', nombre: 'Lista primaveral dietetico', cantidad: 10 },
  { id: '6', nombre: 'Lista primaveral dietetico', cantidad: 10 },
  { id: '7', nombre: 'Lista primaveral dietetico', cantidad: 10 },
  { id: '8', nombre: 'Lista primaveral dietetico', cantidad: 10 },
  { id: '9', nombre: 'Lista primaveral dietetico', cantidad: 10 },
  { id: '10', nombre: 'Lista primaveral dietetico', cantidad: 10 },
  { id: '11', nombre: 'Lista primaveral dietetico', cantidad: 10 },
  { id: '12', nombre: 'Lista primaveral dietetico', cantidad: 10 },
  { id: '13', nombre: 'Lista primaveral dietetico', cantidad: 10 },
  { id: '14', nombre: 'Lista primaveral dietetico', cantidad: 10 },
  { id: '15', nombre: 'Lista primaveral dietetico', cantidad: 10 },
  { id: '16', nombre: 'Lista primaveral dietetico', cantidad: 10 },
  { id: '17', nombre: 'Lista primaveral dietetico', cantidad: 10 },
  { id: '18', nombre: 'Lista primaveral dietetico', cantidad: 10 },
]