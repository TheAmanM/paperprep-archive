import React from "react";
import { Route } from "react-router-dom";
import Login from "./screens/Authenticate/Login";
import { useAuth } from "./services/firebase";

const PrivateRoute = (props) => {
  const auth = useAuth;
  return <Route element={auth.user ? props.element : <Login />} {...props} />;
};

export default PrivateRoute;
