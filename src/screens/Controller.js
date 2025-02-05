import React, { Component } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "../screens/home/Home";
import Details from "../screens/details/Details"
 

class Controller extends Component {


    constructor(){
        super();
        //will have to be replaced with the provided url
        this.baseUrl= "http://localhost:8080/api/";
    }
    

    render(){
        return(
            <Router>
                <div className= "main-container">
                    <Route exact path="/" render={props=> <Home {...props} baseUrl={this.baseUrl}/>} />
                    <Route exact path="/details" render={props=> <Details {...props} baseUrl={this.baseUrl}/>} />
                
                </div>
            </Router>

        );
    }

}

export default Controller;
