import { Navigate } from 'react-router-dom';
import { RouteProps } from 'react-router-dom';
import { AppRoute, AutorizationStatus } from '../../const';

type PrivateRouteProps = RouteProps & {
  authorizationStatus: AutorizationStatus;
  children: JSX.Element;
}

function PrivateRoute (props: PrivateRouteProps): JSX.Element {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AutorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.SignIn} />
  );
}

export default PrivateRoute;
