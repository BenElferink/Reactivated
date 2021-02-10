import styles from './styles/Buttons.module.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchRoundedIcon from '@material-ui/icons/LaunchRounded';

export function GitHubButton({ href }) {
  return (
    <a href={href} target='_blank' rel='noreferrer' className={styles.btn}>
      <GitHubIcon fontSize='large' />
      Source Code
    </a>
  );
}

export function LaunchButton({ href }) {
  return (
    <a href={href} target='_blank' rel='noreferrer' className={styles.btn}>
      <LaunchRoundedIcon fontSize='large' />
      Launch App
    </a>
  );
}
