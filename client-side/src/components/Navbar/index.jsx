import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';

export default function index() {
    return (
        <nav className='navbar'>
            <div className='navContainer'>
                <div className='navContent'>
                    <div>
                        <NavLink to={'/'}>STOWAGE</NavLink>
                    </div>
                    <div>
                        <NavLink to={'/'} >Home</NavLink>
                        <NavLink to={'/inventory'} >Manage Inventory</NavLink>
                        <NavLink to={'/articals'}>Articals</NavLink>
                    </div>
                    <div>
                        <NavLink to={'/signup'}>SignUp</NavLink>
                        <NavLink to={'/signin'}>SignIn</NavLink>
                    </div>
                </div>
            </div>

        </nav>
    )
}
