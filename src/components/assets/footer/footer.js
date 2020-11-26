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

                                <p>A web-based & Mobile Based app that is focused on
                                    the patient who Admitted to the hospital. It will be able to schedule
                                    the time of taking medicine and getting those equipment according to
                                    the patients need.</p>

                                <p className="copyright">
                                    Copyright &copy;{new Date().getFullYear()} All rights reserved by <a href="https://github.com/shahed-swe/" target="_blank" rel="noreferrer">Shahed</a></p>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4 mt-5 mt-md-0">
                            <div className="foot-contact">
                                <h2>Contact</h2>

                                <ul className="p-0 m-0">
                                    <li><span>Addtress:</span>Khagan, Ashulia, Savar, Dhaka</li>
                                    <li><span>Phone:</span>+8801762178238</li>
                                    <li><span>Email:</span>shahedtalukder51@gmail.com</li>
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