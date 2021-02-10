import styles from './styles/Navbar.module.css';
import NavItem from './NavItem';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import QueueIcon from './icons/Queue';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
// https://material-ui.com/components/material-icons/

export default function Navbar() {
  return (
    <nav className={styles.component + ' scroll'}>
      <div style={{ height: '30px' }} />
      <NavItem title='Home' path='/' Icon={HomeRoundedIcon} />
      <NavItem title='Queue' path='/queue' Icon={QueueIcon} />
      <NavItem title='Gmail clone' path='/gmail' Icon={EmailRoundedIcon} />
    </nav>
  );
}
