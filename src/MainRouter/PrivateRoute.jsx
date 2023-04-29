import React from 'react';
import { useContext } from 'react';
import { AuthProviderContext } from '../AuthProvider/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user,loader} = useContext(AuthProviderContext)
    const location = useLocation()
    if(!loader){
        return <Spinner animation="grow" />
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    
};

export default PrivateRoute;