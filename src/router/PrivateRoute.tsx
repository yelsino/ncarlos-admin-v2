// @ts-nocheck
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = ({
  isAutenticated
}:any) => {
  return (
    <>
      {
        !isAutenticated
          ? <Outlet />
          : <Navigate to="/" />
      }
    </>

  )
}

export default PrivateRoute
