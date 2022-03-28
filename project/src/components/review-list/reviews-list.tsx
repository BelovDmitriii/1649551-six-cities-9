import ReviewItem from '../review-item/reviews-item';
import { ReviewType } from '../../types/offer';
import {lengthOfReviews, sortReviewsDate} from '../../utils';
import {useAppSelector} from '../../hooks';

function ReviewList (): JSX.Element {

  const {reviews} = useAppSelector((state) => state);
  const sortReviews: ReviewType[] = sortReviewsDate(reviews);
  const shownReviews: ReviewType[] = lengthOfReviews(sortReviews);

  return (
    <ul className="reviews__list">
      {shownReviews.map((review) => (
        <ReviewItem review={review} key={review.id} />
      ))}
    </ul>
  );
}

export default ReviewList;
