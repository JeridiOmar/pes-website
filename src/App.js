import React from "react";
import ReactDOM from "react-dom";
import {Router} from "@reach/router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home"
import AboutUs from "./AboutUs";
const App = () => {

    return (
        <div>
            <Navbar/>
            <Router>
                <Home path={"/"}/>
                <AboutUs path={"/about"}/>
            </Router>
            <Footer />
        </div>


    );
};

ReactDOM.render(<App/>, document.getElementById("root"));
