import React from 'react';

const Slider = () => {
    return (
        <div>
            <div class="fh5co-slider-outer wow fadeIn" data-wow-delay="0.36s">
                <h1>SIMPLE WIDGETS</h1>
                <small>Drag and Drop</small>
                <div class="container fh5co-slider-inner">
                    <div class="owl-carousel owl-theme">
                        <div class="item"><img src="/images/smartphone-2.png" alt="" /></div>
                        <div class="item"><img src="images/smartphone-2.png" alt="" /></div>
                        <div class="item"><img src="images/iphone.png" alt="" /></div>
                        <div class="item"><img src="images/smartphone-2.png" alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider;