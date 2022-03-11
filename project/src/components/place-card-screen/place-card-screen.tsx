//import {Link} from 'react-router-dom';
import {OfferType, ReviewType} from '../../types/offer';
import Header from '../header/header';
import CardProperty from '../place-card-property/place-card-property';
import PlaceCardList from '../place-card-list/place-card-list';
import {useState} from 'react';

type PlaceCardScreenProps = {
  offers: OfferType[];
  reviews: ReviewType[];
  nearbyOffers: OfferType[];
}

function PlaceCardScreen({offers, reviews, nearbyOffers}:PlaceCardScreenProps): JSX.Element {

  const [selectedPoint, setSelectedPoint] = useState<OfferType | null>(null);

  const onPlaceCardHover = (offer: OfferType | null) => {
    setSelectedPoint(offer);
  };

  return (
    <div className="page">
      <Header />
      <CardProperty offers={offers} reviews={reviews} selectedPoint={selectedPoint}/>
      <main className="page__main page__main--property">
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">

              <PlaceCardList offers={nearbyOffers} onPlaceCardHover={onPlaceCardHover}/>

            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default PlaceCardScreen;
