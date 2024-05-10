import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({children}) => {
  const { user,loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location.pathname);
  if (loading) {
    return (
      <div className="w-16 h-16 mx-auto mt-30 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    );
  }
  if (user) {
    return children;
  }
  return  <Navigate  to="/login" state={location.pathname}></Navigate>;
};

export default PrivateRoutes;
