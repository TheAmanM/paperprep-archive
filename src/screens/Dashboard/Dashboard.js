import React from "react";
import { useAuth } from "../../services/firebase";

const Dashboard = () => {
  const auth = useAuth();
  return (
    <>
      <div>Eyy welcome to Dashboard :P</div>
      <button
        onClick={() => {
          auth.signOut();
        }}
      >
        Log out
      </button>
    </>
  );
};

export default Dashboard;
