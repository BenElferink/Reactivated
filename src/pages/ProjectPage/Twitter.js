import ProjectPage from '.';

export default function Gmail() {
  return (
    <ProjectPage
      title='Twitter - clone'
      info='This clone was built to practice Fullstack programming, using JavaScript to create a RESTful API. With this clone you can create an account, follow other users, and post tweets, even with images!'
      techStack={['React.js', 'Node.js', 'MongoDB']}
      github='https://github.com/belferink1996/MERN-Twitter-clone'
      deployed='https://twitter-clone-web.herokuapp.com'
      preview='https://raw.githubusercontent.com/belferink1996/MERN-Twitter-clone/main/screenshot.png'
    />
  );
}
