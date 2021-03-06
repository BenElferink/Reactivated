import Modal from '.';
import ContactForm from '../Form/ContactForm';

export default function ContactModal({ closeModal }) {
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
        • Feel free to contact me with any topic!
        <br />
        I'll be glad to hear from you!
      </p>

      <ContactForm closeModal={closeModal} />
    </Modal>
  );
}
