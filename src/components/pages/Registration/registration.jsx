import React, { Component } from 'react'
import NavigationBar from '../../assets/navbar/navbar';
import FooterBar from '../../assets/footer/footer';
import {Subscribe} from '../../pages/Home/talk';
import './registration.css'
import DigitalSheba from '../../utils/images/digital_sheba.png'

export default class registration extends Component {
    render() {
        return (
            <div>
                <NavigationBar/>
                <div className="container take">
                    <h1>Registration Here</h1>
                    <div className="row">
                        <div className="col-12 col-lg-6 col-md-8 col-sm-10">
                            <form method="POST">
                                <div className="form-row">
                                    <div className="form-group">
                                        <div className="form-group">
                                            <label htmlFor="username">User name</label>
                                            <input type="text" className="form-control col-10" name="user.username" placeholder="Username"/>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-6">
                                                <label htmlFor="">First Name</label>
                                                <input type="text" className="form-control" name="user.first_name" placeholder="First Name"/>
                                            </div>
                                            <div className="form-group col-6">
                                                <label htmlFor="">Last Name</label>
                                                <input type="text" className="form-control" name="user.last_name" placeholder="Last Name"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-6">
                                                <label htmlFor="">Email</label>
                                                <input type="email" className="form-control col-10" name="user.email" placeholder="example@email.com"/>
                                            </div>
                                            <div className="form-group col-6">
                                                <label htmlFor="">Age</label>
                                                <input type="text" className="form-control col-10" name="age" placeholder="Age"/>
                                            </div>
                                        </div>
                                        
                                        <div className="form-group">
                                            <label htmlFor="">Address</label>
                                            <textarea name="address" id="" cols="50" rows="5" className="form-control col-10" placeholder="Address"></textarea>
                                        </div>
                                        
                                        <div className="form-group">
                                            <label htmlFor="">Phone Number</label>
                                            <input type="text" className="form-control col-10" name="phone_no" placeholder="Phone Number"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="">Password</label>
                                            <input type="text" className="form-control col-10" id="password1" name="user.password" placeholder="Enter Password"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="">Confirm Password</label>
                                            <input type="text" className="form-control col-10" id="password2" placeholder="Enter Confirm Password"/>
                                        </div>
                                        <button class="btn btn-block shadow-none btn-outline-primary">Registration</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-12 col-lg-6 col-md-8 col-sm-10">
                            <img src={DigitalSheba} alt="" className="img-fluid w-100 image"/>
                        </div>
                    </div>
                    
                </div>
                <Subscribe/>
                <FooterBar/>
            </div>
        )
    }
}
