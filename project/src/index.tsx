import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';
import { nearbyOffers } from './mocks/nearby-offers';
import { store } from './store';

const Settings = {
  OFFERS_COUNT: 766,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        rentOffer = {Settings.OFFERS_COUNT}
        offers = {offers}
        reviews = {reviews}
        nearbyOffers = {nearbyOffers}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
