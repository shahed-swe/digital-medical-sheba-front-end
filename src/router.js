import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

import Home from "./components/pages/Home/home";
import About from './components/pages/About/about';



const Rounting = () => {
    return (
        
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
            </Switch>
        </Router>
    )
}

export default Rounting;