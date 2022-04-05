import {OfferType} from '../../types/offer';
import Header from '../header/header';
import CardProperty from '../place-card-property/place-card-property';
import PlaceCardList from '../place-card-list/place-card-list';
import {useState, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {store} from '../../store';
import {useParams} from 'react-router-dom';
import {loadCurrentOfferAction, fetchReviewsAction, fetchNearbyOffersAction} from '../../store/api-actions';
import NotFoundPage from '../not-found-page/not-found-page';
import Spinner from '../spinner-component/spinner-component';

function PlaceCardScreen(): JSX.Element {

  const [selectedPoint, setSelectedPoint] = useState<OfferType | null>(null);
  const dispatch = useAppDispatch();

  const onPlaceCardHover = (offer: OfferType | null) => {
    setSelectedPoint(offer);
  };

  const { offers, currentOffer, reviews, nearbyOffers, isCurrentOfferLoaded} = useAppSelector(({DATA}) => DATA);

  const {id} = useParams<{id: string}>();

  useEffect(() => {
    store.dispatch(loadCurrentOfferAction(Number(id)));
    store.dispatch(fetchReviewsAction(Number(id)));
    store.dispatch(fetchNearbyOffersAction(Number(id)));
  }, [id, dispatch]);

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
          <CardProperty currentOffer={currentOffer} selectedPoint={selectedPoint} offers={offers} reviews={reviews} nearbyOffers={nearbyOffers}/>
          <main className="page__main page__main--property">
            <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">Other places in the neighbourhood</h2>
                <div className="near-places__list places__list">

                  <PlaceCardList offers={nearbyOffers} onPlaceCardHover={onPlaceCardHover} />

                </div>
              </section>
            </div>
          </main>
        </>
      )}
    </div>
  );
}

export default PlaceCardScreen;
