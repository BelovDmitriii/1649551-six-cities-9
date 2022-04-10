import Header from '../header/header';
import SignInScreen from '../sign-in-screen/sign-in-screen';

function SignInPage(): JSX.Element {

  return (
    <div className="page page--gray page--login">
      <Header isThisPageLogin/>
      <SignInScreen />
    </div>
  );
}

export default SignInPage;
