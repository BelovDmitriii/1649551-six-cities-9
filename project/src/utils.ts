import { City, OfferType } from './types/offer';

export const filterCity = (offers: OfferType[], city: City) => offers.filter((offer) => offer.city.name === city.name);
