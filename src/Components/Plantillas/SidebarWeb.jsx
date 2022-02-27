import { useLocation } from "react-router-dom";
import Actividades from "../Organismos/Sidebar/Actividades";
import Colegas from "../Organismos/Sidebar/Colegas";
import Menu from "../Organismos/Sidebar/Menu";
import MenuReportes from "../Organismos/Sidebar/MenuReportes";
import './plantillas.css'

const SidebarWeb = () => {

  const location = useLocation();

  const currentPath = location.pathname.split('/');


  return (
    <div className=" w-60 md:w-64 hidden sm:block sidebar-web minw">

      {
        currentPath[1] === 'reportes' ?
          <MenuReportes />
          :
          <Menu />
      }
      <Colegas />
      <Actividades />
    </div>
  );
}

export default SidebarWeb;