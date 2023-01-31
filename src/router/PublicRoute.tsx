// @ts-nocheck
import { Navigate, Outlet } from 'react-router-dom'

const PublicRoute = ({
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

export default PublicRoute
