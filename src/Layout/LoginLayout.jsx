import React from 'react';
import NavbarBar from '../Pages/Sharing/NavbarBar';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div className='bg-light ' style={{height :'120vh'}}>
            <NavbarBar></NavbarBar>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;