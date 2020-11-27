import React, { Component } from 'react'
import NavigationBar from '../../assets/navbar/navbar';
import FooterBar from '../../assets/footer/footer';
import {Subscribe} from '../../pages/Home/talk';


export default class registration extends Component {
    render() {
        return (
            <div>
                <NavigationBar/>
                <div className="container">
                    <form method="POST">
                        <div className="form-row">
                            <div className="form-group">
                                <div className="form-group">
                                    <label htmlFor="username">User name</label>
                                    <input type="text" className="form-control col-10" name="user.username"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">First Name</label>
                                    <input type="text" className="form-control col-10" name="user.first_name"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Last Name</label>
                                    <input type="text" className="form-control col-10" name="user.last_name"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Address</label>
                                    <textarea name="address" id="" cols="50" rows="5" className="form-control col-10"></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Age</label>
                                    <input type="text" className="form-control col-10" name="age"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Phone Number</label>
                                    <input type="text" className="form-control col-10" name="phone_no"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Password</label>
                                    <input type="text" className="form-control col-10" id="password1" name="user.password"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Confirm Password</label>
                                    <input type="text" className="form-control col-10" id="password2"/>
                                </div>
                                <button class="btn btn-block shadow-none btn-outline-primary">Registration</button>
                            </div>
                        </div>
                    </form>
                </div>
                <Subscribe/>
                <FooterBar/>
            </div>
        )
    }
}
