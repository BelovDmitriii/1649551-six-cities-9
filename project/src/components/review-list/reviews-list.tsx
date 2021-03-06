import ReviewItem from '../review-item/reviews-item';
import { ReviewType } from '../../types/offer';
import {lengthOfReviews, sortReviewsDate} from '../../utils';

type ReviewListProps = {
  reviews: ReviewType[];
}

function ReviewList ({reviews}:ReviewListProps): JSX.Element {

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
