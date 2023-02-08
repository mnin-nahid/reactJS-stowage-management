import React from 'react'
import { Form } from 'react-router-dom'
import Navbar from '../../components/Navbar/Index.jsx'
import './index.scss'
import Footer from '../../components/Footer/Index.jsx'

export default function Index() {
  return (
    <div>
      < Navbar />
      <section className='login-section'>
        <div className="container">
          <h3>Login</h3>
          <Form>
            <label htmlFor="email">
              <span>Email</span>
              <input type="email" name="" id="" placeholder='Enter your email' />
            </label>
            <label htmlFor="">
              <span>Passowerd</span>
              <input type="password" name="" id="" placeholder='Enter your password' />
            </label>
            <input id='submit' type="submit" value="Login" />
          </Form>
        </div>
      </section>
      < Footer />
    </div>
  )
}
