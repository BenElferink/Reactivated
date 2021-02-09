import styles from './styles/Modal.module.css';

export default function Modal({ closeModal, children, width }) {
  return (
    <div className={styles.modalBg}>
      <div className={styles.modal} style={{ width: width || '420px' }}>
        <button className={styles.close} onClick={closeModal}>
          &times;
        </button>

        {children}
      </div>
    </div>
  );
}
