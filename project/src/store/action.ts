import { createAction } from '@reduxjs/toolkit';
import { City, OfferType } from '../types/offer';
import { ReviewType } from '../types/offer';
import { AutorizationStatus } from '../const';

export const changeCity = createAction<City>('main/changeCity');
export const setNearbyOffers = createAction<OfferType[]>('main/nearbyOffers');
export const setNewReview = createAction<ReviewType[]>('main/review');
export const setSortType = createAction<string>('main/setSortType');
export const loadOffers = createAction<OfferType[]>('data/loadOffers');
export const requireAutorization = createAction<AutorizationStatus>('user/requireAutorization');
