import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import Favorites from '../favorites/favorites';
import RoomPage from '../room-page/room-page';
import MainPage from '../main-page/main-page';
import SignInPage from '../sign-in-page/sign-in-page';

type AppScreenProps = {
  rentOffer: number;
}
function App({rentOffer}:AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage rentOffer = {rentOffer} />}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignInPage />}
        />
        <Route
          path={AppRoute.Favorites}
          element={<Favorites />}
        />
        <Route
          path={AppRoute.Room}
          element={<RoomPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
