import { IconBox, IconCard, IconUser } from 'Components/Icons'
import { NavLink, Outlet, useParams } from 'react-router-dom'

const CompraUsuario = () => {
  const params = useParams()
  const { userID, compraID } = params

  const navstiles = (isActive: any) =>
    `flex items-center gap-x-1 p-3 rounded-lg ${
      isActive ? 'bg-color_green_3' : ''
    } `

  return (
    <div className=" usuario_compra w-full overflow-y-auto">
      <p className="text-color_green_7 text-center font-medium">
        compra {compraID}
      </p>
      <div className="text-color_green_7 my-5 flex justify-between">
        <NavLink
          to={`/comprador/usuarios/${userID}/compras/${compraID}/detalle`}
          className={({ isActive }) => navstiles(isActive)}
        >
          <IconBox />
          Detalle
        </NavLink>
        <NavLink
          to={`/comprador/usuarios/${userID}/compras/${compraID}/productos`}
          className={({ isActive }) => navstiles(isActive)}
        >
          <IconCard />
          Productos
        </NavLink>
        <NavLink
          to={`/comprador/usuarios/${userID}/compras/${compraID}/reclamos`}
          className={({ isActive }) => navstiles(isActive)}
        >
          <IconUser />
          Reclamos
        </NavLink>
      </div>

      <Outlet />
    </div>
  )
}

export default CompraUsuario
