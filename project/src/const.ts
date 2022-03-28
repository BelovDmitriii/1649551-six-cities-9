export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  Offer = '/offer'
}

export enum AutorizationStatus {
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

export const URL_MARKER_CURRENT = '../img/pin-active.svg';
export const URL_MARKER_DEFAULT = '../img/pin.svg';
export const ICON_WIDTH = 40;
export const ICON_HEIGHT = 50;
export const ANCHOR_RELATIVE_X = 20;
export const ANCHOR_RELATIVE_Y = 40;

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

export enum LogoTypes {
  Header = 'header',
  Footer = 'footer',
}

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
