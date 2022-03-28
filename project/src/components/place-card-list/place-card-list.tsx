import PlaceCard from '../place-card/place-card';
import { OfferType } from '../../types/offer';
import {CardTypes} from '../../const';

type PlaceCardListProps = {
  offers: OfferType[];
  onPlaceCardHover: (offer: OfferType | null) => void;
  typeCard: CardTypes;
}

function PlaceCardList({offers, onPlaceCardHover, typeCard}: PlaceCardListProps): JSX.Element {

  return (
    <>
      {offers.map((offer, id) => (
        <PlaceCard
          offer={offer}
          onPlaceCardHover={onPlaceCardHover}
          key={offer.id}
          typeCard={typeCard}
        />
      ))}
    </>
  );
}

export default PlaceCardList;
