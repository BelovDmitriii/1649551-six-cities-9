import { createReducer } from '@reduxjs/toolkit';
import { changeCity, setNearbyOffers, setNewReview, setSortType, loadOffers, requireAutorization } from './action';
import { INITIAL_CITY, AutorizationStatus } from '../const';
import { City, OfferType, ReviewType } from '../types/offer';
import { filterCity, SortType } from '../utils';

type InitialStateType = {
  currentCity: City,
  filteredOffers: OfferType[],
  offers: OfferType[],
  nearbyOffers: OfferType[],
  reviews: ReviewType[],
  sortType: string,
  isDataLoaded: boolean,
  authorizationStatus: AutorizationStatus,
}

const initialState: InitialStateType = {
  currentCity: INITIAL_CITY,
  filteredOffers: [],
  offers: [],
  nearbyOffers: [],
  reviews: [],
  sortType: SortType.POPULAR,
  isDataLoaded: false,
  authorizationStatus: AutorizationStatus.Unknown,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    const city = action.payload;
    state.currentCity = city;
    state.filteredOffers = filterCity(state.offers, city);
  })
    .addCase( setNearbyOffers, (state, action) => {
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
      state.isDataLoaded = true;
    })
    .addCase(requireAutorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {reducer};
