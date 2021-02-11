import styles from './Home.module.css';
import myself from '../../images/me_profile.jpeg';
import LinkedInIcon from '../../icons/LinkedIn';
import GitHubIcon from '../../icons/GitHub';

export default function Home() {
  return (
    <main className='scroll'>
      <div className={styles.heading}>
        <h2>Hi, my name is Ben Elferink,</h2>
        <h1>I'm a Web & App Developer!</h1>
        <p>Welcome to my portfolio!</p>
      </div>

      <div className={styles.image}>
        <img src={myself} alt='me' />
        <div />
      </div>

      <div className={styles.socials}>
        <a href='https://github.com/belferink1996' target='_blank' rel='noreferrer'>
          <GitHubIcon />
        </a>
        <a
          href='https://www.linkedin.com/in/ben-elferink-37ba251b9'
          target='_blank'
          rel='noreferrer'>
          <LinkedInIcon />
        </a>
      </div>
    </main>
  );
}
