import {OfferType} from '../../types/offer';
import Header from '../header/header';
import PlaceCardProperty from '../place-card-property/place-card-property';
import PlaceCardList from '../place-card-list/place-card-list';
import {useState, useEffect} from 'react';
import { useAppDispatch,useAppSelector} from '../../hooks';
import {store} from '../../store';
import {useParams} from 'react-router-dom';
import {loadCurrentOfferAction, fetchReviewsAction, fetchNearbyOffersAction} from '../../store/api-actions';
import NotFoundPage from '../not-found-page/not-found-page';
import Spinner from '../spinner-component/spinner-component';
import { getCurrentOffer, getNearbyOffers, getOfferReviews, getCurrentOfferLoaded, getFavoriteOffers } from '../../store/offers-data/selectors';

function PlaceCardScreen(): JSX.Element {
  const dispatch = useAppDispatch();

  const [, setSelectedPoint] = useState<OfferType | null>(null);

  const onPlaceCardHover = (offer: OfferType | null) => {
    setSelectedPoint(offer);
  };

  const favorites = useAppSelector(getFavoriteOffers);
  const currentOffer = useAppSelector(getCurrentOffer);
  const reviews = useAppSelector(getOfferReviews);
  const nearbyOffers = useAppSelector(getNearbyOffers);
  const isCurrentOfferLoaded = useAppSelector(getCurrentOfferLoaded);

  const {id} = useParams<{id: string}>();

  useEffect(() => {
    store.dispatch(loadCurrentOfferAction(Number(id)));
    store.dispatch(fetchReviewsAction(Number(id)));
    store.dispatch(fetchNearbyOffersAction(Number(id)));

  }, [dispatch, id, isCurrentOfferLoaded, favorites]);

  if (isCurrentOfferLoaded === false) {
    return (
      <Spinner />
    );
  }

  if (!currentOffer) {
    return <NotFoundPage />;
  }

  return (
    <div className="page">
      <Header />
      {currentOffer !==null && (
        <>
          <PlaceCardProperty currentOffer={currentOffer}  reviews={reviews} nearbyOffers={nearbyOffers}/>
          <main className="page__main page__main--property">
            <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">Other places in the neighbourhood</h2>
                <PlaceCardList className="near-places__list places__list" offers={nearbyOffers} onPlaceCardHover={onPlaceCardHover} />
              </section>
            </div>
          </main>
        </>
      )}
    </div>
  );
}

export default PlaceCardScreen;
