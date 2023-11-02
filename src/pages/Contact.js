import React from 'react'
import "../styles/contact.css"
import contact from "../assets/images/contact.jpg"

export default function Contact() {
    return (
    <div className='contact'>
        <div className="leftSide" style={{backgroundImage  : `url(${contact})`}}></div>
        <div className="rightSide">
          <h1>Contact Us</h1>
          <form id="contact-form" method='POST'>
            <label htmlFor="name">Full Name</label>
            <input type="text"  id='name' placeholder='Enter full name...'/>
            <label htmlFor="email">Email address</label>
            <input type="email"  id='name' placeholder='Enter email...'/>
            <label htmlFor="message">Message</label>
            <textarea rows = "6" placeholder='Your message...' name='message' required></textarea>
            <button type='submit'>Send your message</button>
          </form>
        </div>
    </div>
  )
}
