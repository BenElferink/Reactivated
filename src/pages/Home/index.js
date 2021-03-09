import { useState } from 'react';
import LinkedInIcon from '../../icons/LinkedIn';
import GitHubIcon from '../../icons/GitHub';

export default function Home() {
  const textWrapStyles = {
    width: '100%',
    marginTop: '15vh',
    textAlign: 'center',
  };

  const titleStyles = {
    color: 'var(--accentGreen)',
    textShadow: '1px 1px var(--accentBlue)',
  };

  const textStyles = {
    margin: '0.5em 0',
    color: 'var(--darkTextBold)',
    textShadow: '0.5px 0.5px var(--accentBlue)',
    fontSize: '18px',
  };

  const socialStyles = {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <main className='scroll'>
      <div style={textWrapStyles}>
        <h2 style={titleStyles}>Hi, my name is Ben Elferink,</h2>
        <h1 style={titleStyles}>I'm a Web & App Developer!</h1>
        <p style={textStyles}>Welcome to my portfolio!</p>
      </div>

      <div style={socialStyles}>
        <SocialLink href='https://www.linkedin.com/in/ben-elferink-37ba251b9' Icon={LinkedInIcon} />
        <SocialLink href='https://github.com/belferink1996' Icon={GitHubIcon} />
      </div>
    </main>
  );
}

function SocialLink({ href, Icon }) {
  const [hover, setHover] = useState(false);

  const iconStyles = {
    width: '30px',
    height: '30px',
    margin: '5px',
    fill: hover ? 'var(--darkTextNeutral)' : 'var(--darkTextBold)',
    cursor: 'pointer',
  };

  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <Icon style={iconStyles} />
    </a>
  );
}
