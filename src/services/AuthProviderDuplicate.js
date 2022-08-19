import React, { useContext, useEffect, useState } from "react";
import { signInWithGoogle } from "./firebase";
import { getAuth } from "firebase/auth";

export const AuthContext = React.createContext();

// export function useAuth() {
//   return useContext(AuthContext);
// }

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log(`User logged in: ${user.email}`);
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signInWithGoogle,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { signInWithGoogle };
export default AuthProvider;
