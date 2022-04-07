import {Icon, Marker} from 'leaflet';
import { useRef, useEffect } from 'react';
import { URL_MARKER_DEFAULT,URL_MARKER_CURRENT, ICON_WIDTH, ICON_HEIGHT, ANCHOR_RELATIVE_X, ANCHOR_RELATIVE_Y } from '../../const';
import 'leaflet/dist/leaflet.css';
import {OfferType, City} from '../../types/offer';
import useMap from '../../hooks/useMap';

type MapProps = {
  city: City;
  currentOffers: OfferType[];
  selectedPoint: OfferType | null;
  className: string;
  height: number;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [ICON_WIDTH, ICON_HEIGHT],
  iconAnchor: [ANCHOR_RELATIVE_X, ANCHOR_RELATIVE_Y],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [ICON_WIDTH, ICON_HEIGHT],
  iconAnchor: [ANCHOR_RELATIVE_X, ANCHOR_RELATIVE_Y],
});

const markers:Marker[] = [];

function Map({city, currentOffers, selectedPoint, className,height}:MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      currentOffers.forEach((currentPoint) => {
        const marker = new Marker(
          {
            lat: currentPoint.location.latitude,
            lng: currentPoint.location.longitude,
          });

        marker
          .setIcon(
            selectedPoint !== null && currentPoint.id === selectedPoint.id
              ? currentCustomIcon
              : defaultCustomIcon)
          .addTo(map);
        markers.push(marker);
      });
    }
    return () => {
      markers.forEach((marker) => marker.remove());
      markers.length = 0;
    };
  });

  return (
    <section
      className={className}
      ref = {mapRef}
      style = {{height:`${height}px`}}
    >
    </section>
  );
}

export default Map;
