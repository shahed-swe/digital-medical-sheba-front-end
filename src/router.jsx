import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

import Home from "./components/pages/Home/home";
import About from './components/pages/About/about';
import Contact from './components/pages/Contact/contact';
import Services from './components/pages/services/services';
import login from './components/pages/Login/login';
import registration from './components/pages/Registration/registration';

const Rounting = () => {
    return (
        
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/services" component={Services}/>
                <Route exact path="/login" component={login}/>
                <Route exact path="/registration" component={registration}/>
            </Switch>
        </Router>
    )
}

export default Rounting;