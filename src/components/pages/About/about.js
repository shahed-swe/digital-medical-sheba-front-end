import React, {Component} from 'react';
import NavigationBar from '../../assets/navbar/navbar';
import FooterBar from '../../assets/footer/footer';
import "./about.css"
import AboutImage from '../../utils/images/about.jpg'

class About extends Component{
    render(){
        return(
            <div>
                <NavigationBar/>
                <History/>

                <FooterBar/>
            </div>
            
        )
    }
}


const History = () => {
    return(
            <div class="med-history">
                <div class="container">
                    <div class="row align-items-end">
                        <div class="col-12 col-lg-6">
                            <h2>Digital Sheba</h2>

                            <p>“Digital Sheba” is a web-based & Mobile Based app that is focused on
                                the patient who Admitted to the hospital. It will be able to schedule
                                the time of taking medicine and getting those equipment according to
                                the patients need. This app focuses on giving the best service of
                                caring from the nurses and alarming it to the patient who is admitted
                                to the hospital. </p>

                            <a class="d-inline-block button gradient-bg" href="#history">Read More</a>
                        </div>

                        <div class="col-12 col-lg-6 mt-5 mt-lg-0">
                            <img class="responsive" src={AboutImage} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default About;