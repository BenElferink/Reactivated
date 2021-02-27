import ProjectPage from '.';

export default function Gmail() {
  return (
    <ProjectPage
      title='Gmail - clone'
      info='This clone was built to practice Backend programming, using JavaScript to create a RESTful API. This clone does not really send or receive mail, yet the server behaves in a way to make you think you are communicating with someone.'
      techStack={['React.js', 'Node.js', 'MongoDB']}
      github='https://github.com/belferink1996/MERN-Gmail-clone'
      deployed='https://gmail-clone-frontend.herokuapp.com'
      preview='https://raw.githubusercontent.com/belferink1996/MERN-Gmail-clone/main/preview_mailbox.png'
    />
  );
}
