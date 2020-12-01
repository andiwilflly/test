import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
// Mock API
import "API/api";
// Components
import App from './App';
// Styles
import "styles/index.scss";


window.onerror = function(errorMsg, url, lineNumber) {
    document.body.innerHTML = `<div style="padding: 20px; color: red">${errorMsg}</div>`;
    return false;
};


ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
