import styles from './spinner.module.css';

function Spinner(): JSX.Element {
  return (
    <div className="spinner">
      <div className="spinner-circle spinner-circle-outer"></div>
      <div className="spinner-circle-off spinner-circle-inner"></div>
      <div className="spinner-circle spinner-circle-single-1"></div>
      <div className="spinner-circle spinner-circle-single-2"></div>
      <div className="text">...Грузимся...</div>
    </div>);
}

export default Spinner;
