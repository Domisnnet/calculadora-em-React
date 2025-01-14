import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Calculator from './main/Calculator';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <div>
        <React.StrictMode>
            <Calculator />
        </React.StrictMode>
    </div>,
    document.getElementById('root')
);

reportWebVitals();