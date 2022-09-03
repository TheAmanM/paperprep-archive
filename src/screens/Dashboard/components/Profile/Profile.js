import React from "react";
import "./Profile.css";

const Profile = ({ initial = "" }) => {
  return (
    <div className="profile-wrapper">
      <div className="profile">{initial}</div>
    </div>
  );
};

export default Profile;
