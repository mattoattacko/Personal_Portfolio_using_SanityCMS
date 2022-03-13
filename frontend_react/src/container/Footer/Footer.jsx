import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss'


const Footer = () => {

  const [formData, setFormData] = useState({ name: '', email: '', message: ''});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); //if we are loading, show loading message

  // Destructures our formData. Pulls values from the formData object.
  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target; // we get the input we are typing in, and we get the name and value of that input

    //with those values, we can dynamically set the formData object.
    //we call setFormData. Create and object and destructure all the values that are there. Then dynamically change the name to a specific value
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = async () => {
    setLoading(true);

    //we are going to send the formData to our backend. 
    //We have to form a contact object (following Sanity's schema)
    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

    //we are going to send the contact object to our backend.
    // helps give us the ability to show the success message in our form.
    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
  }

  return (
    <>
      <h2 className="head-text">Let's Connect!</h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt='email' />
          <a href='mailto:matt.mcquain@gmail.com' className='p-text'>matt@petrolnaut.com</a>
        </div>       
        
        <div className='app__footer-card'>
          <img src={images.mobile} alt='mobile' />
          <a href='tel: +1 (808) 227-7819' className='p-text'>Mobile Chat</a>
        </div>
      </div>

      {/* We show this code if the user hasn't submitted the form. */}
      {!isFormSubmitted ?
        <div className='app__footer-form app__flex'>
          <div className='app__flex'>
            <input 
              className='p-text' 
              type='text' 
              name='name' 
              placeholder='Your Name' 
              value={name} 
              onChange={handleChangeInput}               
            />
          </div>  

          <div className='app__flex'>
            <input 
              className='p-text' 
              type='text' 
              name='email' 
              placeholder='Your Email' 
              value={email} 
              onChange={handleChangeInput}
            />
          </div>  

          <div>
            <textarea 
              className='p-text' 
              name='message' 
              placeholder='Your Message' 
              value={message} 
              onChange={handleChangeInput} 
            />
          </div>

          <button 
            type='button' 
            className='p-text'
            onClick={handleSubmit}>
              {loading ? 'Sending...' : 'Send Message'}
          </button>
        </div>

        /* If they have submitted the form, we show this code. */
        : <div>
            <h3 className='head-text'>
              Thank you for getting in touch!
            </h3>
        </div>
      }
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'Contact', // 'contact' is the section id
  'app__whitebg' // this is the background
);