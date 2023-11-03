import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './styles';

ReactDOM.createRoot(document.getElementById('pokemon') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
