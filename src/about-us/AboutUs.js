import React from 'react'
import {css, jsx} from '@emotion/core'
import banner from '../pictures/about-banner.JPG'
import About from "../About";
import Facts from "./Facts";

/** @jsx jsx */
const AboutUs = () => {
    return (

        <div>
            <div className="banner">
                <div className="header-text">
                    <h1>About</h1><h1 css={css`padding-left: 100px;`}> us</h1>
                </div>
            </div>
            <About  title1={"Our"} title2={"mission"}
                   text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur beatae, eos et harum nesciunt quidem quod soluta? Enim nihil, omnis. Delectus dolore eius ipsam iste laboriosam omnis recusandae similique vero?Ad amet aperiam cupiditate delectus dolore eligendi ex expedita fuga laborum mollitia perferendis quam rerum sit, ullam vel. Accusantium cupiditate ea eligendi expedita facilis ipsam iure nisi odio porro quod."}/>

            <Facts/>
        </div>
    )
};
export default AboutUs;
