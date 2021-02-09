import styles from './styles/Navbar.module.css';
import NavItem from './NavItem';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SportsEsportsRoundedIcon from '@material-ui/icons/SportsEsportsRounded';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import QueueIcon from './icons/Queue';
// https://material-ui.com/components/material-icons/

export default function Navbar() {
  return (
    <nav className={styles.component + ' scroll'}>
      <div style={{ height: '30px' }} />
      <NavItem title='Home' path='/' Icon={HomeRoundedIcon} />
      <NavItem title='Sudoku' path='/sudoku' Icon={SportsEsportsRoundedIcon} />
      <NavItem title='Gmail' path='/gmail' Icon={EmailRoundedIcon} />
      <NavItem title='Queue' path='/queue' Icon={QueueIcon} />
    </nav>
  );
}
