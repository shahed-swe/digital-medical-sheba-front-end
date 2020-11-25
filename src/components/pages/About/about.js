import React, {Component} from 'react';
import NavigationBar from '../../assets/navbar/navbar';
import FooterBar from '../../assets/footer/footer';
import "./about.css"

class About extends Component{
    render(){
        return(
            <div>
                <NavigationBar/>
                <h1>Hello This is about page</h1>
                <FooterBar/>
            </div>
            
        )
    }
}

export default About;