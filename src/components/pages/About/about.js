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

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Curabitur ut augue finibus, luctus tortor at, ornare erat. Nulla facilisi. Sed est risus, laoreet et quam non, viverra accumsan leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Curabitur ut augue finibus, luctus tortor at, ornare erat. </p>

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