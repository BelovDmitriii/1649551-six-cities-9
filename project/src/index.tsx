import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { offers } from './mocks/offers';

const Settings = {
  OFFERS_COUNT: 766,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      rentOffer = {Settings.OFFERS_COUNT}
      offers = {offers}
    />
  </React.StrictMode>,
  document.getElementById('root'));
