import React from 'react';
import ReactDOM from 'react-dom/client'; // Importe de 'react-dom/client'
import './index.css';
import Calculator from './main/Calculator';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render( 
  <React.StrictMode> 
    <Calculator /> 
  </React.StrictMode>
);

reportWebVitals();