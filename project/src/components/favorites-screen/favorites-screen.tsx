import FavoriteCardList from '../favorite-card-list/favorite-card-list';
import EmptyFavoriteList from '../empty-favorite-list/empty-favorite-list';
import Header from '../header/header';
import {useAppSelector} from '../../hooks';
import FooterComponent from '../footer-component/footer-component';

function FavoritesScreen (): JSX.Element {

  const {favorites} = useAppSelector (({FAVORITES}) => FAVORITES);

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
