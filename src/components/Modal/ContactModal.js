import { useState } from 'react';
import * as emailjs from 'emailjs-com';
import Modal from '.';
import Form from '../Form';
import Input from '../Input';
import Button from '../Button';
import Loading from '../Loading';
import TextArea from '../TextArea';

const service_id = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const template_id = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const user_id = process.env.REACT_APP_EMAILJS_USER_ID;

export default function ContactModal({ closeModal }) {
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({});

  const handleSubmit = async () => {
    setIsSending(true);
    try {
      const response = await emailjs.send(service_id, template_id, formData, user_id);
      console.log(`✅ ${response.status} ${response.text}`);
      closeModal();
      alert('✅ Email sent');
    } catch (error) {
      console.error('❌', error);
      setIsSending(false);
      alert('❌ An unexpected error occured');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Modal closeModal={closeModal} width='530px'>
      <h2 style={{ color: 'var(--darkTextBold)' }}>Contact Me!</h2>

      <p style={{ margin: '7px 0', color: 'var(--darkTextBold)', fontSize: '14px' }}>
        • If you are interested in hiring my services as a developer. Please provide some details
        about the project.
        <br />
        <br />• If you want to learn how to develop websites or applications, I offer private
        lessons in Fullstack JavaScript.
        <br />
        <br />
        • Feel free to contact me with any topic! I'll be glad to hear from you!
        <br />
        <br />
      </p>

      <Form handleSubmit={handleSubmit}>
        <div
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
          }}>
          <div
            style={{
              flex: '1',
              display: 'flex',
              flexFlow: 'row wrap',
            }}>
            <Input
              label='Your name'
              name='name'
              value={formData['name']}
              formChange={handleChange}
              required
            />
            <Input
              label='Your email'
              type='email'
              name='email'
              value={formData['email']}
              formChange={handleChange}
              required
            />
          </div>

          <div style={{ flex: '0.6', display: 'grid', placeItems: 'center' }}>
            {isSending ? (
              <Loading />
            ) : (
              <Button
                type='submit'
                disabled={!formData['name'] || !formData['email'] || !formData['message']}>
                Send
              </Button>
            )}
          </div>
        </div>

        <TextArea
          label='Your message...'
          name='message'
          value={formData['message']}
          formChange={handleChange}
          required
        />
      </Form>
    </Modal>
  );
}
