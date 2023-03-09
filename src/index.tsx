import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { HashRouter as Router } from 'react-router-dom';
import { App } from './App';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById('root'),
);
