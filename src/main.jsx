import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import './index.css';
import './styles/main.css'; // Import the CSS entry file

ReactDOM.createRoot(document.getElementById('pokemon')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
