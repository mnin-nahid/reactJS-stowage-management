import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import './index.scss'
import { React, useState } from 'react';
// import Modal from './Modal'

export default function index() {
  const [open, setOpen] = useState(false)
  const styles = {
    popup: {
      display: open ? "flex" : "none",
      opacity: open ? "1" : "0",
    }
  };

  return (
    <div className='inventory-section'>
      <Navbar />
      <div className="modal-container popup" style={styles.popup}>

        <div className="modal">
          <h4>This is a modal</h4>
          <div className="input-feld">
            <input type="text" name="" id="" placeholder='Name of Product' />
            <input type="number" name="" id="" placeholder='Product ID' />
            <input type="number" name="" id="" placeholder='Product quantity' />
            <input type="submit" value="Submit" />
          </div>
        </div>
        <div className="close-button">
          <button className="close_button" onClick={() => { setOpen(false) }}>X</button>
        </div>
      </div>
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
            <button onClick={() => { setOpen(true) }}>Add</button>
            <button onClick={() => { setOpen(true) }}>Manage</button>
            <button onClick={() => { setOpen(true) }}>Delever</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
