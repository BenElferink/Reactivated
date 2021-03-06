import { useState } from 'react';
import * as emailjs from 'emailjs-com';
import Form from '.';
import Input from '../Input';
import Loading from '../Loading';
import Button from '../Button';

const service_id = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const template_id = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const user_id = process.env.REACT_APP_EMAILJS_USER_ID;

export default function ContactForm({ closeModal }) {
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

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

  return (
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
            label='Name &nbsp; (John Doe)'
            name='name'
            value={formData['name']}
            formChange={handleChange}
            required
          />
          <Input
            label='Email &nbsp; (john.doe@example.com)'
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

      <Input
        textArea
        label='Your message goes here...'
        name='message'
        value={formData['message']}
        formChange={handleChange}
        required
      />
    </Form>
  );
}
