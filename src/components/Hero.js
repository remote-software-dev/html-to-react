import React from 'react';

const Hero = () => {
    return (
        <div>
            <div id="fh5co-hero-wrapper">
                <nav class="container navbar navbar-expand-lg main-navbar-nav navbar-light">
                    <a class="navbar-brand" href="">App</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav nav-items-center ml-auto mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" onclick="">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" onclick="">Reviews</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" onclick="">Download</a>
                            </li>
                        </ul>
                        <div class="social-icons-header">
                            <a href="https://www.facebook.com/fh5co"><i class="fab fa-facebook-f"></i></a>
                            <a href="https://freehtml5.co"><i class="fab fa-instagram"></i></a>
                            <a href="https://www.twitter.com/fh5co"><i class="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </nav>

                <div class="container fh5co-hero-inner">
                    <h1 class="animated fadeIn wow" data-wow-delay="0.4s">A Free HTML5 App Template Built with Bootstrap 4</h1>
                    <p class="animated fadeIn wow" data-wow-delay="0.67s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et voluptates, aliquid soluta distinctio dolorum tenetur. </p>
                    <button class="btn btn-md download-btn-first wow fadeInLeft animated" data-wow-delay="0.85s" onclick="$('#fh5co-download').goTo();return false;">Download</button>
                    <button class="btn btn-md features-btn-first animated fadeInLeft wow" data-wow-delay="0.95s" onclick="$('#fh5co-features').goTo();return false;">Features</button>
                    <img class="fh5co-hero-smartphone animated fadeInRight wow" data-wow-delay="1s" src="/images/phone-image.png" alt="Smartphone" />
                </div>
            </div>
        </div>
    )
}

export default Hero;