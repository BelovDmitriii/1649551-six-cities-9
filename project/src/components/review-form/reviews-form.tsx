import { useState, ChangeEvent, FormEvent } from 'react';
import {useAppDispatch} from '../../hooks';
import {fetchSendReview} from '../../store/api-actions';
import Rating from '../rating-component/rating-component';
import { OfferType } from '../../types/offer';
import { ReviewWithIdType } from '../../types/review';

type ReviewFormProps = {
  currentOffer: OfferType;
  currentId: number;
}

function ReviewForm({currentOffer, currentId}:ReviewFormProps):JSX.Element {

  const dispatch = useAppDispatch();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const isDisabled = rating === 0 || comment.length < 50;

  const ratingChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    setRating(Number(value));
  };

  const commentChangeHandler = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    evt.preventDefault();
    const { value } = evt.target;
    setComment(value);
  };

  const onSubmit = (reviewData: ReviewWithIdType) => {
    dispatch(fetchSendReview(reviewData));
    setRating(0);
    setComment('');
  };

  const formSubmitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    onSubmit({
      comment: comment,
      rating: rating,
      id: Number(currentId),
    });

  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={formSubmitHandler}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <Rating getRating={ratingChangeHandler} rating={rating}/>
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
        <button className="reviews__submit form__submit button" type="submit" disabled={isDisabled} >Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
