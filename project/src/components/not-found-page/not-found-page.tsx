import { Link } from 'react-router-dom';
import Header from '../header/header';

function NotFoundPage(): JSX.Element {
  return(
    <>
      <Header />
      <div className="container">
        <Link to="/">
          <h2>Back to main page</h2>
        </Link>
        <img src="img/not-found.jpg" alt="not found page" width='100%' />
      </div>
    </>
  );
}

export default NotFoundPage;
