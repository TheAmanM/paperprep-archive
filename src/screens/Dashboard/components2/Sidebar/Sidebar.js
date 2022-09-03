import React, { useEffect, useState } from "react";
import NavigationTile from "../NavigationTile/NavigationTile";
import Profile from "../Profile/Profile";
import "./Sidebar.css";

import { IconContext } from "react-icons";
import { HiOutlineHome, HiOutlineDocumentReport } from "react-icons/hi";
import { FiUser, FiUsers, FiChevronLeft } from "react-icons/fi";
import { BiCollection } from "react-icons/bi";
import { TbSettings, TbLogout } from "react-icons/tb";

const Sidebar = () => {
  const [selectedTileIndex, setSelectedTileIndex] = useState(0);
  const [navigationOpened, setNavigationOpened] = useState(true);
  const [showTileLabels, setShowTileLabels] = useState(true);

  const tiles = [
    { index: 0, name: "Home", icon: <HiOutlineHome /> },
    { index: 1, name: "Profile", icon: <FiUser /> },
    { index: 2, name: "Collections", icon: <BiCollection /> },
    { index: 3, name: "Community", icon: <FiUsers /> },
    { index: 4, name: "Reporting", icon: <HiOutlineDocumentReport /> },
    { index: 5, name: "Settings", icon: <TbSettings /> },
  ];

  const selectTile = (index) => {
    setSelectedTileIndex(index);
  };

  const handleToggleSidebar = () => {
    console.log("Clicked!");
    // setNavigationOpened((navigationOpened) => !navigationOpened);
    setNavigationOpened(!navigationOpened);
    // handleTileShowingState();
  };

  useEffect(() => {
    console.log("navigationOpened has changed to", navigationOpened);
    if (navigationOpened) {
      console.log("* Handling case for TRUE");
      setTimeout(() => {
        setShowTileLabels(true);
      }, 5000);
    } else if (!navigationOpened) {
      console.log("* Handling case for FALSE");
      setShowTileLabels(false);
    } else {
      console.error("navigationOpened is neither true nor false");
    }
  }, [navigationOpened]);

  return (
    <IconContext.Provider value={{ size: "22px" }}>
      <div className={`sidebar ${navigationOpened ? "" : "opened"}`}>
        <Profile initial={"A"} navigationOpened={navigationOpened} />
        {tiles.map((tile) => (
          <NavigationTile
            name={showTileLabels ? tile.name : ""}
            // name={tile.name}
            // fontSize={"1rem"}
            index={tile.index}
            navigationOpened={navigationOpened}
            // icon={tile.icon}
            icon={tile.icon}
            key={tile.index}
            selected={tile.index === selectedTileIndex}
            onSelect={selectTile}
          />
        ))}
        <div className="sidebar__logout">
          <NavigationTile
            name={showTileLabels ? "Logout" : ""}
            icon={<TbLogout />}
            navigationOpened={navigationOpened}
            // fontSize={"1rem"}
            onSelect={() => {
              console.log("Log out here");
            }}
          />
        </div>
        <div
          className={`sidebar__minimise-icon-container ${
            navigationOpened ? "opened" : ""
          }`}
          onClick={handleToggleSidebar}
        >
          <FiChevronLeft className="sidebar__minimise-icon" />
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Sidebar;
