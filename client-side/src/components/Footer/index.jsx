import React from 'react'
import './index.scss'
import {MdRoom} from 'react-icons/md'
import {FiPhoneCall} from 'react-icons/fi'
import {FaFacebook, FaYoutube, FaInstagram} from 'react-icons/fa'

export default function index() {
    return (
        <>
            <footer>
                <div className='footer-container'>
                    <div className='footer-items'>
                        <h3>STOWAGE.COM</h3>
                        <p>Dolor sit amet consectetur adipisicing elit. Voluptate voluptas sequi amet harum atque ad nisi, quaerat fugit officiis consectetur.</p>
                    </div>
                    <div className='footer-items'>
                     
                            <span><MdRoom/> Mirpur, 1216- Dhaka, Bangladesh</span>
                            <span><FiPhoneCall/> Contract: +8801711-xxxxx8</span>
                        
                    </div>
                    <div className='footer-items'>
                        <h3>Social Media</h3>
                        <div className='social-links'>
                            <a target={'_blank'} href="https://www.facebook.com"><FaFacebook/></a>
                            <a target={'_blank'} href="https://www.facebook.com"><FaYoutube/></a>
                            <a target={'_blank'} href="https://www.facebook.com"><FaInstagram/></a>
                        </div>
                    </div>
                </div>
                <small>copyright © 2023 all rights reserved</small>
            </footer>
        </>
    )
}
