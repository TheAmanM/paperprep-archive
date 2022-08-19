import React, { useEffect, useState } from "react";
import "./ProgressIndicator.css";
// import motion

const ProgressIndicator = () => {
  const [beginLoading, setBeginLoading] = useState(false);

  useEffect(() => {
    setBeginLoading(true);
  }, []);

  return (
    <div className={`progress-indicator ${beginLoading && "begin-loading"}`} />
  );
};

export default ProgressIndicator;
