import { useState } from 'react';
import styles from './ContactForm.module.css';
import * as emailjs from 'emailjs-com';
import Loading from '../Loading';

export default function ContactForm({ closeModal }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSending(true);

    try {
      const response = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          name: name,
          email: email,
          message: message,
        },
        process.env.REACT_APP_EMAILJS_USER_ID,
      );

      console.log(`✅ ${response.status} ${response.text}`);
      closeModal();
      alert('✅ Email sent');
    } catch (error) {
      console.error('❌', error);
      setIsSending(false);
      alert('❌ An unexpected error occured');
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <div className={styles.rowHalf}>
          <label htmlFor='name'>Name</label>
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

          <label htmlFor='email'>Email</label>
          <input
            id='email'
            name='email'
            type='email'
            placeholder='john.doe@example.com'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className={styles.rowHalf}>
          {isSending ? (
            <Loading />
          ) : (
            <button type='submit' disabled={name === '' || email === '' || message === ''}>
              Send
            </button>
          )}
        </div>
      </div>

      <textarea
        name='message'
        type='text'
        placeholder='Your message goes here...'
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
    </form>
  );
}
