import AbilisenseIcon from "../icons/Abilisense";
import AbilisenseImage from "../images/abilisense.png";
import RaionaIcon from "../icons/Raiona";
import RaionaImage from "../images/raiona.png";
import QueueIcon from "../icons/Queue";
import QueueImage from "../images/queue.png";
import GmailIcon from "../icons/Gmail";
import GmailImage from "../images/gmail.png";
import TwitterIcon from "../icons/Twitter";
import TwitterImage from "../images/twitter.png";

const projectsData = [
  {
    nav: {
      title: "Abilisense",
      path: "/abilisense",
      icon: AbilisenseIcon,
    },
    page: {
      title: "Abilisense - from internship, to Team Lead",
      description:
        "I started as an intern at Abilisense - and created the company's website and platform from scratch. Soon enough I developed the company's API and database. I also created a software in Python, responsible for the company's sound recognition technology. I have built multiple micro services, and provided a mobile application. All services communicate and interact with each other in brilliant ways, whilst using real-time data, and authentication created by myself. Today I'm a Fullstack Team Lead in the company, and I help new developers gain the knowledge and experience I gained.",
      tech_stack: [
        "Next.js",
        "React.js",
        "React Native",
        "Node.js",
        "MongoDB",
        "Socket.io",
        "Python3",
      ],
      deployed: "https://www.abilisense.com",
      preview: AbilisenseImage,
    },
  },

  {
    nav: {
      title: "Raiona",
      path: "/raiona",
      icon: RaionaIcon,
    },
    page: {
      title: "Raiona - freelance",
      description:
        "My partner (Alex Eklund) and I, created this landing-page using the latest technologies. We used Next.js primarly, and designed a completely different mobile version of this application/website.",
      tech_stack: ["Next.js", "React.js"],
      repo: "https://github.com/belferink1996/raiona-web",
      deployed: "https://raiona-web.vercel.app/",
      preview: RaionaImage,
    },
  },

  {
    nav: {
      title: "Queue",
      path: "/queue",
      icon: QueueIcon,
    },
    page: {
      title: "Queue - SaaS",
      description:
        "Queue is a small non-profit startup, my partner (Aman Kuvera) and I have developed. It aims to be a Q&A solution for online teaching, whilst using complete privacy, and real-time data.",
      tech_stack: ["React.js", "Node.js", "MongoDB", "socket.io"],
      repo: "https://github.com/belferink1996/Queue",
      deployed: "https://queue-client.herokuapp.com",
      preview: QueueImage,
    },
  },

  {
    nav: {
      title: "Gmail",
      path: "/gmail",
      icon: GmailIcon,
    },
    page: {
      title: "Gmail - clone",
      description:
        "This clone was built to practice Fullstack programming, using JavaScript to create a RESTful API. This clone does not really send or receive mail, yet the server behaves in a way to make you think you are communicating with someone.",
      tech_stack: ["React.js", "Node.js", "MongoDB"],
      repo: "https://github.com/belferink1996/MERN-Gmail-clone",
      deployed: "https://gmail-clone-frontend.herokuapp.com",
      preview: GmailImage,
    },
  },

  {
    nav: {
      title: "Twitter",
      path: "/twitter",
      icon: TwitterIcon,
    },
    page: {
      title: "Twitter - clone",
      description:
        "This clone was built to practice Fullstack programming, using JavaScript to create a RESTful API. With this clone you can create an account, follow other users, and post tweets, even with images!",
      tech_stack: ["React.js", "Node.js", "MongoDB"],
      repo: "https://github.com/belferink1996/MERN-Twitter-clone",
      deployed: "https://twitter-clone-web.herokuapp.com",
      preview: TwitterImage,
    },
  },
];

export default projectsData;
