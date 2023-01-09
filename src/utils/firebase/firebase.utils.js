import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import {
  login as loginHandle,
  logout as logoutHandle,
} from "../../store/auth/authSlice";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
};

// Initialize Firebase
initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();

export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, provider);
};

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  // console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log("Kullanıcı hatası", error.message);
    }
  }
  return userDocRef;
};

export const register = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return user;
  } catch (error) {
    toast.error(error.message);
  }
};

export const login = async (email, password) => {
  try {
    console.log("istek aldım");
    console.log(email, password);
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    console.log("bunu aldım yolluyom", user);
    return user;
  } catch (error) {
    toast.error(error.message);
  }
};

export const logut = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    toast.error(error.message);
  }
};

// login with google
export const logGoogleUser = async () => {
  try {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
    return user;
  } catch (error) {
    toast.error(error.message);
  }
};

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     store.dispatch(loginHandle(user));
//     //console.log("selam ben yazdım");
//     //console.log(user.email);
//     // ...
//   } else {
//     console.log("güle güle....");
//   }
// });
