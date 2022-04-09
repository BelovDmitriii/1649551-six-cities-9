import FavoriteLocationCards from '../favorite-location-cards/favorite-location-cards';
import { Favorite } from '../../types/favorite';

type FavoriteCardListProps = {
  favorites: Favorite[];
}

const mapOffersToCity = (favoriteOffers: Favorite[]) =>
  favoriteOffers.reduce<{ [key: string]: Favorite[] }>((favorites, offer) => {
    if (!favorites[offer.city.name]) {
      favorites[offer.city.name] = [];
    }

    favorites[offer.city.name].push(offer);
    return favorites;
  }, {});

function FavoriteCardList ({favorites}:FavoriteCardListProps): JSX.Element {
  const favoriteOffersByCities = mapOffersToCity(favorites);

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {Object.keys(favoriteOffersByCities).map((city) => (
          <FavoriteLocationCards
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
