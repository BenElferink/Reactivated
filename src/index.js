import React from 'react';
import ReactDOM from 'react-dom';
import { UsersProvider } from './ContextAPI';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <UsersProvider>
      <App />
    </UsersProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
