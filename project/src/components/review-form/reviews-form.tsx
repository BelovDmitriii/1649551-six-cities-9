import { useState, ChangeEvent, useEffect, FormEvent } from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import { errorHandle } from '../../services/error-handles';
import {fetchSendReview} from '../../store/api-actions';

function ReviewForm():JSX.Element {

  const dispatch = useAppDispatch();
  const {currentOffer} = useAppSelector((state) => state);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  useEffect(() => {
    const submitButton: HTMLButtonElement | null =
      document.querySelector('.form__submit');
    if (rating !== 0 && comment.length >= 50) {
      (submitButton as HTMLButtonElement).disabled = false;
    } else {
      (submitButton as HTMLButtonElement).disabled = true;
    }
  }, [rating, comment]);

  const ratingChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    setRating(Number(value));
  };

  const commentChangeHandler = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    evt.preventDefault();
    const { value } = evt.target;
    setComment(value);
  };

  const fieldset: HTMLFieldSetElement | null = document.querySelector('.reviews__fieldset');

  const sendReview = async () => {
    try {
      await dispatch(fetchSendReview({ id: currentOffer.id, comment, rating }));
      setComment('');
      setRating(0);
      (fieldset as HTMLFieldSetElement).disabled = false;
    } catch (error) {
      errorHandle(error);
      (fieldset as HTMLFieldSetElement).disabled = false;
    }
  };

  const formSubmitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    (fieldset as HTMLFieldSetElement).disabled = true;
    sendReview();
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={formSubmitHandler}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        <input
          onChange={ratingChangeHandler}
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={5}
          value="5"
          id="5-stars"
          type="radio"
        >
        </input>
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"></input>
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"></input>
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"></input>
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio"></input>
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea"
        onChange={commentChangeHandler}
        value = {comment}
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">
            rating
          </span>
            and describe your stay with at least
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled >Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
