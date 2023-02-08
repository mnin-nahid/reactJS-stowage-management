import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';
import StowageIcon from '../../images/stowage.png'

export default function Index() {
    return (
        <nav className='navbar'>
            <div className='navContainer'>
                <div className='navContent'>
                    <div>
                        <NavLink id='logo' to={'/'}>
                            <img src={StowageIcon} alt="" />
                            <span>STOWAGE</span>    
                        </NavLink>
                    </div>
                    <div id='page-sectors'>
                        <NavLink to={'/'} >Home</NavLink>
                        <NavLink to={'/inventory'} >Manage Inventory</NavLink>
                        <NavLink to={'/articals'}>Articals</NavLink>
                    </div>
                    <div id='account-sectors'>
                        <NavLink to={'/signup'}>Sign Up</NavLink>
                        <NavLink to={'/login'}>Login</NavLink>
                    </div>
                </div>
            </div>

        </nav>
    )
}
