import './index.scss';

import { StrictMode } from 'react';
import { render } from 'react-dom';

import TravelApp from './components/TravelApp/TravelApp';
import reportWebVitals from './reportWebVitals';

render(
  <StrictMode>
    <TravelApp />
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
