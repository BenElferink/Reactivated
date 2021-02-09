import styles from './styles/GithubButton.module.css';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function GithubButton({ href }) {
  return (
    <a href={href} target='_blank' rel='noreferrer' className={styles.btn}>
      <GitHubIcon fontSize='large' /> Source Code
    </a>
  );
}
