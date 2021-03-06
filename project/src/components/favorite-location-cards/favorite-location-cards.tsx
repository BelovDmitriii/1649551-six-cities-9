import { Link } from 'react-router-dom';

import FavoritesCard from '../favorites-card/favorites-card';

import { AppRoute } from '../../const';
import { Favorite } from '../../types/favorite';

type FavoriteLocationProps = {
  locationOffers: Favorite[],
  city: string;
}

function FavoriteLocationCards({ locationOffers, city }: FavoriteLocationProps): JSX.Element {

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={AppRoute.Main} >
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {locationOffers.map((offer) => {
          const key = `${offer.id}`;
          return <FavoritesCard key={key} favoriteOffers={offer} />;
        })}
      </div>
    </li>
  );
}

export default FavoriteLocationCards;
