import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/index.css';
import useMediaQuery from './hooks/useMediaQuery';
import Particles from './components/Particles';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage';
import projectsData from './data/projects';
import NoMobileSupport from './pages/NoMobileSupport';

export default function App() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  if (isMobile) {
    return <NoMobileSupport />;
  } else {
    return (
      <div className='App'>
        <Router>
          <Header />
          <Navbar />

          <Switch>
            <Route exact path='/' component={Home} />
            {projectsData.map((item) => (
              <Route key={item.nav.path} path={item.nav.path}>
                <ProjectPage
                  title={item.page.title}
                  description={item.page.description}
                  techStack={item.page.tech_stack}
                  github={item.page.github}
                  deployed={item.page.deployed}
                  preview={item.page.preview}
                />
              </Route>
            ))}
          </Switch>
        </Router>

        <Particles />
      </div>
    );
  }
}
