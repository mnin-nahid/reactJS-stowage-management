import React from 'react';
import './index.scss';

export default function index() {
  return (
    <nav className='navbar'>
        <div>
            <div className='button-container'>
                <div>
                    <button>Home</button>
                </div>
                <div>
                    <button>Warehouse</button>
                </div>
                <div>
                    <button>Guide</button>
                </div>
            </div>
        </div>
    </nav>
  )
}
