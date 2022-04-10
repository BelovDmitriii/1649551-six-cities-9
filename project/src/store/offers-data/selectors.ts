import { NameSpace } from '../../const';
import { ReviewType } from '../../types/offer';
import { OfferType } from '../../types/offer';
import { State } from '../../types/state';
import { Favorite } from '../../types/favorite';

export const getOffer = (state: State): OfferType[] => state[NameSpace.Data].offers;
export const getNearbyOffers = (state: State): OfferType[] => state[NameSpace.Data].nearbyOffers;
export const getOfferReviews = (state: State): ReviewType[] => state[NameSpace.Data].reviews;
export const getLoadOfferStatus = (state: State): boolean => state[NameSpace.Data].isOfferLoaded;
export const getLoadReviewsStatus = (state: State): boolean => state[NameSpace.Data].isDataLoaded;
export const getCurrentOffer = (state: State): OfferType | null => state[NameSpace.Data].currentOffer;
export const getCurrentOfferLoaded = (state: State):boolean => state[NameSpace.Data].isCurrentOfferLoaded;
export const getFavoriteOffers = (state: State): Favorite[] => state[NameSpace.Data].favorites;
export const getFavoriteLoadStatus = (state: State): boolean => state[NameSpace.Data].isFavoritesLoaded;
