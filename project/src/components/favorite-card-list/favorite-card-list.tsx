import FavoriteOffers from '../favorite-card/favorites-card';
import { OfferType } from '../../types/offer';
import {AppRoute} from '../../const';
import { Link } from 'react-router-dom';

type FavoriteCardListProps = {
  favoriteOffers: OfferType[];
}

function FavoriteCardList ({favoriteOffers}:FavoriteCardListProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={AppRoute.Main}>
            <span>{favoriteOffers[0]}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {favoriteOffers.map((offer) => (
          <FavoriteOffers
            favoriteOffers={offer}
            key={offer.id}
          />
        ))}
      </div>
    </li>
  );
}

export default FavoriteCardList;
