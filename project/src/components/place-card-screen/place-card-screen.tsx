import {OfferType} from '../../types/offer';
import Header from '../header/header';
import CardProperty from '../place-card-property/place-card-property';
import PlaceCardList from '../place-card-list/place-card-list';
import {useState} from 'react';
import { useAppSelector } from '../../hooks';

function PlaceCardScreen(): JSX.Element {

  const [selectedPoint, setSelectedPoint] = useState<OfferType | null>(null);

  const onPlaceCardHover = (offer: OfferType | null) => {
    setSelectedPoint(offer);
  };

  const {nearbyOffers, filteredOffers} = useAppSelector((state) => state);

  return (
    <div className="page">
      <Header />
      <CardProperty offers={filteredOffers} selectedPoint={selectedPoint}/>
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
