import { Link, useParams } from "react-router-dom";
import { IconLink } from "../../../components/Icons";

const UsuarioCompras = () => {

  const params = useParams();
  const { userID } = params;

  return (
    <div className="w-full ">
      <h2 className="text-color_green_7 text-center text-xl mb-5 sm:hidden">Compras</h2>

      <div className=" flex  font-poppins font-semibold mb-5 pr-5 ">
        <span className="w-6/12  truncate">Fecha de compra</span>
        <div className="w-6/12   flex gap-x-3">
          <span className=" w-full   truncate">Valor Compra</span>
          <span className="w-full   truncate text-center">N° orden</span>
        </div>
      </div>

      <div className="flex flex-col gap-y-5 pr-5">
        {
          users.map(user => (
            <Link key={user.id} to={`/comprador/usuarios/${userID}/compras/${user.id}/detalle`} className="flex  text-color_green_6 relative">

              <span className="w-6/12 truncate">Lunes 25 de noviembre 2022</span>
              <div className="w-6/12   flex gap-x-3">
                <span className="w-full text-center">S/. 155.0</span>
                <span className="w-full text-center ">#005</span>

              </div>
              <span className="text-color_green_7 absolute -right-5"><IconLink /></span>

            </Link>
          ))
        }
      </div>
    </div>
  );
}

export default UsuarioCompras;


const users = [
  {
    id: 1,
    name: "Lunes 25 de noviembre 2022",
  },
  {
    id: 2,
    name: "Lunes 25 de noviembre 2022",
  },
  {
    id: 3,
    name: "Lunes 25 de noviembre 2022",
  },
  {
    id: 4,
    name: "Lunes 25 de noviembre 2022",
  },
  {
    id: 5,
    name: "Lunes 25 de noviembre 2022",
  },
  {
    id: 6,
    name: "Lunes 25 de noviembre 2022",
  },
]