import React from 'react';
import Rating from 'react-rating';
import './Review.css'
const Review = ({ review }) => {
    const { name, email, photo, reviews, rating, _id } = review;
    return (
        <div>
            <div class="col border p-3">
                <div class=" d-flex align-items-center h-100">
                    <img className='review-photo' src={photo} alt="..." />
                    <div className=" ms-2">
                        <Rating
                            className='text-warning rating-size'
                            initialRating={rating}
                            emptySymbol="fa fa-star-o fa-2x"
                            fullSymbol="fa fa-star fa-2x"
                            readonly
                        />
                        <div class="m-0 p-0">
                            <span class="fw-lighter r-title">By {name}</span>
                        </div>
                    </div>
                </div>
                <div class="mt-2">
                    <em class="fw-lighter">{reviews}</em>
                </div>
            </div>
        </div>
    );
};

export default Review;