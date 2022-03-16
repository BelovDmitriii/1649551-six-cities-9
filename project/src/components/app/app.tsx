import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AutorizationStatus } from '../../const';
import PlaceCardScreen from '../place-card-screen/place-card-screen';
import MainPage from '../main-page/main-page';
import SignInPage from '../sign-in-page/sign-in-page';
import NotFoundPage from '../not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import {OfferType, ReviewType} from '../../types/offer';
import FavoritesScreen from '../favorites-screen/favorites-screen';

type AppScreenProps = {
  offers: OfferType[];
  reviews: ReviewType[];
  nearbyOffers: OfferType[];
}
function App({ offers, reviews, nearbyOffers}:AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage offers={offers} />}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignInPage />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AutorizationStatus.Auth}
            >
              <FavoritesScreen offers={offers} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Room}
          element={<PlaceCardScreen offers={offers} reviews={reviews} nearbyOffers={nearbyOffers} />}
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
