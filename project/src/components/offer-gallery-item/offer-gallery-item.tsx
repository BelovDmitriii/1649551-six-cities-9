type OfferGalleryItemProps = {
  imageCard:string;
}

function OfferGalleryItem ({imageCard}:OfferGalleryItemProps): JSX.Element {
  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={imageCard} alt="Studio" />
    </div>
  );
}

export default OfferGalleryItem;
