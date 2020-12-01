import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './style/style.css';
import MobileError from './components/MobileError';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import Login from './components/modals/Login';
import Contact from './components/modals/Contact';
import Calculator from './components/webapps/Calculator/Calculator';
import CurrencyConverter from './components/webapps/CurrencyConverter/CurrencyConverter';

function App() {
  const [page, setPage] = useState('/');
  const [loginModal, setLoginModal] = useState(false);
  const [contactModal, setContactModal] = useState(false);

  const toggleLoginModal = () => {
    setLoginModal(!loginModal);
  };

  const toggleContactModal = () => {
    setContactModal(!contactModal);
  };

  return (
    <>
      <MobileError />
      <div className='Reactivated'>
        <Router>
          <Header toggleLoginModal={toggleLoginModal} toggleContactModal={toggleContactModal} />
          <Nav page={page} />
          <main className='main'>
            <Switch>
              <Route exact path='/' component={() => <Home setPage={setPage} toggleLoginModal={toggleLoginModal} />} />
              <Route exact path='/calculator' component={() => <Calculator setPage={setPage} />} />
              <Route exact path='/currency-converter' component={() => <CurrencyConverter setPage={setPage} />} />
            </Switch>
          </main>
        </Router>
        {loginModal && <Login toggleLoginModal={toggleLoginModal} />}
        {contactModal && <Contact toggleContactModal={toggleContactModal} />}
      </div>
    </>
  );
}

export default App;
