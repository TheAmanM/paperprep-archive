// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  // signInWithEmailLink,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
import { useContext, createContext, useState, useEffect } from "react";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore, collection } from "@firebase/firestore";
// import { getPerformance } from "@firebase/performance";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app = initializeApp({
  apiKey: "REDACTED",
  authDomain: "paper-prep.firebaseapp.com",
  projectId: "paper-prep",
  storageBucket: "paper-prep.appspot.com",
  messagingSenderId: "954760299274",
  appId: "1:954760299274:web:1750c711565ea1693930f3",
  measurementId: "G-H5T2S2QKR4",
});

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
// export const performance = getPerformance(app);

const authContext = createContext();

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState(null);

  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const signin = async (email, password) => {
    const response = await signInWithEmailAndPassword(email, password);
    setUser(response.user);
    return response.user;
  };

  const signup = async (email, password) => {
    const response = await createUserWithEmailAndPassword(email, password);
    setUser(response.user);
    return response.user;
  };

  const authenticateWithGoogle = async () => {
    const auth = getAuth();
    try {
      const result = await signInWithPopup(auth, new GoogleAuthProvider());
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      setUser(user);
    } catch (error) {
      console.log(Error(error).message);
      // Handle Errors here.
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.customData.email;
      // The AuthCredential type that was used.
      // const credential_1 = GoogleAuthProvider.credentialFromError(error);
    }
  };

  const authenticateWithFacebook = async () => {
    const auth = getAuth();
    try {
      const result = await signInWithPopup(auth, new FacebookAuthProvider());
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = FacebookAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      setUser(user);
    } catch (error) {
      console.log(Error(error).message);
      // Handle Errors here.
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.customData.email;
      // The AuthCredential type that was used.
      // const credential_1 = FacebookAuthProvider.credentialFromError(error);
    }
  };

  const authenticateWithEmailLink = async (email) => {
    console.log(`Sending authentication link to ${email}...`);
    const auth = getAuth();
    const actionCodeSettings = {
      // URL you want to redirect back to. The domain (www.example.com) for this
      // URL must be in the authorized domains list in the Firebase Console.
      url: "http://localhost:3000/auth",
      // This must be true.
      handleCodeInApp: true,
      iOS: {
        bundleId: "com.example.ios",
      },
      android: {
        packageName: "com.example.android",
        installApp: true,
        minimumVersion: "12",
      },
      dynamicLinkDomain: "paperprep.page.link",
    };
    await sendSignInLinkToEmail(auth, email, actionCodeSettings).then(
      async () => {
        console.log("Sent!");
        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        window.localStorage.setItem("emailForSignIn", email);
        // if (isSignInWithEmailLink(auth, window.location.href)) {
        //   console.log("Successful match! Signing in...");
        //   await signInWithEmailLink(
        //     auth,
        //     email,
        //     window.location.href
        //   );
        // } else {
        //   console.log("Invalid match!");
        // }
      }
    );
    // .catch((error) => {
    //   console.log(Error(error).name);
    //   console.log(Error(error).message);
    // });
    // ...
    // setUser();
    // .catch((error) => {
    //   console.log(Error(error).message);
    //   // const errorCode = error.code;
    //   // const errorMessage = error.message;
    //   // ...
    // });
  };

  const verifyEmailLink = (link) => {
    const auth = getAuth();
    return isSignInWithEmailLink(auth, link);
  };

  const confirmEmailLink = async () => {
    const auth = getAuth();
    if (isSignInWithEmailLink(auth, window.location.href)) {
      // Additional state parameters can also be passed via URL.
      // This can be used to continue the user's intended action before triggering
      // the sign-in operation.
      // Get the email if available. This should be available if the user completes
      // the flow on the same device where they started it.
      let email = window.localStorage.getItem("emailForSignIn");
      if (!email) {
        // User opened the link on a different device. To prevent session fixation
        // attacks, ask the user to provide the associated email again. For example:
        email = window.prompt("Please provide your email for confirmation");
      }
      // The client SDK will parse the code from the link for you.
      await signInWithEmailLink(auth, email, window.location.href)
        .then((result) => {
          // Clear email from storage.
          window.localStorage.removeItem("emailForSignIn");
          // You can access the new user via result.user
          // Additional user info profile not available via:
          // result.additionalUserInfo.profile == null
          // You can check if the user is new or existing:
          // result.additionalUserInfo.isNewUser
          setUser(result.user);
        })
        .catch((error) => {
          console.log(`Error: ${Error(error).message}`);
          // Some error occurred, you can inspect the code: error.code
          // Common errors could be invalid email and invalid or expired OTPs.
        });
    }
  };

  const signOut = async () => {
    const auth = getAuth();
    await auth.signOut();
    setUser(null);
  };

  const sendPasswordResetEmail = (email) => {
    const auth = getAuth();
    return auth.sendPasswordResetEmail(email).then(() => {
      return true;
    });
  };

  const confirmPasswordReset = (code, password) => {
    const auth = getAuth();
    return auth.confirmPasswordReset(code, password).then(() => {
      return true;
    });
  };

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // Return the user object and auth methods
  return {
    user,
    signin,
    signup,
    signOut,
    sendPasswordResetEmail,
    confirmPasswordReset,
    authenticateWithGoogle,
    authenticateWithFacebook,
    authenticateWithEmailLink,
    confirmEmailLink,
    verifyEmailLink,
  };
}

export const db = getFirestore(app);
export const emailsRef = collection(db, "emails");

export default app;
