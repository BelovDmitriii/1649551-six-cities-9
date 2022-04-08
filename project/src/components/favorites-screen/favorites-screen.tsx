import FavoriteCardList from '../favorite-card-list/favorite-card-list';
import EmptyFavoriteList from '../empty-favorite-list/empty-favorite-list';
import Header from '../header/header';
import {useAppDispatch, useAppSelector} from '../../hooks';
import FooterComponent from '../footer-component/footer-component';
import { loadFavoriteAction } from '../../store/api-actions';
import { useEffect } from 'react';

function FavoritesScreen (): JSX.Element {

  const {favorites} = useAppSelector (({DATA}) => DATA);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadFavoriteAction());
  }, [dispatch]);

  return (
    <div className="page">
      <Header />

      <main className={`page__main page__main--favorites ${favorites ? '' : 'page__main--favorites-empty'}`}>
        <div className="page__favorites-container container">
          {
            favorites.length === 0 ? <EmptyFavoriteList /> : <FavoriteCardList favorites={favorites} />
          }
        </div>
      </main>
      <FooterComponent />
    </div>
  );
}

export default FavoritesScreen;
