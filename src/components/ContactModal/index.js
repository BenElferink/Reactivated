import styles from './styles/ContactModal.module.css';
import ContactForm from './ContactForm';
import Modal from '../Modal';

export default function ContactModal({ closeModal }) {
  return (
    <Modal closeModal={closeModal} width='530px'>
      <h2 className={styles.title}>Contact Me!</h2>

      <p className={styles.text}>
        Feel free to contact me with any topic!
        <br />
        Maybe you're a developer, and have some questions...
        <br />
        Maybe you're looking for a developer, and are interested in hiring my services...
        <br />
        Maybe you'd just like to send some kind words...
        <br />
        Whatever the topic, I'll be glad to hear from you!
      </p>

      <ContactForm closeModal={closeModal} />
    </Modal>
  );
}
