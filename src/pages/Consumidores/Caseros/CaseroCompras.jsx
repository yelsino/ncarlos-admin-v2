import { useContext } from 'react';
import { Link, Outlet, useParams } from "react-router-dom";
import { IconLink } from "../../../Components/Icons";
import { UserContext } from "../../../context/user/UserContext";

const ClienteCompras = () => {

  const params = useParams()
  const { clienteID, compraID } = params

  const { users:{casero:{user,credits},getdata},getDetailCasero } = useContext(UserContext);

  return (
    <>
      {
        compraID ? <Outlet />
          : <div className="compras_casero overflow-y-auto w-full  max-w-md mx-auto  ">
            <div className="flex  text-color_green_5 justify-center gap-x-10">
              <div className="flex flex-col items-center">
                <span>Inversión </span>
                <span className="text-color_green_7">S/. 4500</span>
              </div>
              <div className="flex flex-col items-center">
                <span>Deuda </span>
                <span className="text-color_green_7">S/. 200</span>
              </div>
              <div className="flex flex-col items-center">
                <span>Compras</span>
                <span className="text-color_green_7">100</span>
              </div>
            </div>
            <div className="border-b border-color_green_4 w-full my-5"></div>
            {/* cliente_item_compras */}
            <div className=" text-color_green_6 flex flex-col gap-y-5 overflow-y-auto  ">
              {credits.map((v) => (
                <Link key={v._id} to={`/comprador/clientes/${clienteID}/compras/${v.id}/detalles`} className="flex justify-between w-full text-gray-500 hover:text-color_green_7">
                  <div className="w-3/12">{v.amount} soles</div>
                  <div className="w-5/12 text-center"> 12/05/2021</div>

                  <div className="w-3/12 text-right flex gap-x-3 items-center justify-end">
                    <span>credito</span> <span className="text-color_green_7"><IconLink /></span>
                  </div>
                </Link>
              ))}
              {
                credits.lenght === 0 && <p>NO HAY DATOS</p>
              }

            </div>
          </div>

      }



    </>

  );
}

export default ClienteCompras;

const compras = [
  { id: 1 }, { id: 2 }, { id: 3 },
  { id: 4 }, { id: 5 }, { id: 6 },
  { id: 7 }, { id: 8 }, { id: 9 },
  { id: 10 }, { id: 11 }, { id: 12 },
]