import MainPage from '../main-page/main-page';

type AppScreenProps = {
  rentOffer: number;
}
function App({rentOffer}:AppScreenProps): JSX.Element {
  return (
    <MainPage rentOffer={rentOffer}/>
  );
}

export default App;
