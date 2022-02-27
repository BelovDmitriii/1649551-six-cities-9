import OfferGalleryItem from '../offer-gallery-item/offer-gallery-item';

type OfferGalleryListProps = {
  imageCard:string[];
}

function OfferGalleryList ({imageCard}:OfferGalleryListProps):JSX.Element {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        <OfferGalleryItem imageCard={imageCard} />
      </div>
    </div>
  );
}

export default OfferGalleryList;
