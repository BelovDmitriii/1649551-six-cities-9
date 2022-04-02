import { createSlice } from '@reduxjs/toolkit';
import {AutorizationStatus, NameSpace} from '../../const';

const initialState = {
  authorizationStatus: AutorizationStatus.Unknown,
  login: '',
};

export const userProcess = createSlice({
  name: NameSpace.user,
  initialState,
  reducers: {
    requireAuthorization: (state, action) => {
      state.authorizationStatus = action.payload;
    },
  },
});

export const {requireAuthorization} = userProcess.actions;
