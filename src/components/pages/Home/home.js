import React, {useState} from 'react';
import {Notifications} from 'react-push-notification';
import addNotification from 'react-push-notification';
import NavigationBar from '../../assets/navbar/navbar'
import FooterBar from '../../assets/footer/footer';
import Hero from '../../utils/images/hero.jpg';
import '../../utils/style.css';
import '../../utils/swiper.min.css';
import Logo from '../../utils/images/emergency-call.png';

const Home = (props) => {
    const [userName, setUserName] = useState("Shahed")

    return(
        <div>
            <Header/>
            <Appointment/>
            <Notifications/>
            {/* <h2>Welcome Home</h2>
            <label>
                Enter Your name
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)}/>
            </label>
        <span>Your Entered: {userName}</span> */}
        {/* <Page/> */}
        <FooterBar/>
        </div>
    )
}

const Page = () => {
    const buttonClick = () => {
        addNotification({
            title: 'Warning',
            subtitle:'This is a subtitle',
            message:'This is a very long message',
            theme:'darkblue',
            native: true
        });
    }

    return (
        <div className="page">
            <button onClick={buttonClick} className="button">
                Hello world
            </button>
        </div>
    )
}

const Header = () => {
    return (
        <div>
            <NavigationBar />
            <Carrosel/>
        </div>
    )
}

const Carrosel = () => {
    return (
        <div className="swiper-container hero-slider">
            <div className="swiper-wrapper">
                <div className="swiper-slide hero-content-wrap" style={{backgroundImage: `url(${Hero})`}}>
                    <div className="hero-content-overlay position-absolute w-100 h-100">
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-start">
                                    <header className="entry-header">
                                        <h1>The Best <br/>Medical Services</h1>
                                    </header>

                                    <div className="entry-content mt-4">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
                                        </div>

                                    <footer className="entry-footer d-flex flex-wrap align-items-center mt-4">
                                            <a href="#about" className="button gradient-bg">Read More</a>
                                        </footer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const Appointment = () => {
    return (
        <div class="homepage-boxes">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="opening-hours">
                            <h2 class="d-flex align-items-center">Opening Hours</h2>

                            <ul class="p-0 m-0">
                                <li>Monday - Thursday <span>8.00 - 19.00</span></li>
                                <li>Friday <span>8.00 - 18.30</span></li>
                                <li>Saturday <span>9.30 - 17.00</span></li>
                                <li>Sunday <span>9.30 - 15.00</span></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
                        <div class="emergency-box">
                            <h2 class="d-flex align-items-center">Emergency</h2>

                            <div class="call-btn button gradient-bg">
                                <a class="d-flex justify-content-center align-items-center" href="#"><img src={Logo}/> +34 586 778 8892</a>
                        </div>

                                <p>Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Donec males uada lorem maximus mauris sceler isque, at rutrum nulla.</p>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 col-lg-5 mt-5 mt-lg-0">
                            <div class="appointment-box">
                                <h2 class="d-flex align-items-center">Make an Appointment</h2>

                                <form class="d-flex flex-wrap justify-content-between">
                                    <select class="select-department">
                                        <option value="value1">Select Department</option>
                                        <option value="value2">Select Department 1</option>
                                        <option value="value3">Select Department 2</option>
                                    </select>

                                    <select class="select-doctor">
                                        <option>Select Doctor</option>
                                        <option>Select Doctor 1</option>
                                        <option>Select Doctor 2</option>
                                    </select>

                                    <input type="text" placeholder="Name"/>

                                        <input type="number" placeholder="Phone No"/>

                                            <input class="button gradient-bg" type="submit" value="Boom Appoitnment"/>
                        </form>
                    </div>

                </div>
            </div>
                            </div>
                        </div>
    )
}

export default Home;