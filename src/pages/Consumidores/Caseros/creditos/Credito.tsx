import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom'
import { IconBox, IconCard, IconMoney } from '../../../../Components/Icons'

const Credito = () => {
  const params = useParams()
  const location = useLocation()
  const { clienteID, creditoID } = params
  const { pathname } = location

  const currentPath = pathname.split('/')
  const rutas = ['nuevo-abono']
  const filterRutes = rutas.filter((tag) => currentPath.includes(tag) && tag)

  const navstiles = (isActive: any) =>
    `flex items-center gap-x-1 px-3 font-semibold py-1 rounded-lg ${
      isActive ? 'text-color_green_7' : 'text-color_gray_1'
    } `

  return (
    <div className="mx-auto w-full max-w-md ">
      <div className="border-b " />
      {filterRutes.length !== 1 && (
        <div className=" my-7 flex justify-between">
          <NavLink
            to={`/comprador/clientes/${clienteID}/creditos/${creditoID}/detalles`}
            className={({ isActive }) => navstiles(isActive)}
          >
            <IconBox />
            Detalles
          </NavLink>
          <NavLink
            to={`/comprador/clientes/${clienteID}/creditos/${creditoID}/abonos`}
            className={({ isActive }) => navstiles(isActive)}
          >
            <IconBox />
            Abonos
          </NavLink>
          <NavLink
            to={`/comprador/clientes/${clienteID}/creditos/${creditoID}/fotos`}
            className={({ isActive }) => navstiles(isActive)}
          >
            <IconCard />
            Fotos
          </NavLink>
        </div>
      )}

      <div className="">
        <Outlet />
      </div>
      {filterRutes.length !== 1 && (
        <div>
          <NavLink
            to={`/comprador/clientes/${clienteID}/creditos/${creditoID}/nuevo-abono`}
            className=" bg-color_green_9 text-color_green_3 fixed bottom-24 right-10 rounded-full p-3 shadow-lg"
          >
            <IconMoney />
          </NavLink>
        </div>
      )}
    </div>
  )
}

export default Credito
