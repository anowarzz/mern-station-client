import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, updateProfile } from 'firebase/auth'
import app from '../../config/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';




export const AuthContext = createContext();
const auth = getAuth(app)


const AuthProvider = ({children}) => {

const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true)


useEffect( () => {

   const unSubscribe = onAuthStateChanged(auth, currentUser => {
    console.log("current user inside the state change", user);
    setUser(currentUser)
   }) 
   return () => unSubscribe();
}, [])




const createNewUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
}

const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };




const authInfo = {user, loading, createNewUser, updateUserProfile}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;