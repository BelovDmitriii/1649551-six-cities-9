import { createSlice } from '@reduxjs/toolkit';
import {AutorizationStatus, NameSpace} from '../../const';
import { UserData } from '../../types/user-data';

const INITIAL_USER: UserData | null = null;

const initialState = {
  authorizationStatus: AutorizationStatus.Unknown,
  user: INITIAL_USER,
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
