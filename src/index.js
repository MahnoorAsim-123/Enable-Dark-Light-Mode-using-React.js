import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import EnableMode from "./enableDarkMode.js";

ReactDOM.render(
  <React.StrictMode>
    <EnableMode />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
