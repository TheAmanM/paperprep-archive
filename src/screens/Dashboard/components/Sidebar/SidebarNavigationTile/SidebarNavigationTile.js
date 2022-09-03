import React from "react";
import "./SidebarNavigationTile.css";

const SidebarNavigationTile = ({
  data,
  active = false,
  onClick = () => {},
}) => {
  return (
    <div
      className={`sidebar-navigation-tile${active ? " active" : ""}`}
      onClick={onClick}
    >
      {data.icon}
      {data.name}
    </div>
  );
};

export default SidebarNavigationTile;
