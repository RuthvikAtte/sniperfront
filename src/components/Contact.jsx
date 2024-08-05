import React, { useRef } from 'react'
// import { ReactTyped} from 'react-typed'
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_p07nxzi', 'template_zcmafcc', form.current, {
        publicKey: 'aNG9MNGX9o5wyqTL4',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form className='h-screen text-white contact-bg' ref={form} onSubmit={sendEmail}>
      <h1 className='text-3xl contact-title'>Contact Us</h1>
      <div className='mb-4'>
        <h3 className='mb-2'>Name</h3>
        <div>
          <input name="from_name" className='st-box' placeholder="Name"  />
        </div>
      </div>
      <div className='mb-4'>
        <h3 className='mb-2'>Email</h3>
        <div>
          <input name="user_email" className='st-box' placeholder="jane@example.com"  />
        </div>
      </div>
      <div className='mb-4'>
        <h3 className='mb-2'>Message</h3>
        <div>
          <textarea name="message" type="text" class="cln" className='bt-box' placeholder="Message" col={10} rows={5} />
        </div>
      </div>
      <button type="submit" className='contact-btn shadow-lg'>SUBMIT</button>
    </form>
  );
}