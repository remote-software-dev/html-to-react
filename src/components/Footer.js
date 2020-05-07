import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer-outer">
                <div className="container footer-inner">
                    <div className="footer-three-grid wow fadeIn animated" data-wow-delay="0.66s">
                        <div className="column-1-3">
                            <h1>App</h1>
                        </div>
                        <div className="column-2-3">
                            <nav className="footer-nav">
                                <ul>
                                    <a href="#"><li>Home</li></a>
                                    <a href="#"><li>Features</li></a>
                                    <a href="#"><li>Reviews</li></a>
                                    <a href="#"><li className="active">Download</li></a>
                                </ul>
                            </nav>
                        </div>
                        <div className="column-3-3">
                            <div className="social-icons-footer">
                                <a href="https://www.facebook.com/fh5co"><i className="fab fa-facebook-f"></i></a>
                                <a href="https://freehtml5.co"><i className="fab fa-instagram"></i></a>
                                <a href="https://www.twitter.com/fh5co"><i className="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>

                    <span className="border-bottom-footer"></span>

                    <p className="copyright">&copy; 2018 App. All rights reserved. Design by <a href="https://freehtml5.co" target="_blank">FreeHTML5</a>.</p>

                </div>
            </footer>
        </div>
    )
}

export default Footer;