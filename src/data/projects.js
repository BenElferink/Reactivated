import AbilisenseIcon from '../icons/Abilisense';
import AbilisenseImage from '../images/abilisense.png';
import QueueIcon from '../icons/Queue';
import GmailIcon from '../icons/Gmail';
import TwitterIcon from '../icons/Twitter';

const projectsData = [
  {
    nav: {
      title: 'Abilisense',
      path: '/abilisense',
      icon: AbilisenseIcon,
    },
    page: {
      title: 'Abilisense - internship',
      info:
        'I started as an intern at Abilisense - and created the website using Fullstack technologies, I had to convert old vanilla code to React, and some Python code to Node.js, eventually I developed a script with Python which is used on external sensors.',
      tech_stack: ['React.js', 'Node.js', 'MongoDB', 'socket.io', 'Python'],
      // github: 'https://github.com/belferink1996/',
      deployed: 'https://www.abilisense.com',
      preview: AbilisenseImage,
    },
  },

  {
    nav: {
      title: 'Queue',
      path: '/queue',
      icon: QueueIcon,
    },
    page: {
      title: 'Queue - SaaS',
      info:
        'Queue is a small startup I have developed with Aman Kuvera. It aims to be a Q&A solution for online teaching, Queue is a SaaS company (software as a service) FREE to use!',
      tech_stack: ['React.js', 'Node.js', 'MongoDB', 'socket.io'],
      github: 'https://github.com/belferink1996/Queue',
      deployed: 'https://queue-client.herokuapp.com',
      preview:
        'https://raw.githubusercontent.com/belferink1996/Queue/main/_README_img/dashboard.png',
    },
  },

  {
    nav: {
      title: 'Gmail',
      path: '/gmail',
      icon: GmailIcon,
    },
    page: {
      title: 'Gmail - clone',
      info:
        'This clone was built to practice Backend programming, using JavaScript to create a RESTful API. This clone does not really send or receive mail, yet the server behaves in a way to make you think you are communicating with someone.',
      tech_stack: ['React.js', 'Node.js', 'MongoDB'],
      github: 'https://github.com/belferink1996/MERN-Gmail-clone',
      deployed: 'https://gmail-clone-frontend.herokuapp.com',
      preview:
        'https://raw.githubusercontent.com/belferink1996/MERN-Gmail-clone/main/preview_mailbox.png',
    },
  },

  {
    nav: {
      title: 'Twitter',
      path: '/twitter',
      icon: TwitterIcon,
    },
    page: {
      title: 'Twitter - clone',
      info:
        'This clone was built to practice Fullstack programming, using JavaScript to create a RESTful API. With this clone you can create an account, follow other users, and post tweets, even with images!',
      tech_stack: ['React.js', 'Node.js', 'MongoDB'],
      github: 'https://github.com/belferink1996/MERN-Twitter-clone',
      deployed: 'https://twitter-clone-web.herokuapp.com',
      preview:
        'https://raw.githubusercontent.com/belferink1996/MERN-Twitter-clone/main/screenshot.png',
    },
  },
];

export default projectsData;
