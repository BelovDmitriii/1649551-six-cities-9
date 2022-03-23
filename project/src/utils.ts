import { City, OfferType } from './types/offer';

export const filterCity = (offers: OfferType[], city: City) => offers.filter((offer) => offer.city.name === city.name);

export const SortType = {
  POPULAR: 'Popular',
  PRICE_TO_HIGH: 'Price: low to high',
  PRICE_TO_LOW: 'Price: high to low',
  TOP: 'Top rated first',
};

export const sortingType = Object.values(SortType);

export const sortOffers = (offers: OfferType[], sortType: string) => {
  const sortedOffers = offers.slice();
  switch (sortType) {
    case SortType.POPULAR:
      return sortedOffers;
    case SortType.PRICE_TO_LOW:
      return sortedOffers.sort((a, b) => b.price - a.price);
    case SortType.PRICE_TO_HIGH:
      return sortedOffers.sort((a, b) => a.price - b.price);
    case SortType.TOP:
      return sortedOffers.sort((a, b) => b.rating - a.rating);
    default:
      return sortedOffers;
  }
};
