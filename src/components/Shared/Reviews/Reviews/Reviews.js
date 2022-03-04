import React from 'react';
import useReviews from '../../../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const { reviews, spinner } = useReviews();
    return (
        <div className='container my-5'>
            <div class="row row-cols-1 row-cols-md-3 g-4">

                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }

            </div>
        </div>
    );
};

export default Reviews;