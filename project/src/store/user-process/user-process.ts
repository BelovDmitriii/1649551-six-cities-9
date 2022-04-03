import { createSlice } from '@reduxjs/toolkit';
import {AutorizationStatus, NameSpace} from '../../const';

const initialState = {
  authorizationStatus: AutorizationStatus.Unknown,
  user: '',
};

export const userProcess = createSlice({
  name: NameSpace.user,
  initialState,
  reducers: {
    requireAuthorization: (state, action) => {
      state.authorizationStatus = action.payload;
    },
    authorization: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {requireAuthorization, authorization} = userProcess.actions;
