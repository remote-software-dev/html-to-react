import React from 'react';

const Features = () => {
    return (
        <div>
            <div className="curved-bg-div wow animated fadeIn" data-wow-delay="0.15s"></div>
            <div id="fh5co-features" className="fh5co-features-outer">
                <div className="container">
                    <div className="row fh5co-features-grid-columns">
                        <div className="col-sm-6 in-order-1 wow animated fadeInLeft" data-wow-delay="0.22s">
                            <div className="col-sm-image-container">
                                <img className="img-float-left" src="/images/smartphone-1.png" alt="smartphone-1" />
                                <span className="span-new">NEW</span>
                                <span className="span-free">Free</span>
                            </div>
                        </div>

                        <div className="col-sm-6 in-order-2 sm-6-content wow animated fadeInRight" data-wow-delay="0.22s">
                            <h1>New Features</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolor iste beatae ad adipisci, fugiat dignissimos pariatur, dolore nemo suscipit cum nisi earum voluptates nulla! </p>
                            <span className="circle circle-first"><i className="fab fa-instagram"></i></span>
                            <span className="circle circle-middle"><i className="fab fa-facebook"></i></span>
                            <span className="circle circle-last"><i className="fab fa-twitter"></i></span>
                        </div>

                        <div className="col-sm-6 in-order-3 sm-6-content wow animated fadeInLeft" data-wow-delay="0.22s">
                            <h1>REAL-TIME STATISTICS</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolor iste beatae ad adipisci, fugiat dignissimos pariatur, dolore nemo suscipit cum nisi earum voluptates nulla! </p>
                            <span className="circle circle-first"><i className="fas fa-star"></i></span>
                            <span className="circle circle-middle"><i className="far fa-star"></i></span>
                            <span className="circle circle-last"><i className="far fa-thumbs-up"></i></span>
                        </div>

                        <div className="col-sm-6 in-order-4 wow animated fadeInRight" data-wow-delay="0.22s">
                            <img className="img-float-right" src="/images/smartphone-2.png" alt="smartphone-2" />
                        </div>

                        <div className="col-sm-6 in-order-5 wow animated fadeInLeft" data-wow-delay="0.22s">
                            <div className="col-sm-image-container">
                                <img className="img-float-left" src="/images/smartphone-2.png" alt="smartphone-3" />
                                <span className="span-data">DATA</span>
                                <span className="span-percent">100%</span>
                            </div>
                        </div>
                        <div className="col-sm-6 in-order-6 sm-6-content wow animated fadeInRight" data-wow-delay="0.22s">
                            <h1>POWERFUL BACKEND</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolor iste beatae ad adipisci, fugiat dignissimos pariatur, dolore nemo suscipit cum nisi earum voluptates nulla! </p>
                            <span className="circle circle-first">95%</span>
                            <span className="circle circle-middle"><i className="fas fa-forward"></i></span>
                            <span className="circle circle-last"><i className="fab fa-github"></i></span>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;