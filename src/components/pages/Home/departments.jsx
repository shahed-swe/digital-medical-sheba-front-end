import React, { Component } from 'react';
import '../../utils/style.css';
import Cardiogram from '../../utils/images/cardiogram.png';
import Stomac from '../../utils/images/stomach-2.png';
import BloodSample from '../../utils/images/blood-sample-2.png';
import Teeth from '../../utils/images/teeth.png';
import Stretcher from '../../utils/images/stretcher.png';
import Scanner from '../../utils/images/scanner.png';
import Bone from '../../utils/images/bones.png';
import BloodDonate from '../../utils/images/blood-donation-2.png';
import Glass from '../../utils/images/glasses.png';


class Department extends Component{
    render(){
        return(
                <div className="our-departments">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="our-departments-wrap">
                                    <h2>Our Departments</h2>

                                    <div className="row">
                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="our-departments-cont">
                                                <header className="entry-header d-flex flex-wrap align-items-center">
                                                    <img src={Cardiogram} alt=""/>

                                                    <h3>Cardioology</h3>
                                                </header>

                                                <div className="entry-content">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris.</p>
                                                </div>

                                                <footer className="entry-footer">
                                                    <a href="#read">read more</a>
                                                </footer>
                                            </div>
                                        </div>

                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="our-departments-cont">
                                                <header className="entry-header d-flex flex-wrap align-items-center">
                                                    <img src={Stomac} alt=""/>

                                                    <h3>Gastroenterology</h3>
                                                </header>

                                                <div className="entry-content">
                                                    <p>Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien.</p>
                                                </div>

                                                <footer className="entry-footer">
                                                    <a href="#read">read more</a>
                                                </footer>
                                            </div>
                                        </div>

                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="our-departments-cont">
                                                <header className="entry-header d-flex flex-wrap align-items-center">
                                                    <img src={BloodSample} alt=""/>

                                                    <h3>Medical Lab</h3>
                                                </header>

                                                <div className="entry-content">
                                                    <p>Lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus.</p>
                                                </div>

                                                <footer className="entry-footer">
                                                    <a href="#read">read more</a>
                                                </footer>
                                            </div>
                                        </div>

                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="our-departments-cont">
                                                <header className="entry-header d-flex flex-wrap align-items-center">
                                                    <img src={Teeth} alt=""/>

                                                    <h3>Dental Care</h3>
                                                </header>

                                                <div className="entry-content">
                                                    <p>Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien.</p>
                                                </div>

                                                <footer className="entry-footer">
                                                    <a href="#read">read more</a>
                                                </footer>
                                            </div>
                                        </div>

                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="our-departments-cont">
                                                <header className="entry-header d-flex flex-wrap align-items-center">
                                                    <img src={Stretcher} alt=""/>

                                                    <h3>Surgery</h3>
                                                </header>

                                                <div className="entry-content">
                                                    <p>Lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus.</p>
                                                </div>

                                                <footer className="entry-footer">
                                                    <a href="#read">read more</a>
                                                </footer>
                                            </div>
                                        </div>

                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="our-departments-cont">
                                                <header className="entry-header d-flex flex-wrap align-items-center">
                                                    <img src={Scanner} alt=""/>

                                                    <h3>Neurology</h3>
                                                </header>

                                                <div className="entry-content">
                                                    <p>Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien.</p>
                                                </div>

                                                <footer className="entry-footer">
                                                    <a href="#read">read more</a>
                                                </footer>
                                            </div>
                                        </div>

                                        <div className="col-12 col-md-6 col-lg-4 mb-md-0">
                                            <div className="our-departments-cont">
                                                <header className="entry-header d-flex flex-wrap align-items-center">
                                                    <img src={Bone} alt=""/>

                                                    <h3>Orthopaedy</h3>
                                                </header>

                                                <div className="entry-content">
                                                    <p>Lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus.</p>
                                                </div>

                                                <footer className="entry-footer">
                                                    <a href="#read">read more</a>
                                                </footer>
                                            </div>
                                        </div>

                                        <div className="col-12 col-md-6 col-lg-4 mb-lg-0">
                                            <div className="our-departments-cont">
                                                <header className="entry-header d-flex flex-wrap align-items-center">
                                                    <img src={BloodDonate} alt=""/>

                                                    <h3>Pediatry</h3>
                                                </header>

                                                <div className="entry-content">
                                                    <p>Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien.</p>
                                                </div>

                                                <footer className="entry-footer">
                                                    <a href="#read">read more</a>
                                                </footer>
                                            </div>
                                        </div>

                                        <div className="col-12 col-md-6 col-lg-4 mb-0">
                                            <div className="our-departments-cont">
                                                <header className="entry-header d-flex flex-wrap align-items-center">
                                                    <img src={Glass} alt=""/>

                                                    <h3>Ophthalmology</h3>
                                                </header>

                                                <div className="entry-content">
                                                    <p>Lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus.</p>
                                                </div>

                                                <footer className="entry-footer">
                                                    <a href="#read">read more</a>
                                                </footer>
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

export default Department;