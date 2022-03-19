import FavoriteCardList from '../favorite-card-list/favorite-card-list';
import Header from '../header/header';
import {useAppSelector} from '../../hooks';

function FavoritesScreen (): JSX.Element {

  const {filteredOffers} = useAppSelector((state) => state);

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoriteCardList favoriteOffers={filteredOffers} />
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33">
          </img>
        </a>
      </footer>
    </div>
  );
}

export default FavoritesScreen;
