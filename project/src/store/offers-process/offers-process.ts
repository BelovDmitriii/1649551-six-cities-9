import { createSlice } from '@reduxjs/toolkit';
import {NameSpace, INITIAL_CITY} from '../../const';
import { City } from '../../types/offer';
import { SortType } from '../../utils';

type InitialStateType = {
  currentCity: City;
  sortType: string;
  offerId: number;
}

const initialState: InitialStateType = {
  currentCity: INITIAL_CITY,
  sortType: SortType.POPULAR,
  offerId: 0,
};

export const offersProcess = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    setCity: (state, action) => {
      if (state.currentCity.name !== action.payload.name) {
        state.currentCity = action.payload;
      }
    },
    getOfferId: (state, action) => {
      state.offerId = action.payload;
    },
    setSortType: (state, action) => {
      state.sortType = action.payload;
    },
    changeCity: (state, action) => {
      state.currentCity = action.payload;
    },
  },
});

export const {setCity, getOfferId, setSortType, changeCity} = offersProcess.actions;
