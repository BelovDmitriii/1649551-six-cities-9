import { OfferType } from '../types/offer';

export const offers: OfferType[] = [
  {
    'bedrooms': 3,
    'city': {
      'location': {
        'latitude': 52.370216,
        'longitude': 4.895168,
        'zoom': 10,
      },
      'name': 'Amsterdam',
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'goods': [
      'Heating',
    ],
    'host': {
      'avatarUrl': 'img/avatar-max.jpg',
      'id': 1,
      'isPro': true,
      'name': 'Angelina',
    },
    'id': 1,
    'images': [
      'img/apartment-02.jpg',
      'img/apartment-02.jpg',
      'img/apartment-02.jpg',
      'img/apartment-02.jpg',
      'img/apartment-02.jpg',
    ],
    'isFavorite': false,
    'isPremium': false,
    'location': {
      'latitude': 52.3909553943508,
      'longitude': 4.85309666406198,
      'zoom': 8,
    },
    'maxAdults': 4,
    'previewImage': 'img/apartment-02.jpg',
    'price': 10000,
    'rating': 4.8,
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'Apartment',
  },

  {
    'bedrooms': 4,
    'city': {
      'location': {
        'latitude': 52.370216,
        'longitude': 4.895168,
        'zoom': 10,
      },
      'name': 'Amsterdam',
    },
    'description': 'This five-star hotel with friendly staff who speaks several languages, including Russian and English.',
    'goods': [
      'Heating',
    ],
    'host': {
      'avatarUrl': 'img/avatar-max.jpg',
      'id': 3,
      'isPro': true,
      'name': 'Angelina',
    },
    'id': 2,
    'images': [
      'img/apartment-04.jpg',
      'img/apartment-04.jpg',
      'img/apartment-04.jpg',
      'img/apartment-04.jpg',
    ],
    'isFavorite': true,
    'isPremium': false,
    'location': {
      'latitude': 52.369553943508,
      'longitude': 4.85309666406198,
      'zoom': 8,
    },
    'maxAdults': 3,
    'previewImage': 'img/apartment-04.jpg',
    'price': 20000,
    'rating': 4.4,
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'apartment',
  },

  {
    'bedrooms': 2,
    'city': {
      'location': {
        'latitude': 52.370216,
        'longitude': 4.895168,
        'zoom': 10,
      },
      'name': 'Amsterdam',
    },
    'description': 'It is a fifteen storey building, which is located in the centre of Paris. The hotel has 100 rooms.',
    'goods': [
      'Heating',
    ],
    'host': {
      'avatarUrl': 'img/1.png',
      'id': 3,
      'isPro': false,
      'name': 'Mark',
    },
    'id': 3,
    'images': [
      'img/1.png',
    ],
    'isFavorite': true,
    'isPremium': false,
    'location': {
      'latitude': 52.3909553943508,
      'longitude': 4.929309666406198,
      'zoom': 8,
    },
    'maxAdults': 1,
    'previewImage': 'img/apartment-01.jpg',
    'price': 30000,
    'rating': 4.3,
    'title': 'These hotels are regarded perfect all over the world.',
    'type': 'hotel',
  },

  {
    'bedrooms': 8,
    'city': {
      'location': {
        'latitude': 52.370216,
        'longitude': 4.895168,
        'zoom': 10,
      },
      'name': 'Amsterdam',
    },
    'description': 'The kitchen is small, but, as I said before, quite cozy. The biggest room in the apartment is the living room.',
    'goods': [
      'Heating',
    ],
    'host': {
      'avatarUrl': 'img/1.png',
      'id': 3,
      'isPro': true,
      'name': 'Dmitrii',
    },
    'id': 4,
    'images': [
      'img/1.png',
    ],
    'isFavorite': true,
    'isPremium': false,
    'location': {
      'latitude': 52.3809553943508,
      'longitude':4.939309666406198,
      'zoom': 8,
    },
    'maxAdults': 4,
    'previewImage': 'img/apartment-03.jpg',
    'price': 40000,
    'rating': 4.8,
    'title': 'Bright 3 room apartment for up to 6 people',
    'type': 'apartment',
  },
];
