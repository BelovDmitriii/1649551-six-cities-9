import { createAsyncThunk } from '@reduxjs/toolkit';
import {api} from '../store';
import { store } from '../store';
import { OfferType } from '../types/offer';
import { loadOffers, loadCurrentOffer, requireAutorization } from './action';
import { APIRoute, AutorizationStatus } from '../const';
import { AuthData } from '../types/auth-data';
import { dropToken, saveToken } from '../services/token';
import { UserData } from '../types/user-data';

export const fetchOfferAction = createAsyncThunk(
  'data/fetchOffers',
  async() => {
    const {data} = await api.get<OfferType[]>(APIRoute.Offers);
    store.dispatch(loadOffers(data));
  },
);

export const loadCurrentOfferAction = createAsyncThunk(
  'data/loadCurrentOffer',
  async(id: number) => {
    const {data} = await api.get<OfferType>(`${APIRoute.Offers}/${id}`);
    store.dispatch(loadCurrentOffer(data));
  },
);

export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    await api.get(APIRoute.Login);
    store.dispatch(requireAutorization(AutorizationStatus.Auth));
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({login: email, password}: AuthData) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    store.dispatch(requireAutorization(AutorizationStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    await api.delete(APIRoute.Logout);
    dropToken();
    store.dispatch(requireAutorization(AutorizationStatus.NoAuth));
  },
);
