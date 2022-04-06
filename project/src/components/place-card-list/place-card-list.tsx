import PlaceCard from '../place-card/place-card';
import { OfferType } from '../../types/offer';

type PlaceCardListProps = {
  offers: OfferType[];
  onPlaceCardHover: (offer: OfferType | null) => void;
  className: string;
}

function PlaceCardList({className, offers, onPlaceCardHover}: PlaceCardListProps): JSX.Element {

  return (
    <div className={className}>
      {offers.map((offer, id) => (
        <PlaceCard
          offer={offer}
          onPlaceCardHover={onPlaceCardHover}
          key={offer.id}
        />
      ))}
    </div>
  );
}

export default PlaceCardList;
