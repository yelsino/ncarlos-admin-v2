import { Navigate, Outlet, useLocation, } from "react-router-dom"
import SidebarMovil from "../Components/Organismos/Sidebar/SidebarMovil";
import Navbar from "../Components/Plantillas/Navbar";
import SidebarWeb from "../Components/Plantillas/SidebarWeb";
import moment from "moment";
import 'moment/locale/es';
moment.locale('es');

const Admin = ({ isAutenticated }) => {
  const location = useLocation()

  const { pathname } = location;

  const currentPath = pathname.split('/');
  const rutas = ['nuevo-credito', 'search', 'nuevo-abono', 'nuevo-producto'];

  var filterRutes = rutas.filter((tag) => (currentPath.includes(tag) && tag));

  // bg-color_green_1 h-full flex  items-center flex-col md:flex-row relative
  return (
    <>
      {
        isAutenticated
          ? <div className=" flex  max-w-6xl mx-auto bg-color_green_1 flex-col px-3 sm:px-5 md:px-10  pt-2">

            <Navbar />
            <div className="flex">
              {
                filterRutes.length !== 1 &&
                <SidebarMovil />
              }
              {/* { */}
              {/* // filterRutes.length !== 1 && */}
              <SidebarWeb />
              {/* // } */}

              <div className="md:px-5 w-full ">

                <Outlet />
              </div>
            </div>


          </div>
          : <Navigate to="/auth/login" />
      }



    </>
  );
}

export default Admin;



