import React, { Component } from 'react';
import './contact.css';
import NavigationBar from '../../assets/navbar/navbar';
import FooterBar from '../../assets/footer/footer';

export default class Contact extends Component {
    render() {
        return (
            <div>
                <NavigationBar/>
                <h1>Hello this is contact page</h1>
                <FooterBar/>
            </div>
        )
    }
}

