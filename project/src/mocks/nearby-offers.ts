import { getRandomNumber } from '../const';
import { OfferType } from '../types/offer';

export const nearbyOffers: OfferType[] = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'Not so bad',
    goods: [
      'Heating',
      'Baby seat',
      'Washing machine',
      'Dishwasher',
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 1,
      isPro: true,
      name: 'Angelina',
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
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/apartment-02.jpg',
    price: 5000,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'Apartment',
  },

  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 50.854283,
        longitude: 4.352131,
        zoom: 10,
      },
      name: 'Brussels',
    },
    description: 'The place in Amsterdam was better! There is no bathroom here!!!',
    goods: [
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
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 50.854283,
      longitude: 4.352131,
      zoom: 8,
    },
    maxAdults: 3,
    previewImage: 'img/apartment-04.jpg',
    price: 15000,
    rating: 4.4,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
  },

  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 48.856663,
        longitude: 2.351556,
        zoom: 10,
      },
      name: 'Paris',
    },
    description: 'Very small room in center of Paris!',
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
    price: 25000,
    rating: 4.3,
    title: 'These hotels are regarded perfect all over the world.',
    type: 'hotel',
  },

  {
    bedrooms: 8,
    city: {
      location: {
        latitude: 53.550688,
        longitude: 9.992895,
        zoom: 10,
      },
      name: 'Hamburg',
    },
    description: 'The best location in the city! - this is not for this place!!!',
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
    price: 35000,
    rating: 4.8,
    title: 'Bright 2 room apartment for up to 5 people',
    type: 'apartment',
  },
];
