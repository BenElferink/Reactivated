import styles from './ProjectPage.module.css';
import GitHubIcon from '../../icons/GitHub';
import LaunchIcon from '../../icons/Launch';

export default function ProjectPage({ title, info, techStack, github, deployed, preview }) {
  return (
    <main className='scroll'>
      <article className={styles.article}>
        <h3>{title}</h3>
        <p>{info}</p>

        <h6>Technologies used:</h6>
        <ul>
          {techStack?.map((tech, i) => (
            <li key={i}>{tech}</li>
          ))}
        </ul>
      </article>

      <div className={styles.buttons}>
        {github && (
          <a href={github} target='_blank' rel='noreferrer' className={styles.btn}>
            <GitHubIcon />
            Source Code
          </a>
        )}
        {deployed && (
          <a href={deployed} target='_blank' rel='noreferrer' className={styles.btn}>
            <LaunchIcon />
            Launch App
          </a>
        )}
      </div>

      <img className={styles.preview} src={preview} alt='preview' />
    </main>
  );
}
