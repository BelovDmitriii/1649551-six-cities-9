import { Link } from 'react-router-dom';
import { AutorizationStatus, AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';

function HeaderNav(): JSX.Element {

  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(({USER}) => USER.authorizationStatus);
  const userLogin = useAppSelector(({USER}) => USER.user);
  const isAuth = authorizationStatus === AutorizationStatus.Auth;

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {
          isAuth &&
          <>
            <li className="header__nav-item user">
              <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                <div className="header__avatar-wrapper user__avatar-wrapper" />

                <span className="header__user-name user__name">{userLogin}</span>
              </Link>
            </li>
            <li className="header__nav-item">
              <Link
                className="header__nav-link"
                to={AppRoute.Main}
                onClick={(evt) => {
                  evt.preventDefault();
                  dispatch(logoutAction());
                }}
              >
                <span className="header__signout">Sign out</span>
              </Link>
            </li>
          </>
        }
        {
          !isAuth &&
          <li className="header__nav-item user">
            <Link
              className="header__nav-link header__nav-link--profile"
              to={AppRoute.SignIn}
            >
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <span className="header__login">Sign in</span>
            </Link>
          </li>
        }
      </ul>
    </nav >
  );
}

export default HeaderNav;
