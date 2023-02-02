import { IconBox, IconCard } from 'Components/Icons'
import { NavLink, Outlet, useParams } from 'react-router-dom'

const Compra = () => {
  const params = useParams()
  const { clienteID, compraID } = params

  const navstiles = (isActive:any) => (`flex items-center gap-x-1 px-3 font-semibold py-1 rounded-lg ${isActive ? 'text-color_green_7' : 'text-color_gray_1'} `)

  return (
    <div className="flex gap-y-5 flex-col  w-full max-w-md mx-auto ">
      {/* create a divider */}
      <div className="bg-color_green_4  block w-full border-b border-color_green_4" />

      <div className=' flex justify-between '>
        <NavLink to={`/comprador/clientes/${clienteID}/compras/${compraID}/detalles`} className={({ isActive }) => (navstiles(isActive))}>
          <IconBox />
          Detalle
        </NavLink>
        <NavLink to={`/comprador/clientes/${clienteID}/compras/${compraID}/abonos`} className={({ isActive }) => (navstiles(isActive))}>
          <IconBox />
          Abonos
        </NavLink>
        <NavLink to={`/comprador/clientes/${clienteID}/compras/${compraID}/fotos`} className={({ isActive }) => (navstiles(isActive))}>
          <IconCard />
          Fotos
        </NavLink>
      </div>

      <Outlet />
    </div >
  )
}

export default Compra
