import { OfferType } from '../../types/offer';

type PlaceCardGalleryProps = {
  offer: OfferType;
};

const MAX_PHOTOS = 6;

function PlaceCardGallery({offer}: PlaceCardGalleryProps): JSX.Element {

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {
          offer.images.map((imageUrl: string , id: number) => {
            const keyValue = id + imageUrl;
            return id < MAX_PHOTOS ? (
              <div key = {keyValue} className="property__image-wrapper">
                <img className="property__image" src={imageUrl} alt="room_photo"/>
              </div>
            ) : ('');
          })
        }
      </div>
    </div>
  );
}

export default PlaceCardGallery;
