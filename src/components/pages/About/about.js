import React, {Component} from 'react';
import NavigationBar from '../../assets/navbar/navbar';
import FooterBar from '../../assets/footer/footer';
import "./about.css"

class About extends Component{
    render(){
        return(
            <div>
                <NavigationBar/>
                <FAQ/>
                <FooterBar/>
            </div>
            
        )
    }
}


const FAQ = () =>{
    return (
        <div class="faq-stuff">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2>Faq & Stuff</h2>
                    </div>

                    <div class="col-12 col-lg-6 mb-5 mb-lg-0">
                        <div class="accordion-wrap type-accordion">
                            <h3 class="entry-title d-flex justify-content-between align-items-center active">Elit mir congue ligula et efficitur pellentesqu<span class="arrow-r"></span></h3>

                            <div class="entry-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris.</p>
                            </div>

                            <h3 class="entry-title d-flex justify-content-between align-items-center">Pulvinar elit mi. Integer congue ligula et efficitur <span class="arrow-r"></span></h3>

                            <div class="entry-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris.</p>
                            </div>

                            <h3 class="entry-title d-flex justify-content-between align-items-center">Pellentesque pulvinar elit mi. Integer congue<span class="arrow-r"></span></h3>

                            <div class="entry-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-lg-6 mt-5 mt-lg-0">
                        <div class="row">
                            <div class="col-12 col-md-6">
                                <div class="professional-box">
                                    <h2 class="d-flex align-items-center">Professional</h2>

                                    <img src="images/cardiogram-2.png" alt=""/>

                                    <p>Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Donec males uada lorem.</p>
                                </div>
                            </div>

                            <div class="col-12 col-md-6">
                                <div class="quality-box">
                                    <h2 class="d-flex align-items-center">Quality</h2>

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