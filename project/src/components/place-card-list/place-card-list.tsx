import PlaceCard from '../place-card/place-card';
import { OfferType } from '../../types/offer';
import { useState } from 'react';

type PlaceCardListProps = {
  offers: OfferType[];
}

function PlaceCardList({offers}: PlaceCardListProps): JSX.Element {

  const [activeOffer, setActiveOffer] = useState<null | OfferType>(null);

  //eslint-disable-next-line  no-console
  console.log(activeOffer);

  const onActiveOfferChange = (offer:OfferType | null) => {
    setActiveOffer(offer);
  };

  return (
    <>
      {offers.map((offer) => (
        <PlaceCard
          offers={offer}
          onActiveOfferChange = {onActiveOfferChange}
          key = {offer.id}
        />
      ))}
    </>
  );
}

export default PlaceCardList;
