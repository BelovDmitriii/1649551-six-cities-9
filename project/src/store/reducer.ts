import { createReducer } from '@reduxjs/toolkit';
import { changeCity, setNearbyOffers, setNewReview, setSortType, loadOffers, requireAutorization, loadReviews, loadCurrentOffer } from './action';
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
  currentOffer: OfferType | null,
  isOfferLoaded: boolean,
  isNearbyOffersLoaded: boolean,
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
  currentOffer: null,
  isOfferLoaded: false,
  isNearbyOffersLoaded: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    const city = action.payload;
    state.currentCity = city;
    state.filteredOffers = filterCity(state.offers, city);
  })
    .addCase( setNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
      state.isNearbyOffersLoaded = true;
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
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(loadCurrentOffer, (state, action) => {
      state.currentOffer = action.payload;
      state.isOfferLoaded = true;
    });
});

export {reducer};
