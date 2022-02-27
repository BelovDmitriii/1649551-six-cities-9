type OfferGalleryItemProps = {
  imageCard:string[];
}

function OfferGalleryItem ({imageCard}:OfferGalleryItemProps): JSX.Element {
  const currentImage = imageCard[0];
  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={currentImage} alt="Studio" />
    </div>
  );
}

export default OfferGalleryItem;
