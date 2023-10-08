/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState(null);


  // Create User by email and Password
  const userCreateByEmailPassword = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login by email and Password
  const userLoginByEmailPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google Login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //   All Logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Keep The State True When User Belongs
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, [user]);



  // Receving name


    updateProfile(auth.currentUser, {
      displayName: userName, 
    }).then().catch();



  //   Passing Value By ContextAPI
  const passValue = {
    userCreateByEmailPassword,
    userLoginByEmailPassword,
    googleLogin,
    user,
    logOut,
    loading,
    // passing setUserName() to catch user name when Resister
    setUserName,

  };
  console.log(user);
  return (
    <AuthContext.Provider value={passValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
