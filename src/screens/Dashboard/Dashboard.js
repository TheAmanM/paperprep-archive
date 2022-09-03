import React from "react";
// import { useState } from "react";
// import Loader from "../../components/PageLoad/Loader";
// import { useAuth } from "../../services/firebase";
// import useFirestore from "../../services/firestore";
import "./components/Sidebar/Sidebar";
import Sidebar from "./components/Sidebar/Sidebar";
// import Nav from "../../components/Nav/Nav";
import "./Dashboard.css";

const Dashboard = () => {
  // const auth = useAuth();
  // const fs = useFirestore();
  // const [userData, setUserData] = useState(null);

  /* useEffect(() => {
    const init = async () => {
      setUserData(await fs.getUserData(auth.user.uid));
    };
    // init();
  }, []); */

  /* useEffect(() => {
    console.log("User data:", userData);
  }, [userData]); */

  // return (
  //   <>
  //     {/* <div>ID {auth.user.uid}</div>
  //     {userData != null || userData.size === 0 ? (
  //       <div>No data, {JSON.stringify(auth.user)}</div>
  //     ) : (
  //       <div>
  //         {JSON.stringify(userData)} and {userData.size}
  //       </div>
  //     )} */}
  //     {userData ? <div>User exists!</div> : <div>No data</div>}
  //   </>
  // );

  /* if (userData === null) {
    return (
      <div
        className="dashboard__container"
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Loader />
      </div>
    );
  } */

  return (
    <div className="dashboard">
      <Sidebar />
    </div>
  );
};

export default Dashboard;
