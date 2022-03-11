import { ReviewType } from '../types/offer';

export const reviews: ReviewType[] = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: 'Wed Feb 24 2022 14:31:22 GMT+0300 (Москва, стандартное время)',
    id: 1,
    rating: 4,
    user: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 1,
      isPro: false,
      name: 'Oliver.conner',
    },
  },
  {
    comment: 'This five-star hotel with friendly staff who speaks several languages, including Russian and English.',
    date: 'Wed Feb 23 2022 14:31:22 GMT+0300 (Москва, стандартное время)',
    id: 2,
    rating: 3,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 2,
      isPro: true,
      name: 'SuperMan',
    },
  },
  {
    comment: 'It is a fifteen storey building, which is located in the centre of Paris. The hotel has 100 rooms.',
    date: 'Wed Feb 25 2022 14:31:22 GMT+0300 (Москва, стандартное время)',
    id: 3,
    rating: 8,
    user: {
      avatarUrl: 'img/avatar.svg',
      id: 3,
      isPro: false,
      name: 'Michael Jackson',
    },
  },
];
