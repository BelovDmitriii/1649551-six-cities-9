import { sortingType } from '../../utils';
import PlacesSortOption from '../places-sort-option/places-sort-option';

type PlacesSortProps = {
  sortType: string;
}

function PlacesSort({sortType}: PlacesSortProps):JSX.Element {

  const toggleSortType = (): void => {
    const placesOptions: HTMLElement | null = document.querySelector('.places__options');
    (placesOptions as HTMLElement).classList.toggle('places__options--closed');
    (placesOptions as HTMLElement).classList.toggle('places__options--opened');
  };

  return (
    <form className="places__sorting" action="#" method="get" onClick={() => toggleSortType()}>
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
      >
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--closed">
        {sortingType.map((type) => (
          <PlacesSortOption
            activeOption={sortType}
            key={type}
            option={type}
            toggleSortType={toggleSortType}
          />
        ))}
      </ul>
    </form>
  );
}

export default PlacesSort;
