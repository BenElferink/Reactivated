import { lazy, Suspense, useState } from 'react';
import styles from './ContactMe.module.css';
const ContactModal = lazy(() => import('../ContactModal'));

export default function ContactMe() {
  const [contactModal, setContactModal] = useState(false);

  return (
    <div className={styles.component}>
      <button onClick={() => setContactModal(true)}>Contact Me</button>
      {contactModal && (
        <Suspense fallback={<div />}>
          <ContactModal closeModal={() => setContactModal(false)} />
        </Suspense>
      )}
    </div>
  );
}
