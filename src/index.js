import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ResidentsState from './CONTEXT/state/ResidentsState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ResidentsState>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ResidentsState>
);

reportWebVitals();
