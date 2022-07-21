import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { ContextGlobal } from "../utama";

function PrivateRoute({ children }) {
  const user = useContext(ContextGlobal);
  const auth = user.contextState.isLogin;

  return auth ? children : <Navigate to="/" />;
}

export default PrivateRoute;
