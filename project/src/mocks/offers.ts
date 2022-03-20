import { OfferType } from '../types/offer';
import { getRandomNumber } from '../const';

export const offers: OfferType[] = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 48.856663,
        longitude: 2.351556,
        zoom: 10,
      },
      name: 'Paris',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: [
      'Heating',
      'Baby seat',
      'Air conditioning',
      'Washer',
      'Towels',
      'Washing machine',
      'Dishwasher',
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 1,
      isPro: true,
      name: 'Angelina',
    },
    id: 88,
    images: [
      `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
      `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
      `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
      `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
      `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
      `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
      `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
      `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
    ],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
    price: 10000,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'Apartment',
  },
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 48.894811,
        longitude: 2.090012,
        zoom: 10,
      },
      name: 'Paris',
    },
    description: 'Very good room behind a a river by the unique lightness of Paris.',
    goods: [
      'Heating',
      'Baby seat',
      'Air conditioning',
      'Washing machine',
      'Dishwasher',
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 1,
      isPro: true,
      name: 'Valeria',
    },
    id: 15,
    images: [
      `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
      `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
      `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
      `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
      `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
      `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
      `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
      `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
    ],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage:  `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
    price: 15000,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'Apartment',
  },

  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 48.637343,
        longitude: 2.331528,
        zoom: 10,
      },
      name: 'Paris',
    },
    description: 'Very small room in centrum of Paris',
    goods: [
      'Heating',
      'Baby seat',
      'Air conditioning',
      'Washer',
      'Towels',
      'Washing machine',
      'Dishwasher',
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 9,
      isPro: true,
      name: 'Robert',
    },
    id: 1,
    images: [
      `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
      `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
      `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
      `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
      `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
      `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
      `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
      `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
    ],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage:  `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
    price: 20000,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'Apartment',
  },
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 48.940726,
        longitude:  2.367234,
        zoom: 10,
      },
      name: 'Paris',
    },
    description: 'This is not a Paris',
    goods: [
      'Heating',
      'Baby seat',
      'Air conditioning',
      'Washer',
      'Towels',
      'Washing machine',
      'Dishwasher',
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 1,
      isPro: true,
      name: 'Leonardo',
    },
    id: 16,
    images: [
      `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
      `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
      `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
      `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
      `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
      `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
      `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
      `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
    ],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/apartment-02.jpg',
    price: 25000,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'Apartment',
  },

  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 52.369553943508,
        longitude: 4.85309666406198,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'This five-star hotel with friendly staff who speaks several languages, including Russian and English.',
    goods: [
      'Heating',
      'Coffee machine',
      'Breakfast',
      'Laptop friendly workspace',
      'Fridge',
      'Baby seat',
      'Air conditioning',
      'Washer',
      'Towels',
      'Washing machine',
      'Dishwasher',
    ],
    host: {
      avatarUrl: 'img/avatar.svg',
      id: 3,
      isPro: true,
      name: 'Terminator',
    },
    id: 2,
    images: [
      `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
      `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
      `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
      `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
      `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
      `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
      `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
      `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 3,
    previewImage: 'img/apartment-04.jpg',
    price: 20000,
    rating: 4.4,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
  },

  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'It is a fifteen storey building, which is located in the centre of Paris. The hotel has 100 rooms.',
    goods: [
      'Heating',
      'Coffee machine',
      'Breakfast',
      'Laptop friendly workspace',
      'Fridge',
    ],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 7,
      isPro: false,
      name: 'Mark',
    },
    id: 3,
    images: [
      `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
      `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
      `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
      `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
      `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
      `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
      `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
      `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8,
    },
    maxAdults: 1,
    previewImage: 'img/apartment-01.jpg',
    price: 30000,
    rating: 4.3,
    title: 'These hotels are regarded perfect all over the world.',
    type: 'hotel',
  },

  {
    bedrooms: 8,
    city: {
      location: {
        latitude: 52.3809553943508,
        longitude:4.939309666406198,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'The kitchen is small, but, as I said before, quite cozy. The biggest room in the apartment is the living room.',
    goods: [
      'Heating',
      'Coffee machine',
      'Breakfast',
      'Laptop friendly workspace',
      'Fridge',
    ],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 2,
      isPro: true,
      name: 'Dmitrii',
    },
    id: 4,
    images: [
      `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
      `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
      `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
      `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
      `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
      `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
      `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
      `https://9.react.pages.academy/static/hotel/${getRandomNumber(1, 20)}.jpg`,
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.3809553943508,
      longitude:4.939309666406198,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/apartment-03.jpg',
    price: 40000,
    rating: 4.8,
    title: 'Bright 3 room apartment for up to 6 people',
    type: 'apartment',
  },
];
