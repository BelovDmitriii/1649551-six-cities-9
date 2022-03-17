import { createReducer } from '@reduxjs/toolkit';
import { changeCity } from './action';
import { INITIAL_CITY } from '../const';
import { offers } from '../mocks/offers';
import { filterCity } from '../utils';

const initialState = {
  currentCity: INITIAL_CITY,
  filteredOffers: filterCity(offers, INITIAL_CITY),
  offers: offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    const { city } = action.payload;
    state.currentCity = city;
    state.filteredOffers = filterCity(state.offers, city);
  });
});

export {reducer};
