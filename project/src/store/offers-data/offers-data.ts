import { createSlice } from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import { OfferType, ReviewType } from '../../types/offer';

type InitialStateType = {
  offers: OfferType[];
  filteredOffers: OfferType[];
  nearbyOffers: OfferType[];
  reviews: ReviewType[];
  isDataLoaded: boolean;
  currentOffer: OfferType | null;
  isOfferLoaded: boolean;
  isCurrentOfferLoaded: boolean;
  favoriteOffers: OfferType[];
}

const initialState: InitialStateType = {
  offers: [],
  filteredOffers:[],
  nearbyOffers: [],
  currentOffer: null,
  reviews: [],
  isOfferLoaded: false,
  isDataLoaded: false,
  isCurrentOfferLoaded: false,
  favoriteOffers:[],
};

export const offersData = createSlice({
  name: NameSpace.data,
  initialState,
  reducers: {
    loadOffers: (state, action) => {
      state.offers = action.payload;
      state.isOfferLoaded = true;
    },
    loadFavoriteOffers: (state, action) => {
      state.favoriteOffers = action.payload;
    },
    loadNearbyOffers: (state, action) => {
      state.nearbyOffers = action.payload;
    },
    loadReviews: (state, action) => {
      state.reviews = action.payload;
      state.isDataLoaded = true;
    },
    loadCurrentOffer: (state, action) => {
      state.currentOffer = action.payload;
      state.isCurrentOfferLoaded = true;
    },
  },
});

export const {loadOffers, loadFavoriteOffers, loadNearbyOffers, loadReviews, loadCurrentOffer} = offersData.actions;
