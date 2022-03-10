import { OfferType, ReviewType } from '../../types/offer';
import ReviewList from '../review-list/reviews-list';
import ReviewForm from '../review-form/reviews-form';

type CardPropertyProps = {
  offers: OfferType[];
  reviews: ReviewType[];
};

const MAX_PHOTOS = 6;

function CardProperty({offers, reviews}: CardPropertyProps):JSX.Element {

  const [currentOffer] = offers;

  const {images, title, isFavorite, isPremium, rating, type, bedrooms, maxAdults, price, goods, description} = currentOffer;

  return (
    <section className="property">
      <div className="property__gallery-container container">
        <div className="property__gallery">
          {
            images.map((imageUrl: string , id: number) => {
              const keyValue = id + imageUrl;
              return id < MAX_PHOTOS ? (
                <div key = {keyValue} className="property__image-wrapper">
                  <img className="property__image" src={imageUrl} alt="Photo"/>
                </div>
              ) : ('');
            })
          }
        </div>
      </div>

      <div className="property__container container">
        <div className="property__wrapper">
          {isPremium && (
            <div className="property__mark">
              <span>Premium</span>
            </div>
          )}
          <div className="property__name-wrapper">
            <h1 className="property__name">
              {title}
            </h1>
            <button className={
              `property__bookmark-button button
              ${isFavorite ? 'property__bookmark-button--active' : ''}`
            } type="button"
            >
              <svg className="property__bookmark-icon" width="31" height="33">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="property__rating rating">
            <div className="property__stars rating__stars">
              <span style={{ width: '80%' }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="property__rating-value rating__value">{rating}</span>
          </div>
          <ul className="property__features">
            <li className="property__feature property__feature--entire">
              {type}
            </li>
            <li className="property__feature property__feature--bedrooms">
              {bedrooms} Bedrooms
            </li>
            <li className="property__feature property__feature--adults">
              Max {maxAdults} adults
            </li>
          </ul>
          <div className="property__price">
            <b className="property__price-value">&euro;{price}</b>
            <span className="property__price-text">&nbsp;night</span>
          </div>
          <div className="property__inside">
            <h2 className="property__inside-title">What&apos;s inside</h2>
            <ul className="property__inside-list">
              {
                goods.map((insides, id) => {
                  const keyValue = id + insides;
                  return (
                    <li key={keyValue} className="property__inside-item">
                      {insides}
                    </li>
                  );
                })
              }
            </ul>
          </div>
          <div className="property__host">
            <h2 className="property__host-title">Meet the host</h2>
            <div className="property__host-user user">
              <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
              </div>
              <span className="property__user-name">
                Angelina
              </span>
              <span className="property__user-status">
                Pro
              </span>
            </div>
            <div className="property__description">
              <p className="property__text">
                {description}
              </p>
              <p className="property__text">
                An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
              </p>
            </div>
          </div>
          <section className="property__reviews reviews">
            <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>

            <ReviewList reviews={reviews} />
            <ReviewForm />

          </section>
        </div>
      </div>
      <section className="property__map map"></section>
    </section>
  );
}

export default CardProperty;
