import { createReducer } from '@reduxjs/toolkit';
import { changeCity } from './action';
import { INITIAL_CITY } from '../const';

const initialState = {
  currentCity: INITIAL_CITY,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    });
});

export {reducer};
