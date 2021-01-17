import React, {Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom";
import {Main, Router} from "@reach/router";
import NavbarPES from "./NavbarPES";
import Footer from "./Footer";
import Home from "./Home"
import AboutUs from "./about-us/AboutUs";
import Activities from "./activities/Activities";

// const OurCommunity = React.lazy(() => import ("./our-comunity/OurCommunity"));
import OurCommunity from "./our-comunity/OurCommunity"
import Galery from "./our-comunity/Galery";
import Mom from "./our-comunity/Mom";
import Awards from "./awards/Awards";
import Loading from "./Loading";
import Gm from "./gm/Gm";
import "./styles/style.css"
import "./styles/mom.css"
import "./styles/bootstrap.min.css"

const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000)

    }, []);
    return (
        // <>
        //     {loading === false ? (
                <div>
                    <NavbarPES/>
                    {/*<Suspense fallback={Loading}>*/}
                        <Router>

                            <Home path={"/"}/>
                            <AboutUs path={"/about"}/>
                            <Activities path={"/activities"}/>
                            <OurCommunity path={"/community/*"}/>
                            <Awards path={"/awards/"}/>
                            <Gm path={"/gm"}/>
                            <Loading path={"/loading"}/>
                            <Home default/>
                        </Router>
                    {/*</Suspense>*/}
                    <Footer/>
                </div>
        //     ) : (
        //         <Loading/>
        //     )}
        // </>


    );
};

ReactDOM.render(<App/>, document.getElementById("root"));
