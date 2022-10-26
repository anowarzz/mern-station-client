import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import app from '../../config/firebase.config';
import { useState } from 'react';




export const AuthContext = createContext();
const auth = getAuth(app)


const AuthProvider = ({children}) => {

const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true)


const createNewUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
}

const authInfo = {user, loading, createNewUser}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;