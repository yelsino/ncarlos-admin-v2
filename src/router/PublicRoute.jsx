// @ts-nocheck
import { Navigate, Outlet, Route } from "react-router-dom";

const PublicRoute = ({
  isAutenticated,
}) => {
  return (
    <>
      {
        !isAutenticated
          ? <Outlet />
          : <Navigate to="/" />
      }
    </>

  );
}

export default PublicRoute;