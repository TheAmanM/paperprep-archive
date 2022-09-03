import React from "react";
import "./NavigationTile.css";

const NavigationTile = ({
  name,
  fontSize = "15px",
  index,
  selected = false,
  navigationOpened,
  onSelect,
  icon,
}) => {
  return (
    <div
      className={`navigation-tile ${selected ? "selected" : ""} ${
        navigationOpened ? "" : "closed"
      }`.trim()}
      onClick={() => {
        onSelect(index);
      }}
      style={{ fontSize: fontSize }}
    >
      {icon}
      {name}
    </div>
  );
};

export default NavigationTile;
