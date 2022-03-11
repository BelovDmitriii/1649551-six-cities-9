type LocationType = {
  latitude: number
  longitude: number
  zoom: number
}

export type City = {
  location: LocationType
  name: string;
}

export type OfferType = {
  bedrooms: number,
  city:City,
  description: string,
  goods: string[],
  host: {
    avatarUrl: string
    id: number
    isPro: boolean
    name: string
  },
  id: number,
  images: string[],
  isFavorite: boolean,
  isPremium: boolean,
  location: {
    latitude: number
    longitude: number
    zoom: number
  },
  maxAdults: number,
  previewImage: string,
  price: number,
  rating: number;
  title: string;
  type: string;
};

export type ReviewType = {
  comment: string
  date: string
  id: number
  rating: number
  user: {
    avatarUrl: string
    id: number
    isPro: boolean
    name: string
  }
};
