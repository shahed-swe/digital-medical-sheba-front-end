import React, { Component } from 'react'
import NavigationBar from '../../assets/navbar/navbar';
import FooterBar from '../../assets/footer/footer';
import {Subscribe} from '../../pages/Home/talk';
import './login.css';
import DigitalSheba from '../../utils/images/digital_sheba.png'

export default class login extends Component {
    render() {
        return (
            <div>
                <NavigationBar/>
                <div className="container take">
                    <h1>Login Here</h1>
                    <div className="row">
                        <div className="col-12 col-lg-6 col-md-8 col-sm-10">
                            <form method="POST">
                                <div className="form-row">
                                        <div className="form-group col-12">
                                            <label htmlFor="username">User name</label>
                                            <input type="text" className="form-control" name="user.username" placeholder="Username"/>
                                        </div>
                                        <div className="form-group col-12">
                                            <label htmlFor="">Password</label>
                                            <input type="password" className="form-control" id="password1" name="user.password" placeholder="Enter Password"/>
                                        </div>
                                        <div className="form-group col-12">
                                            <button className="btn btn-block shadow-none btn-outline-info newbtn">Login</button>
                                        </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-12 col-lg-6 col-md-8 col-sm-10 image">
                            <img src={DigitalSheba} alt="" className="img-fluid w-100"/>
                        </div>
                    </div>
                    
                </div>
                <Subscribe/>
                <FooterBar/>
            </div>
        )
    }
}
