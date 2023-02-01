import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

export default function index() {
  return (
    <nav className='navbar'>
        <div className='navContainer'>
            <div className='navContent'>
                <div>
                    <a href='/'>STOWAGE</a>
                </div>
                <div>
                    <a href="home">Home</a>
                    <a href="manageinventory">Manage Inventory</a>
                    <a href="help">Help guide</a>
                </div>
                <div>
                    <a href="signin">SignIn</a>
                    <a href="signup">SignUp</a>
                </div>
            </div>
        </div>
    </nav>
  )
}
