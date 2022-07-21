import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const auth = true;
  return auth.isLogin ? children : <Navigate to="/" />;
}

export default PrivateRoute;
