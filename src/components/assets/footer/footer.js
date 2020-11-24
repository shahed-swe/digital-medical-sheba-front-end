import React from 'react';

import Logo from "../../utils/images/logo.png";

const FooterBar = () => {
    return (
        <div className="site-footer">
            <div className="footer-widgets">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="foot-about">
                                <h2><a href="/"><img src={Logo} alt="" /></a></h2>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien.</p>

                                <p className="copyright">
                                    Copyright &copy;{new Date().getFullYear()} All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" rel="noreferrer">Colorlib</a></p>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4 mt-5 mt-md-0">
                            <div className="foot-contact">
                                <h2>Contact</h2>

                                <ul className="p-0 m-0">
                                    <li><span>Addtress:</span>Mitlton Str. 26-27 London UK</li>
                                    <li><span>Phone:</span>+53 345 7953 32453</li>
                                    <li><span>Email:</span>yourmail@gmail.com</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4 mt-5 mt-md-0">
                            <div className="foot-links">
                                <h2>Usefull Links</h2>

                                <ul className="p-0 m-0">
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/">About us</a></li>
                                    <li><a href="/">Departments</a></li>
                                    <li><a href="/">Contact</a></li>
                                    <li><a href="/">FAQ</a></li>
                                    <li><a href="/">Testimonials</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterBar;