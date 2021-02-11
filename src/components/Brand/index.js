import styles from './Brand.module.css';
import Alien from './alien.svg';

export default function index() {
  return (
    <div className={styles.component}>
      <img src={Alien} alt='Alien' />
      reactivated.io
    </div>
  );
}
