import { createReducer } from '@reduxjs/toolkit';
import { changeCity, setNearbyOffers, setNewReview, setSortType, loadOffers } from './action';
import { INITIAL_CITY } from '../const';
import { offers as allOffers } from '../mocks/offers';
import { reviews } from '../mocks/reviews';
import { filterCity, SortType } from '../utils';
import { nearbyOffers } from '../mocks/nearby-offers';

const initialState = {
  currentCity: INITIAL_CITY,
  filteredOffers: filterCity(allOffers, INITIAL_CITY),
  offers: allOffers,
  nearbyOffers: nearbyOffers,
  reviews: reviews,
  sortType: SortType.POPULAR,
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
    })
    .addCase(setSortType, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export {reducer};
