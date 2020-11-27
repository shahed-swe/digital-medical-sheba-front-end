import React, {Component} from 'react';
import './home.css';
import '../../utils/style.css';
import '../../utils/swiper.css';
import UserOne from '../../utils/images/user.jpg';

class Talk extends Component{
    render(){
        return(
                <div className="testimonial-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2>Young Dev Ops Team</h2>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-slider">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-9">
                                    <div className="testimonial-bg-shape">
                                        <div className="container testimonial-slider-wrap">
                                            <div className="swiper-wrapper">
                                                <div className="swiper-slide">
                                                    <div className="entry-content">
                                                        <p>Young DevOps is a team of enthusiast developers who are providing different software
                                                            solutions to local businesses and startups. Young DevOps has started its journey in October
                                                            2020 and this is the first project of the Young DevOps team. This team is ready to work for
                                                            client satisfaction and projects must be completed within your budget.</p>
                                                    </div>
                                                    <div className="entry-footer">
                                                        <figure className="user-avatar">
                                                            <img src={UserOne} alt=""/>
                                                        </figure>
                                                        <h3 className="testimonial-user">Shahed Talukder <span>Daffodil International University, Dhaka</span></h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}


class Subscribe extends Component{
    render(){
        return(
                <div class="subscribe-banner">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 col-lg-8 offset-lg-2">
                                <h2>Subscribe to our newsletter</h2>

                                <form method="POST">
                                    <input type="email" placeholder="E-mail address"/>
                                    <input class="button gradient-bg" type="submit" value="Subscribe"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export {Talk, Subscribe};