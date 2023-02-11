import Navbar from '../../components/Navbar/Index'
import Footer from '../../components/Footer/Index'
import './index.scss'
import { React, useState } from 'react';

export default function Index() {
  const [openAdd, setOpenAdd] = useState(false)
  const stylesAdd = {
    popup: {
      display: openAdd ? "flex" : "none",
      opacity: openAdd ? "1" : "0",
    }
  };

  const [openManage, setOpenManage] = useState(false)
  const stylesManage = {
    popup: {
      display: openManage ? "flex" : "none",
      opacity: openManage ? "1" : "0",
    }
  };

  const [openDelever, setOpenDelever] = useState(false)
  const stylesDelever = {
    popup: {
      display: openDelever ? "flex" : "none",
      opacity: openDelever ? "1" : "0",
    }
  };

  return (
    <div className='inventory-section'>
      <Navbar />
      {/* Modal for add items */}
      <div className="modal-container" style={stylesAdd.popup}>
        <div className="modal">
          <h4>Add Product to Inventory</h4>
          <div className="input-feld">
            <input type="text" name="" id="" placeholder='Name of Product' />
            <input type="number" name="" id="" placeholder='Product ID' />
            <input type="number" name="" id="" placeholder='Product quantity' />
            <input type="text" name="" id="" placeholder='Supplier name' />
            <div className="button-container">
              <input type="submit" value="Update" />
              <input type="submit" value="Update & Print" />
            </div>
          </div>
        </div>
        <div className="close-button">
          <button className="close_button" onClick={() => { setOpenAdd(false) }}>X</button>
        </div>
      </div>
      {/* Modal for Manage items */}
      <div className="modal-container popup" style={stylesManage.popup}>
        <div className="modal">
          <h4>This is a modal for manage</h4>
          <div className="input-feld">
            <input type="text" name="" id="" placeholder='Name of Product' />
            <input type="number" name="" id="" placeholder='Product ID' />
            <input type="number" name="" id="" placeholder='Product quantity' />
            <input type="submit" value="Submit" />
          </div>
        </div>
        <div className="close-button">
          <button className="close_button" onClick={() => { setOpenManage(false) }}>X</button>
        </div>
      </div>
      {/* Modal for Delever items */}
      <div className="modal-container popup" style={stylesDelever.popup}>
        <div className="modal">
          <h4>Delever Product from Inventory</h4>
          <div className="input-feld">
            <input type="text" name="" id="" placeholder='Name of Product' />
            <input type="number" name="" id="" placeholder='Product ID' />
            <input type="number" name="" id="" placeholder='Product quantity' />
            <input type="text" name="" id="" placeholder='Customer name' />
            <div className="button-container">
              <input type="submit" value="Update" />
              <input type="submit" value="Update & Print" />
            </div>
          </div>
        </div>
        <div className="close-button">
          <button className="close_button" onClick={() => { setOpenDelever(false) }}>X</button>
        </div>
      </div>
      <section>
        <h3>Welcome to Inventory</h3>
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
            <button onClick={() => { setOpenAdd(true) }}>Add</button>
            <button onClick={() => { setOpenManage(true) }}>Manage</button>
            <button onClick={() => { setOpenDelever(true) }}>Delever</button>
          </div>
        </div>
      </section>
      <section>
        <div className="history">
          <div className="history-container">
            <h4>Order history</h4>
            <div className='table-container'> 
              <tr>
                <th>id</th>
                <th>Type</th>
                <th>Castomer name</th>
                <th>date</th>
                <th>Print</th>
              </tr>
              <tr>
                <td>01</td>
                <td>Buy</td>
                <td>nahid</td>
                <td>01/01/2023</td>
                <td> <button>Print</button></td>
              </tr>
              <tr>
                <td>01</td>
                <td>Buy</td>
                <td>nahid</td>
                <td>01/01/2023</td>
                <td> <button>Print</button></td>
              </tr>
              <tr>
                <td>01</td>
                <td>Buy</td>
                <td>nahid</td>
                <td>01/01/2023</td>
                <td> <button>Print</button></td>
              </tr>
              <tr>
                <td>01</td>
                <td>Buy</td>
                <td>nahid</td>
                <td>01/01/2023</td>
                <td> <button>Print</button></td>
              </tr>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
