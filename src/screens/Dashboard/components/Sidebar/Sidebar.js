import React from "react";
import { IconContext } from "react-icons/lib";
import Profile from "../Profile/Profile";
import "./Sidebar.css";
import SidebarNavigation from "./SidebarNavigation/SidebarNavigation";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Profile initial="A" />
      <IconContext.Provider value={{ size: "1.2rem" }}>
        <SidebarNavigation />
      </IconContext.Provider>
    </div>
  );
};

export default Sidebar;
