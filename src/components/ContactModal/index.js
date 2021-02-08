import styles from './styles/ContactModal.module.css';
import ContactForm from '../ContactForm';

export default function ContactModal({ closeModal }) {
  return (
    <div className={styles.modalBg}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={closeModal}>
          &times;
        </button>

        <h2>Contact Me!</h2>
        <p>
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
      </div>
    </div>
  );
}
