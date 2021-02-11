import styles from './Header.module.css';
import Brand from '../../components/Brand';
import ContactMe from '../../components/ContactMe';

export default function Header() {
  return (
    <header className={styles.component}>
      <Brand />
      <ContactMe />
    </header>
  );
}
