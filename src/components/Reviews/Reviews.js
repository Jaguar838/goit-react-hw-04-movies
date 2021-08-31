import { useState, useEffect } from 'react';
import moviesAPI from 'services/moviesAPI';
import css from './Reviews.module.css';

function Review({ reviews }) {
  const [showMore, setShowMore] = useState(false);
  const changeReviewLength = content => content.slice(0, 300) + ' ...';
  return (
    <>
      {reviews.length > 0 ? (
        reviews.map(({ author, content, id }) => (
          <li key={id} className={css.item}>
            <h3 className={css.title}>Author: {author}</h3>
            <p className={css.review}>
              {!showMore ? changeReviewLength(content) : content}
            </p>
            <button
              className={css.showMore}
              onClick={() => setShowMore(!showMore)}
              data-id={id}
            >
              {showMore ? 'less more' : 'show more'}
            </button>
          </li>
        ))
      ) : (
        <p>No reviews</p>
      )}
    </>
  );
}

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    moviesAPI
      .getReviewsID(movieId)
      .then(reviews => {
        if (reviews.length === 0) {
          console.log('We don`t have any reviews for this movie.');
        }
        setReviews(reviews);
      })
      .catch(error => {
        console.log(error);
        console.log('Whoops, something went wrong. Enter your request again');
      });
  }, [movieId]);

  return (
    <ul>
      <Review reviews={reviews} />
    </ul>
  );
}
