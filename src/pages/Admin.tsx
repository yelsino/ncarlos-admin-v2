import { Navigate, Outlet, useLocation } from 'react-router-dom'
import moment from 'moment'
import 'moment/locale/es'
import Navbar from 'Components/Plantillas/Navbar'
import SidebarMovil from 'Components/Organismos/Sidebar/SidebarMovil'
import SidebarWeb from 'Components/Plantillas/SidebarWeb'
moment.locale('es')

const Admin = ({ isAutenticated }: any) => {
  const location = useLocation()

  const { pathname } = location

  const currentPath = pathname.split('/')
  const rutas = ['nuevo-credito', 'search', 'nuevo-abono', 'nuevo-producto']

  const filterRutes = rutas.filter((tag) => currentPath.includes(tag) && tag)

  // bg-color_green_1 h-full flex  items-center flex-col md:flex-row relative
  return (
    <>
      {isAutenticated ? (
        <div className=" bg-color_green_1  mx-auto flex max-w-6xl flex-col px-3 pt-2 sm:px-5  md:px-10">
          <Navbar />
          <div className="flex">
            {filterRutes.length !== 1 && <SidebarMovil />}
            {/* { */}
            {/* // filterRutes.length !== 1 && */}
            <SidebarWeb />
            {/* // } */}

            <div className="w-full md:px-5 ">
              <Outlet />
            </div>
          </div>
        </div>
      ) : (
        <Navigate to="/auth/login" />
      )}
    </>
  )
}

export default Admin
