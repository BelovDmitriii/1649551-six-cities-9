import PlaceCard from '../place-card/place-card';
import { OfferType } from '../../types/offer';
import { useState } from 'react';

type PlaceCardListProps = {
  offers: OfferType[];
  onPlaceCardHover: (id: number) => void;
}

function PlaceCardList({offers, onPlaceCardHover}: PlaceCardListProps): JSX.Element {

  const [, setActiveOffer] = useState<null | OfferType>(null);

  const onActiveOfferChange = (offer:OfferType | null) => {
    setActiveOffer(offer);
  };

  return (
    <>
      {offers.map((offer, id) => (
        <PlaceCard
          offers={offer}
          onActiveOfferChange={onActiveOfferChange}
          onPlaceCardHover={onPlaceCardHover}
          key={offer.id}
        />
      ))}
    </>
  );
}

export default PlaceCardList;
