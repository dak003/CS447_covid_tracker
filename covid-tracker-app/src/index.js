import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Heatmap from './Heatmap';
import CovidState from './CovidState';
import VaccineState from './VaccineState';
import CloseState from './CloseState';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <Heatmap />,
  document.getElementById('heatmap')
);

ReactDOM.render(
  <CovidState />,
  document.getElementById('covid-selector')
);

ReactDOM.render(
  <VaccineState />,
  document.getElementById('vaccine-selector')
);

ReactDOM.render(
  <CloseState />,
  document.getElementById('close-selector')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
