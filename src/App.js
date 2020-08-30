import React from "react";
import ReactDOM from "react-dom";
import {css,jsx} from '@emotion/core'
import Carousel from "./Carousel";
import Navbar from "./Navbar";
import About from "./About";
import Team from "./Team";
import LatestActivities from "./LatestActivities";
import logo from './pictures/logo.png'
import sponsor1 from './pictures/sponsor1.png'
import sponsor2 from './pictures/sponsor2.png'
import sponsor3 from './pictures/sponsor3.png'
import sponsor4 from './pictures/sponsor4.gif'
import Footer from "./Footer";
/** @jsx jsx */
const App = () => {
    const sponsors=[sponsor1,sponsor2,sponsor3,sponsor4];
    return (
        <div >
            <Navbar/>
            <Carousel/>
            <About/>
            <Team/>
            <LatestActivities/>
            <Footer sponsors={sponsors}/>

        </div>


);
};

ReactDOM.render(<App/>, document.getElementById("root"));
