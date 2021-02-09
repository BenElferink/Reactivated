import { useHistory } from 'react-router-dom';
import { lazy, Suspense, useState } from 'react';
import styles from './styles/Header.module.css';
import Alien from './icons/alien.svg';
const ContactModal = lazy(() => import('../../components/ContactModal'));

export default function Header() {
  const history = useHistory();
  const [contactModal, setContactModal] = useState(false);
  const toggleContactModal = () => setContactModal(!contactModal);

  return (
    <header className={styles.component}>
      <div className={styles.branding} onClick={() => history.push('/')}>
        <img src={Alien} alt='Alien' />
        reactivated.io
      </div>

      <div className={styles.right}>
        <button onClick={toggleContactModal}>Contact Me</button>

        {contactModal && (
          <Suspense fallback={<div />}>
            <ContactModal closeModal={toggleContactModal} />
          </Suspense>
        )}
      </div>
    </header>
  );
}
