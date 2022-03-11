import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';
import { nearbyOffers } from './mocks/nearby-offers';

const Settings = {
  OFFERS_COUNT: 766,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      rentOffer = {Settings.OFFERS_COUNT}
      offers = {offers}
      reviews = {reviews}
      nearbyOffers = {nearbyOffers}
    />
  </React.StrictMode>,
  document.getElementById('root'));
