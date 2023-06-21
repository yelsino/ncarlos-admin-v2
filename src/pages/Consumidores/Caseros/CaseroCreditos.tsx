import { UserContext } from 'context/user/userContext'
import { useContext } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import { IconCard, IconLink } from '../../../Components/Icons'

const ClienteCreditos = () => {
  const params = useParams()
  const { clienteID, creditoID } = params

  // cambiar claims a creditos
  const { claims } = useContext(UserContext)

  return (
    <>
      {creditoID ? (
        <Outlet />
      ) : (
        <div className="compras_creditos mx-auto w-full max-w-md overflow-y-auto">
          <div className="text-color_green_5 flex justify-between">
            <div className="flex  w-full justify-center gap-x-7">
              <span>Deuda</span>
              <span className="text-color_green_7 font-medium">575.50</span>
              <span> Soles</span>
            </div>
          </div>
          {/* divider */}
          <div className="border-color_green_4 my-5 w-full border-b"></div>

          <div className=" text-color_green_6 flex flex-col gap-y-5 ">
            {claims.map((v: any) => (
              <Link
                key={v._id}
                to={`/comprador/clientes/${clienteID}/creditos/${v._id}/detalles`}
                className="hover:text-color_green_7 flex w-full justify-between text-gray-500"
              >
                <div className="w-8/12">Lunes 18 de nov. 2021</div>
                <div className="flex w-4/12 items-center justify-end gap-x-3 ">
                  <span>{v.amount} soles</span>
                  <span className="text-color_green_7">
                    <IconLink />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <Link
            to={`/comprador/clientes/${clienteID}/nuevo-credito`}
            className=" bg-color_green_9 text-color_green_3 fixed bottom-24 right-10 rounded-full p-3 shadow-lg"
          >
            <IconCard stile="w-6 h-6" />
          </Link>
        </div>
      )}
    </>
  )
}

export default ClienteCreditos
