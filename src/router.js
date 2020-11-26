import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

import Home from "./components/pages/Home/home";
import About from './components/pages/About/about';
import Contact from './components/pages/Contact/contact'


const Rounting = () => {
    return (
        
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contact" component={Contact}/>
            </Switch>
        </Router>
    )
}

export default Rounting;