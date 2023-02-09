import { IconBox, IconCard, IconUser } from 'Components/Icons'
import { OrderContext } from 'context/orders/OrderContext'
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom'
import { useContext } from 'react'

const PedidoActivo = () => {
  const params = useParams()
  const { pedidoactivoID } = params

  const { orden } = useContext(OrderContext)

  const navstiles = (isActive: any) =>
    `flex items-center gap-x-1 p-3 rounded-lg ${
      isActive ? 'bg-color_green_3' : ''
    } `

  return (
    <div className="mx-auto w-full  max-w-lg overflow-auto">
      <div className="text-color_green_7 mb-6 flex  justify-between">
        <NavLink
          state={{ order: orden }}
          to={`/ventas/pedidos/${pedidoactivoID}/detalles`}
          className={({ isActive }) => navstiles(isActive)}
        >
          <IconBox />
          Detalles
        </NavLink>
        <NavLink
          state={{ order: orden }}
          to={`/ventas/pedidos/${pedidoactivoID}/productos`}
          className={({ isActive }) => navstiles(isActive)}
        >
          <IconCard />
          Productos
        </NavLink>
        <NavLink
          state={{ order: orden }}
          to={`/ventas/pedidos/${pedidoactivoID}/tracking`}
          className={({ isActive }) => navstiles(isActive)}
        >
          <IconUser />
          Tracking
        </NavLink>
      </div>

      <Outlet />
    </div>
  )
}

export default PedidoActivo
