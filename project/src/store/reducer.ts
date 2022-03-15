import { createReducer } from '@reduxjs/toolkit';
import { changeCity } from './action';
import { INITIAL_CITY } from '../const';
import { offers } from '../mocks/offers';

const initialState = {
  currentCity: INITIAL_CITY,
  offers: offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    });
});

export {reducer};
