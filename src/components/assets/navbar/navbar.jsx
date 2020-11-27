import React, {Component} from 'react';
import '../../utils/style.css';
import Logo from "../../utils/images/logo.png";
import Emergency from "../../utils/images/emergency-call.png";

class NavigationBar extends Component{
    constructor(props){
        super(props);
        this.type = "Push";
        this.leftToggle = this.leftToggle.bind(this);
        this.onCreate = this.onCreate.bind(this);
    }
    onCreate() {
        this.leftSidebarObj.element.style.visibility = '';
        this.rightSidebarObj.element.style.visibility = '';
    }

    leftToggle(){
        this.leftSidebarObj.classList.toggle('show');
    }

    render(){

        return(
            <div className="nav-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex flex-wrap justify-content-between align-items-center fixed-top newnav m-auto">
                            <div className="site-branding d-flex align-items-center">
                                <a className="d-block" href="/" rel="home"><img className="d-block" src={Logo} alt="logo"/></a>
                        </div>

                            <nav className="site-navigation d-flex justify-content-end align-items-center" ref={Sidebar => this.leftSidebarObj = Sidebar} type={this.type} created={this.onCreate}>
                                    <ul className="d-flex flex-column flex-lg-row justify-content-lg-end align-items-center">
                                        <li className="current-menu-item"><a href="/">Home</a></li>
                                        <li><a href="/about">About us</a></li>
                                        <li><a href="#service">Services</a></li>
                                        <li><a href="#news">Tips</a></li>
                                        <li><a href="/contact">Contact</a></li>

                                        <li className="call-btn button gradient-bg mt-3 mt-md-0">
                                            <a className="d-flex justify-content-center align-items-center" href="#call"><img src={Emergency} alt="_"/> +34 586 778 8892</a>
                                </li>
                            </ul>
                        </nav>

                            <div className="hamburger-menu d-lg-none" onClick={this.leftToggle} >
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}



export default NavigationBar;