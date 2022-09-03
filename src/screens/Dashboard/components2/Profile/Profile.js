import React from "react";
import "./Profile.css";

const Profile = ({ initial, navigationOpened }) => {
  return (
    <div className={`profile ${navigationOpened ? "" : "small"}`}>
      {initial}
    </div>
  );
};

export default Profile;
