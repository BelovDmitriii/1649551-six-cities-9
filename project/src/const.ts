export enum URL_MARKERS {
  CURRENT = '../img/pin-active.svg',
  DEFAULT = '../img/pin.svg',
}

export enum ICON {
  WIDTH = 40,
  HEIGHT = 50,
}
export enum ANCHOR_POSITION {
  RELATIVE_X = 20,
  RELATIVE_Y = 40,
}

export const RATING_VALUES = [5, 4, 3, 2, 1];

export enum RatingName {
  'Terribly',
  'Badly',
  'Not bad',
  'Good',
  'Perfect',
}

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  Offer = '/offer',
  NotFound = '/404',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NOAUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Offers = '/hotels',
  Favorite = '/favorite',
  Reviews = '/comments',
  Login = '/login',
  Logout = '/logout',
  Nearby = '/nearby',
}

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

export const getRandomNumber = (min: number, max: number) => Math.floor (Math.random () * (max - min + 1)) + min;

export const CITIES = [
  {
    name: 'Paris',
    location: {
      latitude: 48.857747,
      longitude: 2.294513,
      zoom: 10,
    },
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 10,
    },
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 10,
    },
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 10,
    },
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 10,
    },
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13,
    },
  },
];

export const INITIAL_CITY = CITIES[0];
export const RANDOM_CITY = CITIES[getRandomNumber(0, CITIES.length)].name;

export const MONTHS_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'Octover',
  'November',
  'December',
];
export const PERCENT_PER_STAR = 20;
export const MAX_REVIEWS_COUNT = 10;

export enum CardTypes {
  Main = 'cities',
  Favorites = 'favorites',
  Nearby = 'near-places',
}

export enum NameSpace {
  Data = 'DATA',
  Offers = 'OFFERS',
  User = 'USER',
}
