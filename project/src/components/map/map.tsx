import {Icon, Marker} from 'leaflet';
import { useRef, useEffect } from 'react';
import { URL_MARKER_DEFAULT,URL_MARKER_CURRENT, ICON_WIDTH, ICON_HEIGHT, ANCHOR_RELATIVE_X, ANCHOR_RELATIVE_Y } from '../../const';
import 'leaflet/dist/leaflet.css';
import {OfferType, City} from '../../types/offer';
import useMap from '../../hooks/useMap';

type MapProps = {
  city: City;
  points: OfferType[];
  selectedPoint: OfferType | null;
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

function Map({city, points, selectedPoint, height}:MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker(
          {
            lat: point.location.latitude,
            lng: point.location.longitude,
          });
        marker.setIcon(
          selectedPoint !== null && point.id === selectedPoint.id
            ? currentCustomIcon
            : defaultCustomIcon,
        ).addTo(map);
      });
    }
  }, [map, points, selectedPoint]);

  return (
    <div
      style = {{height:`${height}px`}}
      ref = {mapRef}
    >
    </div>
  );
}

export default Map;
