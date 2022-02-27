// @ts-nocheck
import { Navigate, Outlet, Route } from "react-router-dom";

const PrivateRoute = ({
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

export default PrivateRoute;