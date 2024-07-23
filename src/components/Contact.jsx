import React from 'react'
import { ReactTyped} from 'react-typed'
// import emailjs from '@emailjs/browser';

export default function Contact() {
  return (
    <div className='h-screen text-white contact-bg'>
      <h1 className='text-3xl contact-title'>Contact Us</h1>
      <div className='mb-4'>
        <h3 className='mb-2'>Name</h3>
        <div>
          <input name="name" className='st-box' placeholder="Name"  />
        </div>
      </div>
      <div className='mb-4'>
        <h3 className='mb-2'>Email</h3>
        <div>
          <input name="email" className='st-box' placeholder="jane@example.com"  />
        </div>
      </div>
      <div className='mb-4'>
        <h3 className='mb-2'>Message</h3>
        <div>
          <textarea type="text" class="cln" className='bt-box' placeholder="Message" col={10} rows={5} />
        </div>
      </div>
      <button className='contact-btn shadow-lg'>SUBMIT</button>
    </div>
  )
}