import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import LoadWrapper from "./components/LoadWrapper/LoadWrapper";
import ProgressIndicator from "./components/ProgressIndicator/ProgressIndicator";
import Login from "./screens/Authenticate/Login";
import Dashboard from "./screens/Dashboard/Dashboard";
import Home from "./screens/Home/Home";
import { useAuth } from "./services/firebase";

function App() {
  const auth = useAuth();

  function PrivateRoute(element, path, exact) {
    return (
      <Route
        path={path}
        exact={exact ?? false}
        element={auth.user ? element : <Navigate to="/auth" />}
      />
    );
  }

  return (
    <>
      {/* <div
        style={{
          position: "fixed",
          zIndex: 9,
          width: "100%",
          height: "6px",
          backgroundColor: "white",
        }}
      /> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<div>Hi</div>}></Route>
          <Route
            exact
            path="/auth"
            element={auth.user ? <Navigate to="/dashboard" /> : <Login />}
          ></Route>
          {/* <Route
          exact
          path="/dashboard"
          element={auth.user ? <Dashboard /> : <Navigate to="/auth" />}
        ></Route> */}
          {PrivateRoute(<Dashboard />, "/dashboard", true)}
        </Routes>
      </Router>
    </>
    // {auth.user == null ? <p>No user</p> : auth.user}
  );
}

export default App;
