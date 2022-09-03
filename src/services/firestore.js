import {
  getFirestore,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  collection,
  setDoc,
} from "firebase/firestore";
import data from "./initializeApp";

function useFirestore() {
  const db = getFirestore(data);

  const usersCollectionPath = "users";

  const getUserData = async (userID) => {
    const docRef = doc(db, usersCollectionPath, userID);
    const docSnap = await getDoc(docRef);
    console.log("Exists:", docSnap.exists());

    if (docSnap.exists()) {
      return docSnap;
    } else {
      await setDoc(docRef, {});
      return {};
    }
  };

  return { getUserData };
}

export default useFirestore;
