import React, {useState} from 'react';
import {Notifications} from 'react-push-notification';
import addNotification from 'react-push-notification';
import NavigationBar from '../../assets/navbar/navbar'
import FooterBar from '../../assets/footer/footer';
import Hero from '../../utils/images/hero.jpg';
import '../../utils/style.css';
import '../../utils/swiper.min.css';
import {Carousel} from 'react-bootstrap';
import { render } from '@testing-library/react';

const Home = (props) => {
    const [userName, setUserName] = useState("Shahed")

    return(
        <div>
            <Header/>
            <Notifications/>
            <h2>Welcome Home</h2>
            <label>
                Enter Your name
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)}/>
            </label>
        <span>Your Entered: {userName}</span>
        <Page/>
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
            <ControlledCarousel/>
        </div>
    )
}

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
        return (
            <Carousel activeIndex={index} onSelect={handleSelect}>
                
                <div className="swiper-container hero-slider">
                    <div className="swiper-wrapper">
                        <Carousel.Item>
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
                                                    <a href="#" className="button gradient-bg">Read More</a>
                                                </footer>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Carousel.Item>
                        <Carousel.Item>
                        <div className="swiper-slide hero-content-wrap" style={{ backgroundImage: `url(${Hero})` }}>
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
                                                        <a href="#" className="button gradient-bg">Read More</a>
                                                    </footer>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Carousel.Item>
                        <Carousel.Item>
                        <div className="swiper-slide hero-content-wrap" style={{ backgroundImage: `url(${Hero})` }}>
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
                                                            <a href="#" className="button gradient-bg">Read More</a>
                                                        </footer>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Carousel.Item>
                    </div>
                </div>
            </Carousel>
        )
}
render(<ControlledCarousel/>);

export default Home;