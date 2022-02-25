import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AutorizationStatus } from '../../const';
import Favorites from '../favorites/favorites';
import RoomPage from '../room-page/room-page';
import MainPage from '../main-page/main-page';
import SignInPage from '../sign-in-page/sign-in-page';
import NotFoundPage from '../not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import {OfferType} from '../../types/offer';

type AppScreenProps = {
  rentOffer: number;
  offers: OfferType[];
  //reviews: ReviewType[];
}
function App({rentOffer, offers}:AppScreenProps): JSX.Element {
  const [firstOffer] = offers;
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element = {<MainPage rentOffer = {rentOffer} offers = {firstOffer}/>}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignInPage />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AutorizationStatus.NoAuth}
            >
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Room}
          element={<RoomPage />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
