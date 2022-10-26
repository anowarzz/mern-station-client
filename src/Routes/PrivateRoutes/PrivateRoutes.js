import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const PrivateRoutes = ({children}) => {

const {user, loading} = useContext(AuthContext)
console.log(user, loading);

const location = useLocation();


if(!user){
    return <Navigate to='/login' state={{from : location}} replace />
}
return children
   
};

export default PrivateRoutes;