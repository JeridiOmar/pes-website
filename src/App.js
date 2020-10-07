import React from "react";
import ReactDOM from "react-dom";
import {Main, Router} from "@reach/router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home"
import AboutUs from "./about-us/AboutUs";
import Activities from "./activities/Activities";
import OurCommunity from "./our-comunity/OurCommunity";
import Galery from "./our-comunity/Galery";
import Mom from "./our-comunity/Mom";
import Awards from "./awards/Awards";
const App = () => {

    return (
        <div>
            <Navbar/>
            <Router>
                <Home path={"/"}/>
                <AboutUs path={"/about"}/>
                <Activities path={"/activities"}/>
                <OurCommunity path={"/community/*"}/>
                <Awards path={"/awards/"}/>
            </Router>
            <Footer />
        </div>


    );
};

ReactDOM.render(<App/>, document.getElementById("root"));
