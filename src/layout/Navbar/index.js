import styles from './Navbar.module.css';
import NavItem from '../../components/NavItem';
import HomeIcon from '../../icons/Home';
import QueueIcon from '../../icons/Queue';
import EmailIcon from '../../icons/Email';

export default function Navbar() {
  return (
    <nav className={styles.component + ' scroll'}>
      <div style={{ height: '30px' }} />
      <NavItem title='Home' path='/' Icon={HomeIcon} />
      <NavItem title='Queue' path='/queue' Icon={QueueIcon} />
      <NavItem title='Gmail' path='/gmail' Icon={EmailIcon} />
    </nav>
  );
}
