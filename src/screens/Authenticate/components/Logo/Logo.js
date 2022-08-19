import React from "react";
import "./Logo.css";

const Logo = (props) => {
  return (
    <h1 className="logo" style={{ ...props.style }}>
      Paper Prep
    </h1>
  );
};

export default Logo;
