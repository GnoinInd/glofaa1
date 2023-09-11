import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import Loader from "../compponate/Loader/Loader";

const PrivateRoute = ({ isAdmin, children }) => {
  // const navigate = useNavigate();

  const { loading, user, isAuthenticated } = useSelector(
    (state) => state.user
  );
 

  if (loading || loading ===undefined) {
    return <Loader />;
  }
  if (!isAuthenticated) {
    return < Navigate to="/LoginSinUp" />
  };
 
  if (isAdmin === true && user.role !== "admin") {
    return < Navigate to="/LoginSinUp" />
  };
  return children ? children : <Outlet />;
};



export default PrivateRoute;

