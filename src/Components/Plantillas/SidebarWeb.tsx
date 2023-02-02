import Actividades from 'Components/Organismos/Sidebar/Actividades'
import Colegas from 'Components/Organismos/Sidebar/Colegas'
import Menu from 'Components/Organismos/Sidebar/Menu'
import MenuReportes from 'Components/Organismos/Sidebar/MenuReportes'
import { useLocation } from 'react-router-dom'

const SidebarWeb = () => {
  const location = useLocation()

  const currentPath = location.pathname.split('/')

  return (
    <div className=" w-60 md:w-64 hidden sm:block sidebar-web minw">

      {
        currentPath[1] === 'reportes'
          ? <MenuReportes />
          : <Menu />
      }
      <Colegas />
      <Actividades />
    </div>
  )
}

export default SidebarWeb
