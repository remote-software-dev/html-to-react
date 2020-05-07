import React from 'react';

const Reviews = () => {
    return (
        <div>
            <div id="fh5co-reviews" className="fh5co-reviews-outer">
                <h1>What people are saying</h1>
                <small>Reviews</small>
                <div className="container fh5co-reviews-inner">
                    <div className="row justify-content-center">
                        <div className="col-sm-5 wow fadeIn animated" data-wow-delay="0.25s">
                            <img className="float-left" src="/images/quotes-1.jpg" alt="Quote 1" />
                            <p className="testimonial-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis similique quasi.</p>
                            <small className="testimonial-author">John Doe</small>
                            <img className="float-right" src="/images/quotes-2.jpg" alt="Quote 2" />
                        </div>

                        <div className="col-sm-5 testimonial-2 wow fadeIn animated" data-wow-delay="0.67s">
                            <img className="float-left" src="/images/quotes-1.jpg" alt="Quote 1" />
                            <p className="testimonial-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis similique quasi.</p>
                            <small className="testimonial-author">Someone</small>
                            <img className="float-right" src="/images/quotes-2.jpg" alt="Quote 2" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews;