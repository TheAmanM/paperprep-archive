import React, { useState } from "react";
import "./SidebarNavigation.css";
import SidebarNavigationTile from "./../SidebarNavigationTile/SidebarNavigationTile";
import { useAuth } from "./../../../../../services/firebase";

import { HiOutlineDocumentReport, HiOutlineHome } from "react-icons/hi";
import { FiUser, FiUsers } from "react-icons/fi";
import { BiCollection } from "react-icons/bi";
import { TbLogout, TbSettings } from "react-icons/tb";

const SidebarNavigation = () => {
  const [currentPathIndex, setCurrentPathIndex] = useState(0);
  const auth = useAuth();
  const paths = [
    { index: 0, name: "Home", icon: <HiOutlineHome /> },
    { index: 1, name: "Profile", icon: <FiUser /> },
    { index: 2, name: "Collections", icon: <BiCollection /> },
    { index: 3, name: "Community", icon: <FiUsers /> },
    { index: 4, name: "Reporting", icon: <HiOutlineDocumentReport /> },
    { index: 5, name: "Settings", icon: <TbSettings /> },
    // { index: 6, name: "Exit", icon: <TbLogout /> },
  ];

  const handleLogout = () => {
    const shouldLogout = window.confirm("Are you sure you want to sign out?");
    if (shouldLogout) auth.signOut();
  };

  return (
    <>
      <div className="sidebar-navigation">
        {paths.map((item) => {
          return (
            <SidebarNavigationTile
              data={item}
              key={item.index}
              active={item.index === currentPathIndex}
              onClick={() => {
                setCurrentPathIndex(item.index);
              }}
            />
          );
        })}
      </div>
      <div className="sidebar-navigation-last-tile">
        <SidebarNavigationTile
          data={{ index: paths.length, name: "Logout", icon: <TbLogout /> }}
          onClick={handleLogout}
        />
      </div>
    </>
  );
};

export default SidebarNavigation;
