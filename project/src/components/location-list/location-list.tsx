import LocationItem from '../location-item/location-item';
import {CITIES} from '../../const';
import { useAppSelector } from '../../hooks';

function LocationList(): JSX.Element {
  const { currentCity } = useAppSelector((state) => state);

  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((item) => (
        <LocationItem city={item} key={item.name} activeCity={currentCity} />
      ))}
    </ul>
  );
}

export default LocationList;
