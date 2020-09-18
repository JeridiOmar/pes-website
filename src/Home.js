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
            <About  title1={"About"} title2={"us"}
                    text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur beatae, eos et harum nesciunt quidem quod soluta? Enim nihil, omnis. Delectus dolore eius ipsam iste laboriosam omnis recusandae similique vero?Ad amet aperiam cupiditate delectus dolore eligendi ex expedita fuga laborum mollitia perferendis quam rerum sit, ullam vel. Accusantium cupiditate ea eligendi expedita facilis ipsam iure nisi odio porro quod."}/>

            <Team/>
            <LatestActivities/>
        </div>


    );
};
export default Home;
