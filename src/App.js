import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/styles.css';
import useMediaQuery from './hooks/useMediaQuery';
import Header from './components/Header';
import Navbar from './components/Navbar';
const NoMobileSupport = lazy(() => import('./components/NoMobileSupport'));
const Home = lazy(() => import('./pages/Home'));
const Sudoku = lazy(() => import('./pages/Sudoku'));

export default function App() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  if (isMobile) {
    return (
      <LazyLoad>
        <NoMobileSupport />;
      </LazyLoad>
    );
  } else {
    return (
      <div className='App'>
        <Router>
          <Header />
          <Navbar />

          <LazyLoad>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/sudoku' component={Sudoku} />
            </Switch>
          </LazyLoad>
        </Router>
      </div>
    );
  }
}

const LazyLoad = ({ children }) => <Suspense fallback={<div />}>{children}</Suspense>;
