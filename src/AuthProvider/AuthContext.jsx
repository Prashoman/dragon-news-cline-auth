import React from "react";
import { createContext } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { useEffect } from "react";
import { useState } from "react";

export const AuthProviderContext = createContext(null);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthContext = ({ children }) => {
  const [loader, setLoader] = useState(false);

  const [user, setUser] = useState(null);

  // created new user means register
  const userCreated = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //login user
  const logInUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //login with Google
  const googleLogIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  //github login
  const githubLogIn = () => {
    return signInWithPopup(auth, githubProvider);
  };

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
      setLoader(true);
    });
    return () => {
      unsubcribe();
    };
  }, []);

  const logOut = () => {
    signOut(auth);
  };

  const authInfo = {
    user,
    loader,
    userCreated,
    logInUser,
    googleLogIn,
    githubLogIn,
    logOut,
  };
  return (
    <AuthProviderContext.Provider value={authInfo}>
      {children}
    </AuthProviderContext.Provider>
  );
};

export default AuthContext;
