import { useAppDispatch } from '../../hooks';
import { setSortType } from '../../store/action';

type PlacesSortOptionProps = {
  activeOption: string;
  option: string;
  toggleSortType: () => void;
}

function PlacesSortOption({ activeOption, option, toggleSortType }:PlacesSortOptionProps): JSX.Element {

  const dispatch = useAppDispatch();
  const changeActiveCard = () => {
    const sortType = option;
    toggleSortType();
    dispatch(setSortType( sortType ));
  };
  return (
    <li
      className={`places__option ${
        activeOption === option ? 'places__option--active' : ''
      }`}
      tabIndex={0}
      onClick={() => changeActiveCard()}
    >
      {option}
    </li>
  );
}

export default PlacesSortOption;
