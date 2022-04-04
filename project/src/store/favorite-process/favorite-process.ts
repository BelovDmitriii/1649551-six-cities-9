import {createSlice} from '@reduxjs/toolkit';

import {NameSpace} from '../../const';
import Favorite from '../../types/favorite';

const INITIAL_FAVORITES: Favorite[] = [];

const initialState = {
  favorites: INITIAL_FAVORITES,
  favoritesLoaded: false,
};

export const favoritesProcess = createSlice({
  name: NameSpace.favorites,
  initialState,
  reducers: {
    fetchFavorites: (state, action) => {
      state.favorites = action.payload;
      state.favoritesLoaded = true;
    },
    setFavoriteLoading: (state) => {
      state.favoritesLoaded = false;
    },
  },
});

export const {fetchFavorites, setFavoriteLoading} = favoritesProcess.actions;
