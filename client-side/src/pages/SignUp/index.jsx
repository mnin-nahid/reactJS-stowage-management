import React from 'react'
import { Form } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import './index.scss'

export default function index() {
  return (
    <div>
      < Navbar />
      <section className='signup-section'>
        <div className="container">
          <h3>Sign Up</h3>
          <Form>
            <label htmlFor="name">
              <span>Name</span>
              <input type="text" name="" id="" placeholder='Enter your name' />
            </label>
            <label htmlFor="email">
              <span>Email</span>
              <input type="email" name="" id="" placeholder='Enter your email' />
            </label>
            <label htmlFor="">
              <span>Passowerd</span>
              <input type="password" name="" id="" placeholder='Enter your password' />
            </label>
            <input id='submit' type="submit" value="Sign up" />
          </Form>
        </div>
      </section>
    </div>
  )
}
