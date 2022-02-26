import {Link} from 'react-router-dom';
import {OfferType} from '../../types/offer';
import {AppRoute} from '../../const';

type PlaceCardProps = {
  offers: OfferType;
  onActiveOfferChange: (offer: OfferType | null) => void;
}

function PlaceCard (props: PlaceCardProps): JSX.Element {
  const {offers, onActiveOfferChange} = props;
  const {previewImage, title, price, rating, description, type, id} = offers;

  return (
    <article
      className="cities__place-card place-card"
      onMouseOver = {() => onActiveOfferChange(offers)}
      onMouseOut = {() => onActiveOfferChange(null)}
    >
      {offers.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt={title} />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to ={`${AppRoute.Offer}/${offers.id}`}>{description}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
