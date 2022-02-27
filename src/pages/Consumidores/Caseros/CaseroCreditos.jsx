import { Link, Outlet, useParams } from "react-router-dom";
import { IconCard, IconLink } from "../../../Components/Icons";

const ClienteCreditos = () => {
  const params = useParams()
  const { clienteID, creditoID } = params
  return (
    <>
      {
        creditoID ? <Outlet />
          :
          <div className="w-full mx-auto max-w-md compras_creditos overflow-y-auto">
            <div className="flex justify-between text-color_green_5">
              <div className="flex  gap-x-7 w-full justify-center">
                <span>Deuda</span>
                <span className="text-color_green_7 font-medium">575.50</span>
                <span> Soles</span>
              </div>

            </div>
            {/* divider */}
            <div className="border-b border-color_green_4 w-full my-5"></div>

            <div className=" text-color_green_6 flex flex-col gap-y-5 ">
              {creditos.map(credito => (
                <Link key={credito.id} to={`/comprador/clientes/${clienteID}/creditos/${credito.id}/detalles`} className="flex justify-between w-full text-gray-500 hover:text-color_green_7">
                  <div className="w-8/12">Lunes 18 de nov. 2021</div>
                  <div className="w-4/12 flex items-center gap-x-3 justify-end ">
                    <span>125 soles</span>
                    <span className="text-color_green_7"><IconLink /></span>
                  </div>

                </Link>
              ))}

            </div>
            <Link to={`/comprador/clientes/${clienteID}/nuevo-credito`} className=" fixed bottom-24 right-10 bg-color_green_9 p-3 shadow-lg rounded-full text-color_green_3">
              <IconCard stile='w-6 h-6' />
            </Link>


          </div>
      }
    </>

  );
}

export default ClienteCreditos;


const creditos = [
  { id: 1 }, { id: 2 }, { id: 3 },
  { id: 4 }, { id: 5 }, { id: 6 },
  { id: 7 }, { id: 8 }, { id: 9 },
  { id: 10 }, { id: 11 }, { id: 12 },
]