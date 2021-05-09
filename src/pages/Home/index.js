import styles from "./Home.module.css";
import LinkedInIcon from "../../icons/LinkedIn";
import GitHubIcon from "../../icons/GitHub";
import TwitterIcon from "../../icons/Twitter";

export default function Home() {
  return (
    <main className='scroll'>
      <div className={styles.textWrap}>
        <h2 className={styles.title}>Hi, my name is Ben Elferink,</h2>
        <h1 className={styles.title}>I'm a Web & App Developer!</h1>
        <p className={styles.text}>
          Welcome to my portfolio!
          <br />
          Grab a coffee ☕️ and enjoy my projects
        </p>
      </div>

      <div className={styles.socials}>
        <SocialLink href='https://www.linkedin.com/in/ben-elferink-37ba251b9' Icon={LinkedInIcon} />
        <SocialLink href='https://github.com/belferink1996' Icon={GitHubIcon} />
        <SocialLink href='https://twitter.com/BenElferink' Icon={TwitterIcon} />
      </div>
    </main>
  );
}

function SocialLink({ href, Icon }) {
  return (
    <a href={href} target='_blank' rel='noreferrer'>
      <Icon className={styles.icon} />
    </a>
  );
}
