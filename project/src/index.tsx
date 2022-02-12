import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Settings = {
  OFFERS_COUNT: 766,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      rentOffer = {Settings.OFFERS_COUNT}
    />
  </React.StrictMode>,
  document.getElementById('root'));
