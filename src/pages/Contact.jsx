import React, { useState } from 'react';
import '../Styles/Contact.css';

const Contact = () => {
  const [showEmail, setShowEmail] = useState(false);
  const email = 'hmkalkali@gmail.com';

  const handleButtonClick = () => {
    setShowEmail(!showEmail);
  };

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact Me</h2>
      <p className='contact__description'>
        Feel free to reach out if you have any questions or just want to connect!
      </p>
      <button type='button' className='btn btn--outline' onClick={handleButtonClick}>
        {showEmail ? 'Hide Email' : 'Show Email'}
      </button>
      {showEmail && (
        <div className='contact__email'>
          <p>{email}</p>
        </div>
      )}
    </section>
  );
}

export default Contact;
