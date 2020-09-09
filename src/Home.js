import React from "react";
import Carousel from "./Carousel";

import About from "./About";
import Team from "./Team";
import LatestActivities from "./LatestActivities";
import logo from './pictures/logo.png'


import {Router} from "@reach/router";

const Home = () => {

    return (
        <div>
            <Carousel/>
            <About/>
            <Team/>
            <LatestActivities/>
        </div>


    );
};
export default Home;
