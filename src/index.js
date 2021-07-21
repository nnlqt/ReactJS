import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const text="Any text for message"
ReactDOM.render(
  <React.StrictMode>
    <App name="GeekBrains" text={text} />
  </React.StrictMode>,
  document.getElementById('root')
);


