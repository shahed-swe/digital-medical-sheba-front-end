import React from "react";
import ReactDom from "react-dom";
import Routing from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery';
// import './components/utils/custom.jsx';
ReactDom.render(<Routing/>, document.getElementById("root"));