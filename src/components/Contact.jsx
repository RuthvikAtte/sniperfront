import React from 'react'
import { ReactTyped} from 'react-typed'

export default function Contact() {
  return (
    <div className='text-white contact-bg'>
      <h1 className='text-3xl contact-title'>Contact Us</h1>
      <div className='mb-4'>
        <h3>Name</h3>
        <div>
          <input name="name" className='st-box' placeholder="Name"  />
        </div>
      </div>
      <div className='mb-4'>
        <h3>Email</h3>
        <div>
          <input name="email" className='st-box' placeholder="Email"  />
        </div>
      </div>
      <div className='mb-2'>
        <h3>Message</h3>
        <div>
          <textarea type="text" class="cln" className='bt-box' placeholder="Message" col={30} rows={10} />
        </div>
      </div>
      <button className='contact-btn shadow-lg'> SUBMIT</button>
    </div>
  )
}