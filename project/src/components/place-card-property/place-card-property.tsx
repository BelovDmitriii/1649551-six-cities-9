import { OfferType, ReviewType } from '../../types/offer';
import ReviewList from '../review-list/reviews-list';
import ReviewForm from '../review-form/reviews-form';
import PlaceCardGallery from '../place-card-gallery/place-card-gallery';
import Map from '../map/map';
import {ratingWidth} from '../../utils';
import { AppRoute, AutorizationStatus } from '../../const';
import {useAppSelector, useAppDispatch} from '../../hooks';
import BookmarkButton from '../bookmark-button/bookmark-button';
import {useState} from 'react';
import { toggleFavoriteAction } from '../../store/api-actions';
import { redirectToRoute } from '../../store/action';

type CardPropertyProps = {
  currentOffer: OfferType;
  reviews: ReviewType[];
  nearbyOffers: OfferType[];
};

function CardProperty({currentOffer, reviews, nearbyOffers}: CardPropertyProps):JSX.Element {
  const authorizationStatus = useAppSelector(({ USER }) => USER.authorizationStatus);
  const [isOfferFavorite, setToggleFavorite] = useState(currentOffer.isFavorite);
  const dispatch = useAppDispatch();
  const postFavoriteFlag = currentOffer.isFavorite ? 0 : 1;

  const handleFavoriteClick = () => {
    if (authorizationStatus !== AutorizationStatus.Auth) {
      dispatch(redirectToRoute(AppRoute.SignIn));
    }
    dispatch(toggleFavoriteAction({
      id: currentOffer.id,
      flag: postFavoriteFlag,
    }));

    setToggleFavorite(!isOfferFavorite);
  };

  const isAuth = authorizationStatus === AutorizationStatus.Auth;

  const { id: currentId } = currentOffer;

  return (
    <section className="property">

      <PlaceCardGallery offer = {currentOffer} />

      <div className="property__container container">
        <div className="property__wrapper">
          {currentOffer.isPremium && (
            <div className="property__mark">
              <span>Premium</span>
            </div>
          )}
          <div className="property__name-wrapper">
            <h1 className="property__name">
              {currentOffer.title}
            </h1>
            <BookmarkButton
              isFavorite={currentOffer.isFavorite}
              handleBookmarkButtonClick={handleFavoriteClick}
              isSmall={false}
              prefix={'property'}
            />
          </div>
          <div className="property__rating rating">
            <div className="property__stars rating__stars">
              <span style={{ width: `${ratingWidth(currentOffer.rating)}%` }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="property__rating-value rating__value">{currentOffer.rating}</span>
          </div>
          <ul className="property__features">
            <li className="property__feature property__feature--entire">
              {currentOffer.type}
            </li>
            <li className="property__feature property__feature--bedrooms">
              {currentOffer.bedrooms} Bedrooms
            </li>
            <li className="property__feature property__feature--adults">
              Max {currentOffer.maxAdults} adults
            </li>
          </ul>
          <div className="property__price">
            <b className="property__price-value">&euro;{currentOffer.price}</b>
            <span className="property__price-text">&nbsp;night</span>
          </div>
          <div className="property__inside">
            <h2 className="property__inside-title">What&apos;s inside</h2>
            <ul className="property__inside-list">
              {
                currentOffer.goods.map((insides:string) => {
                  const keyValue = insides;
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
                <img
                  className="property__avatar user__avatar"
                  src={currentOffer.host.avatarUrl}
                  width="74"
                  height="74"
                  alt="Host avatar"
                />
              </div>
              <span className="property__user-name">
                {currentOffer.host.name}
              </span>
              {currentOffer.host.isPro &&
              <span className="property__user-status">
                Pro
              </span>}
            </div>
            <div className="property__description">
              <p className="property__text">
                {currentOffer.description}
              </p>
            </div>
          </div>
          <section className="property__reviews reviews">
            <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>

            <ReviewList reviews={reviews}/>
            {isAuth ? <ReviewForm currentOffer={currentOffer} currentId={currentId}/> : ''}

          </section>
        </div>
      </div>
      <div style = {{ width:'80%', margin: '0 auto'}}>
        <Map city={currentOffer.city} points={[...nearbyOffers, currentOffer]} selectedPoint={currentOffer} className={'property__map map'} height={579}/>
      </div>
    </section>
  );
}

export default CardProperty;
