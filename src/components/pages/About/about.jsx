import React, {Component} from 'react';
import NavigationBar from '../../assets/navbar/navbar';
import FooterBar from '../../assets/footer/footer';
import "./about.css";
// import '../../utils/style.css';
import AboutImage from '../../utils/images/about.jpg';
import Accordion from 'react-bootstrap/Accordion';
import {Button} from 'react-bootstrap';
import AboutImage2 from '../../utils/images/about-bg.png';
import {Subscribe} from '../../pages/Home/talk';

class About extends Component{
    render(){
        return(
            <div>
                <NavigationBar/>
                <SiteHeader/>
                <History/>
                <FAQ/>
                <Subscribe/>
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
                            <h1>We Are Digital Sheba Team</h1>
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

const History = () => {
    return(
            <div className="med-history">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-12 col-lg-6">
                            <h2>Digital Sheba</h2>

                            <p>“Digital Sheba” is a web-based & Mobile Based app that is focused on
                                the patient who Admitted to the hospital. It will be able to schedule
                                the time of taking medicine and getting those equipment according to
                                the patients need. This app focuses on giving the best service of
                                caring from the nurses and alarming it to the patient who is admitted
                                to the hospital. </p>

                            <a className="d-inline-block button gradient-bg" href="#history">Read More</a>
                        </div>

                        <div className="col-12 col-lg-6 mt-5 mt-lg-0">
                            <img className="responsive" src={AboutImage} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
    )
}


const FAQ = () => {
    return (
            <div className="faq-stuff">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>Faq & Stuff</h2>
                        </div>

                        <Accordion className="col-12 col-lg-6 mb-5 mb-lg-0" defaultActiveKey="0">
                            <div className="accordion-wrap type-accordion">
                                <h3 className="entry-title d-flex justify-content-between align-items-center active">Why You should take our service?<Accordion.Toggle className="arrow-r" as={Button} eventKey="0"></Accordion.Toggle></h3>

                                <Accordion.Collapse  eventKey="0">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris.</p>
                                </Accordion.Collapse>

                                <h3 className="entry-title d-flex justify-content-between align-items-center">How we serve our best service? <Accordion.Toggle className="arrow-r" as={Button} eventKey="1"></Accordion.Toggle></h3>

                                <Accordion.Collapse  eventKey="1">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris.</p>
                                </Accordion.Collapse>

                                <h3 className="entry-title d-flex justify-content-between align-items-center">What will happen  if we fall into problem using it?<Accordion.Toggle className="arrow-r" as={Button} eventKey="2"></Accordion.Toggle></h3>

                                <Accordion.Collapse  eventKey="2">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris.</p>
                                </Accordion.Collapse>
                            </div>
                        </Accordion>

                        <div className="col-12 col-lg-6 mt-5 mt-lg-0">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <div className="professional-box">
                                        <h2 className="d-flex align-items-center">Professional</h2>

                                        <img src="images/cardiogram-2.png" alt=""/>

                                        <p>Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Donec males uada lorem.</p>
                                    </div>
                                </div>

                                <div className="col-12 col-md-6">
                                    <div className="quality-box">
                                        <h2 className="d-flex align-items-center">Quality</h2>

                                        <img src="images/hospital.png" alt=""/>

                                        <p>Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Donec males uada lorem.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}


export default About;