import React from 'react';
import Logo  from '../../assets/logo.png';
import moment from 'moment/moment';
const Header = () => {
    return (
        <div className='container text-center p-2'>
            <img src={Logo} alt="" />
            <h4><span className='mt-5'>Journalism Without Fear or Favour</span></h4>
            {
                moment().format('dddd, MMMM D, YYYY')
            }
        </div>
    );
};

export default Header;