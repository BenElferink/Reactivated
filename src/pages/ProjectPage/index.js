import styles from './styles/ProjectPage.module.css';
import { GitHubButton, LaunchButton } from './Buttons';

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
        {github && <GitHubButton href={github} />}
        {deployed && <LaunchButton href={deployed} />}
      </div>

      <img className={styles.preview} src={preview} alt='preview' />
    </main>
  );
}
