import React, { useEffect, useState } from 'react';
import './Review.css'
import Dp from '../../image/download.jpg'

const Review = () => {
    const [review, setReview] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReview(data))

    }, [])
    return (
        <div className="container">
            <h1>Services</h1><br />
            <div className="row">
                {
                    review.map(review =>
                        <div className="col-md-4">
                            <div className="review">
                                <div className="row">
                                    <div className="col-3">
                                        <img src={Dp} class="img-fluid" />
                                    </div>
                                    <div className="col-9">
                                        <h5>{review.name}</h5>
                                    </div>
                                </div>


                                <p className="mt-3">{review.review}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Review;