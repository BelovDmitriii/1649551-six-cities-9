import FavoriteCardList from '../favorite-card-list/favorite-card-list';
import Header from '../header/header';
import {useAppSelector} from '../../hooks';
import FooterComponent from '../footer-component/footer-component';

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
      <FooterComponent />
    </div>
  );
}

export default FavoritesScreen;
