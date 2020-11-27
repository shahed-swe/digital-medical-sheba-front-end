import React, { Component } from 'react';
import './contact.css';
import NavigationBar from '../../assets/navbar/navbar';
import FooterBar from '../../assets/footer/footer';
import AboutImage2 from '../../utils/images/about-bg.png';

class Contact extends Component {
    render() {
        return (
            <div>
                <NavigationBar/>
                <SiteHeader/>
                <FooterBar/>
            </div>
        )
    }
}

const SiteHeader = () => {
    return (
        <div className="single-page">
            <div className="site-header">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>Contact</h1>
                            <div className="breadcrumbs">
                                <ul className="d-flex flex-wrap align-items-center p-0 m-0">
                                    <li><a href="/">Home</a></li>
                                    <li>About Us</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

                <img className="header-img" src={AboutImage2} alt=""/>
            </div>
        </div>
    )
}

export default Contact;