import PlaceCard from '../place-card/place-card';
import { OfferType } from '../../types/offer';

type PlaceCardListProps = {
  offers: OfferType[];
  onPlaceCardHover: (offer: OfferType | null) => void;
}

function PlaceCardList({offers, onPlaceCardHover}: PlaceCardListProps): JSX.Element {

  return (
    <>
      {offers.map((offer, id) => (
        <PlaceCard
          offer={offer}
          onPlaceCardHover={onPlaceCardHover}
          key={offer.id}
        />
      ))}
    </>
  );
}

export default PlaceCardList;
