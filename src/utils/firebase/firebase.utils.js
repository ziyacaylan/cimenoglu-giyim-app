import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  sendEmailVerification,
  updatePassword,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  onSnapshot,
  deleteDoc,
  addDoc,
  updateDoc,
} from "firebase/firestore";

import toast from "react-hot-toast";

import {
  login as loginHandle,
  logout as logoutHandle,
} from "../../store/auth/authSlice";

import { setCategories as setKategoriler } from "../../store/category/categorySlice";

import { store } from "../../store/store";

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
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  // console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  //console.log(userSnapshot);
  //console.log(userSnapshot.exists());
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      toast.error(error.message);
    }
  }
  return userDocRef;
};

// register firebase
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

// login firebase with google
export const signInWithGooglePopup = async () => {
  const user = await signInWithPopup(auth, provider);
  return user;
};

// login firebase
export const login = async (email, password) => {
  try {
    // console.log("istek aldım");
    // console.log(email, password);
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    //console.log("bunu aldım yolluyom", user);
    return user;
  } catch (error) {
    toast.error(error.message);
  }
};

// logout
export const logout = async () => {
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

// user state changed
export const onUserShateChanged = () =>
  onAuthStateChanged(auth, (user) => {
    if (user) {
      store.dispatch(
        loginHandle({
          displayName: auth.currentUser.displayName,
          email: auth.currentUser.email,
          emailVerification: auth.currentUser.emailVerified,
          photoURL: auth.currentUser.photoURL,
          uid: auth.currentUser.uid,
        })
      );
      return true;
    } else {
      store.dispatch(logoutHandle());
      return false;
    }
  });

// update user profile
export const updateUser = async ({ displayName, photoURL, phoneNumber }) => {
  try {
    await updateProfile(auth.currentUser, { displayName, photoURL });
    toast.success("User updated...!");
    return true;
  } catch (error) {
    toast.error(error.message);
  }
};

// update user password
export const resetPassword = async (password) => {
  try {
    await updatePassword(auth.currentUser, password);
    toast.success("Password updated...!");
    store.dispatch(logout());
    return true;
  } catch (error) {
    toast.error(error.message);
  }
};

// email verified
export const emailVerification = async () => {
  try {
    await sendEmailVerification(auth.currentUser);
    toast.success(
      `Verification mail has been sent to ${auth.currentUser.email} Please check`
    );
  } catch (error) {
    toast.error(error.message);
  }
};

const productsRef = collection(db, "products");
export const categoriesRef = collection(db, "categories");

const docRef = doc(db, "/products/cBTNIAS7bAAP95a0MAsW");

// product Listener
export const useProductListener = async () => {
  await onSnapshot(productsRef, (snapshot) => {
    console.log(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  });
};

// categories Listener
//export const useCategoryListener = () => {
onSnapshot(categoriesRef, (snapshot) => {
  const categories = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  store.dispatch(setKategoriler(categories));
});
//};

// delete doc
export const deleteProduct = async (id) => {
  await deleteDoc(doc(db, "products", id));
};

// add doc
export const addProduct = async (product) => {
  const uid = auth.currentUser?.uid;
  if (!uid) return;
  await addDoc(productsRef, product);
};
