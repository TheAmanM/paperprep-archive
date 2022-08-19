import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./ProgressIndicator.css";
// import motion

const ProgressIndicator = () => {
  const [loadKey, setLoadKey] = useState(0);
  // const history = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // history.listen((location, action) => {
    setLoadKey((key) => {
      return key + 1;
    });
    console.log("Location:", location.pathname);
    // });
  }, [location]);

  return (
    <div
      className={`progress-indicator`}
      key={loadKey}
      style={{
        backgroundColor: location.pathname === "/auth" ? "white" : "default",
      }}
    />
  );
};

export default ProgressIndicator;
