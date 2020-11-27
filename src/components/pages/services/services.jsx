import React, { Component } from 'react'
import NavigationBar from '../../assets/navbar/navbar';
import FooterBar from '../../assets/footer/footer';
import {Subscribe} from '../../pages/Home/talk';

export default class Services extends Component {
    render() {
        return (
            <div>
                <NavigationBar/>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6 col md-10">
                            <h1>
                                This is first div
                            </h1>
                        </div>
                        <div className="col-12 col-lg-6 col md-10">
                            <h1>This is second div</h1>
                        </div>
                    </div>
                </div>
                <Subscribe/>
                <FooterBar/>
            </div>
        )
    }
}
