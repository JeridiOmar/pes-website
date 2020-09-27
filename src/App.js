import React from "react";
import ReactDOM from "react-dom";
import {Router} from "@reach/router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home"
import AboutUs from "./about-us/AboutUs";
import Activities from "./activities/Activities";
import OurCommunity from "./our-comunity/OurCommunity";
const App = () => {

    return (
        <div>
            <Navbar/>
            <Router>
                <Home path={"/"}/>
                <AboutUs path={"/about"}/>
                <Activities path={"/activities"}/>
                <OurCommunity path={"/community"}/>
            </Router>
            <Footer />
        </div>


    );
};

ReactDOM.render(<App/>, document.getElementById("root"));
