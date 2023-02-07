import React from 'react';
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import './index.scss'

export default function index() {
  return (
    <div className='inventory-section'>
      <Navbar />
      <section>
        <h3>Wallcome to Inventory</h3>
        <div className="container">
          <div className='items-container'>
            <h4>List of all items</h4>
            <div className="items">
              <div className="item">Item</div>
              <div className="item">Item</div>
              <div className="item">Item</div>
              <div className="item">Item</div>
              <div className="item">Item</div>
              <div className="item">Item</div>
              <div className="item">Item</div>
              <div className="item">Item</div>
              <div className="item">Item</div>
              <div className="item">Item</div>
              <div className="item">Item</div>
              <div className="item">Item</div>
              <div className="item">Item</div>
              <div className="item">Item</div>
              <div className="item">Item</div>
              <div className="item">Item</div>
              <div className="item">Item</div>
              <div className="item">Item</div>
              <div className="item">Item</div>
              <div className="item">Item</div>
              <div className="item">Item</div>
              <div className="item">Item</div>
            </div>
          </div>
          <div className='button-container'> 
            <button>Add</button>
            <button>Manage</button>
            <button>Delever</button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
