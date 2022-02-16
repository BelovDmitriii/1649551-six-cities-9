import { Link } from 'react-router-dom';
import Header from '../header/header';

function NotFoundPage(): JSX.Element {
  return(
    <>
      <Header />
      <div className="container">
        <Link to="/">
          <h2 style={{textAlign:'center'}}>Back to main page</h2>
        </Link>
        <img src="img/not-found.jpg" alt="not found page" width='100%' />
      </div>
      <footer className="footer container">
        <Link className="footer__logo-link" to="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </>
  );
}

export default NotFoundPage;
