// eslint-disable-next-line no-unused-vars
import React from 'react';

import './contact.css';


const Contact = () => {
  return (
   <>
   <h2 style={{textAlign:'center', marginTop:'10px'}}>CONTACT US </h2>
    <div className='form'>
      <h2>Have any Query?</h2>
    </div>
   <div className='main'>
    <div className='info'>
      <p>Address: 123, ABC Street, New York, USA</p>
      <p>Phone: +1 123 456 7890</p>
      <p>Email: <a href="mailto:info@example.com">info@example.com</a>
      </p>
        
    </div>
    <div className='infoform'>
      <fieldset>
        <form action="">
          <label>Name :</label>
          <input type="text" name="name" placeholder="Your Name"/> <br /> 
          <label>Email:</label>
          <input type="email" name="email" placeholder="Your Email"/><br />
          <label>Message : </label>
          <textarea name="message" placeholder="Your Message"/> <br />
          <input type="submit" value="Send"/><br />
        </form>
      </fieldset>

    </div>

   </div>

   </>
  )
}

export default Contact
