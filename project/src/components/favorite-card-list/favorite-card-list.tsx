import FavoritesLocationCards from '../favorite-location-card/favorite-location-card';
import { Favorite } from '../../types/favorite';

type FavoriteCardListProps = {
  favorites: Favorite[];
}

const mapOffersToCity = (arr: Favorite[]) =>
  arr.reduce<{ [key: string]: Favorite[] }>((acc, offer) => {
    if (!acc[offer.city.name]) {
      acc[offer.city.name] = [];
    }

    acc[offer.city.name].push(offer);
    return acc;
  }, {});

function FavoriteCardList ({favorites}:FavoriteCardListProps): JSX.Element {
  const favoriteOffersByCities = mapOffersToCity(favorites);

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {Object.keys(favoriteOffersByCities).map((city) => (
          <FavoritesLocationCards
            key={city}
            city={city}
            locationOffers={favoriteOffersByCities[city]}
          />
        ))}
      </ul>
    </section>
  );
}

export default FavoriteCardList;
