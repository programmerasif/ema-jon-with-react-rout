import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <div className='headerComponent'>
                <div className='img'><img src={logo} alt="" /></div>
                <div className='headerInfo'>
                    <Link to="/">Shop</Link>
                    <Link to="/order">Order Review</Link>
                    <Link to="/manage">Manage Inventory</Link>
                    <Link to="/login">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;