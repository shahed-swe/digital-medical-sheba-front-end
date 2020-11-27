import React, { Component } from 'react'
import NavigationBar from '../../assets/navbar/navbar';
import FooterBar from '../../assets/footer/footer';
import {Subscribe} from '../../pages/Home/talk';
import './login.css';

export default class login extends Component {
    render() {
        return (
            <div>
                <NavigationBar/>
                <div className="container take">
                    <form method="POST">
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="username">User Name:</label>
                                <input type="text" className="form-control col-10" name="username"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password:</label>
                                <input type="password" className="form-control col-10" name="password"/>
                            </div>
                            <button className="btn btn-outline-success btn-block shadow-none">Login</button>
                        </div>
                    </form>
                </div>
                    
                <Subscribe/>
                <FooterBar/>
            </div>
        )
    }
}
