import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import logo from '../../images/logo.png';

import './MenuBar.css';

const Menubar = () => {
    const { user, logOut } = useFirebase();
    return (
        <div className="header">
            <div className="logo">
                <img className="logo-img" src={logo} alt="" />
            </div>
            <div>
                <nav>
                    <ul className="d-flex ms-5">
                        <li><NavLink className="nav-li" to='/home'>Home</NavLink></li>
                        <li><NavLink className="nav-li" to='/about'>About</NavLink></li>
                        <li><NavLink className="nav-li" to='/features'>Features</NavLink></li>
                        <li><NavLink className="nav-li" to='/services'>Services</NavLink></li>
                        <li><NavLink className="nav-li" to='/doctors'>Doctors</NavLink></li>
                        <li><NavLink className="nav-li" to='/contact'>Contact us</NavLink></li>
                        {
                            user.email ?
                                <div>
                                    <li>{user?.displayName}</li>
                                    <button className="logOut-btn" onClick={logOut}>Log Out</button>
                                </div>
                                :
                                <li><Link className="login-li" to="/login">Login</Link></li>
                        }
                    </ul>
                </nav>
            </div>
        </div>
    );
};


export default Menubar;