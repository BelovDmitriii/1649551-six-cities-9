import { createReducer } from '@reduxjs/toolkit';
import { changeCity, setNearbyOffers, setNewReview } from './action';
import { INITIAL_CITY } from '../const';
import { offers } from '../mocks/offers';
import { reviews } from '../mocks/reviews';
import { filterCity } from '../utils';
import { nearbyOffers } from '../mocks/nearby-offers';

const initialState = {
  currentCity: INITIAL_CITY,
  filteredOffers: filterCity(offers, INITIAL_CITY),
  offers: offers,
  nearbyOffers: nearbyOffers,
  reviews: reviews,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    const city = action.payload;
    state.currentCity = city;
    state.filteredOffers = filterCity(state.offers, city);
  })
    .addCase( setNearbyOffers, (state,action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(setNewReview, (state, action) => {
      state.reviews = action.payload;
    });
});

export {reducer};
