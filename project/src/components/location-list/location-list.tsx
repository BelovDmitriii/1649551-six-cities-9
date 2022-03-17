import LocationItem from '../location-item/location-item';
import {CITIES} from '../../const';
import { useAppSelector } from '../../hooks';

function LocationList(): JSX.Element {
  const { currentCity } = useAppSelector((state) => state);

  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((item, id) => {
        const keyValue = `${id}: ${item.name}`;
        return <LocationItem city={item} key={keyValue} activeCity={currentCity} />;
      })}
    </ul>
  );
}

export default LocationList;
