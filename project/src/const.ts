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

export const URL_MARKER_CURRENT = '../img/pin-active.svg';
export const URL_MARKER_DEFAULT = '../img/pin.svg';
export const ICON_WIDTH = 40;
export const ICON_HEIGHT = 50;
export const ANCHOR_RELATIVE_X = 20;
export const ANCHOR_RELATIVE_Y = 40;

export const getRandomNumber = (min: number, max: number) => Math.floor (Math.random () * (max - min + 1)) + min;
