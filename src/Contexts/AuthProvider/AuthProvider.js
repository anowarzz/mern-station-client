import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../config/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';




export const AuthContext = createContext();
const auth = getAuth(app)


const AuthProvider = ({children}) => {

const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true)





const createNewUser = (email, password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
}

const googleLogIn = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };


const githubLogIn = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);

  };

const facebookLogIn = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };




const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };


  const updateUserProfile = (profile) => {
      return updateProfile(auth.currentUser, profile);
    };

const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };


  useEffect( () => {

    const unSubscribe = onAuthStateChanged(auth, currentUser => {
     console.log("current user inside the state change", user);
     setUser(currentUser)
     setLoading(false);
    }) 
    return () => unSubscribe();
 }, [])
 


const authInfo = {user, setUser, loading, setLoading, createNewUser, updateUserProfile, logIn, logOut, googleLogIn, githubLogIn, facebookLogIn}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;