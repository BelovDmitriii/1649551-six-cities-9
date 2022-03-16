import { createAction } from '@reduxjs/toolkit';
import { City, OfferType } from '../types/offer';

export const changeCity = createAction< City >('main/changeCity');
export const changeOffers = createAction< OfferType[] >('main/changeOffer');
