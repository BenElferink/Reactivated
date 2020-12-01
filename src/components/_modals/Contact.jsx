import React, { useState } from 'react';
import Modal from './Modal';
import * as emailjs from 'emailjs-com';

function Contact({ toggleContactModal }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    let SERVICE_ID = 'service_e0yuqlw';
    let TEMPLATE_ID = 'template_mn955tg';
    let USER_ID = 'user_9t9jbVPQaPZDjV271UPBz';
    let data = {
      name: name,
      email: email,
      message: message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, data, USER_ID).then(
      (response) => {
        console.log(response.status, response.text);
        toggleContactModal();
      },
      (err) => {
        console.log(err);
      }
    );

    setSent(true);
  }

  return (
    <Modal toggleModal={toggleContactModal} hideX={sent}>
      {sent ? (
        <div className='modal-contact' style={{ display: 'grid', placeItems: 'center' }}>
          <p className='sending'>Your message is being sent...</p>
        </div>
      ) : (
        <div className='modal-contact'>
          <h2>Contact Me!</h2>
          <p>
            Feel free to contact me with any topic!
            <br />
            If you're a developer, and have any questions, I'll try to help you.
            <br />
            If you're looking for a developer, and are interested in hiring my services, be sure to provide a valid email so we can discuss the details.
            <br />
            Or maybe you'd just like to send some warm words...
            <br />
            Whatever the topic, I'll be glad to hear from you :)
          </p>

          <form>
            <div className='row'>
              <div className='group'>
                <div className='inp-group'>
                  <input
                    id='name'
                    name='name'
                    type='text'
                    placeholder='John Doe'
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  {name === '' && <label htmlFor='name'>Your name</label>}
                </div>
                <div className='inp-group'>
                  <input
                    id='email'
                    name='email'
                    type='text'
                    placeholder='john.doe@example.com'
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  {email === '' && <label htmlFor='email'>Your email</label>}
                </div>
              </div>
              <button type='submit' onClick={handleSubmit}>
                Send
              </button>
            </div>
            <textarea
              name='message'
              type='text'
              placeholder='Your message goes here...'
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}></textarea>
          </form>
        </div>
      )}
    </Modal>
  );
}

export default Contact;
