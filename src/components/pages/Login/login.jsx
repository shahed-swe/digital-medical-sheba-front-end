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
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6 col-md-10 col-sm-10">
                            <div className="container take">
                                <h1>Login Here</h1>
                                <form method="POST">
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="username">User Name:</label>
                                            <input type="text" className="form-control col-10" name="username" placeholder="User Name"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">Password:</label>
                                            <input type="password" className="form-control col-10" name="password" placeholder="Password"/>
                                        </div>
                                        <button className="btn btn-outline-info btn-block shadow-none">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 col-md-10 col-sm-10">
                            <img src={DigitalSheba} className="img-fluid w-100 image" alt=""/>
                        </div>
                    </div>
                </div>

                    
                <Subscribe/>
                <FooterBar/>
            </div>
        )
    }
}
