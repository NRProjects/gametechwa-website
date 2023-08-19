import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/templogo.svg';
import { Icon } from '@iconify/react';
import { useUser } from '../UserContext';
import './FrontPage.css';

function FrontPage() {
    const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
    const { user } = useUser();
    const location = useLocation();

    const [lastNavigation, setLastNavigation] = useState(Date.now());

    const toggleMobileNav = () => {
        setIsMobileNavVisible(!isMobileNavVisible);
    };

    useEffect(() => {
        if (location !== lastNavigation) {
            setLastNavigation(location);
        }
    }, [location]);

    return (
        <div className='front-page-container'>
            <div className='navbar'>
                <div className="navbar-logo">
                    <Logo className='logo'/>
                </div>
                
                <div className='menu-toggle' onClick={toggleMobileNav}>
                    <Icon icon="mdi:hamburger-menu" color="white" height="40" />
                </div>

                <div className={`navbar-list ${isMobileNavVisible ? 'active' : ''}`}>
                    <a className='navbar-list-item' href='#'>Services</a>
                    <a className='navbar-list-item' href='#'>Pricing</a>
                    <a className='navbar-list-item' href='#'>About Us</a>
                    <a className='navbar-list-item' href='#'>Updates</a>
                    <a className='navbar-list-item' href='#'>Contact Us</a>
                    {!user && <Link className='user-button' to='login'>Login</Link>}
                    {!user && <Link className='user-button' to='get-started'>Get Started</Link>}
                    {user && <button className='user-button' to='admin'>{user.email}</button>}
                    
                </div>
            </div>
        </div>
    );
}

export default FrontPage