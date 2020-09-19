import React from 'react'
import {css, jsx} from '@emotion/core'
import banner from '../pictures/about-banner.JPG'
import About from "../About";
import Facts from "./Facts";
import Jump from 'react-reveal/Jump';
import Fade from "react-reveal/Fade";
import plan from '../pictures/about-us/plan.png'
import mission from '../pictures/about-us/mission.png'
import InfoBox from "./InfoBox";

/** @jsx jsx */
const AboutUs = () => {
    return (

        <div>
            <div className="banner">
                <div className="header-text">
                    <Jump forever duration={1500}>
                        <h1>About</h1>
                        <h1 css={css`padding-left: 100px;`}> us</h1>
                    </Jump>
                </div>
            </div>

            <div className=" about-section">
                <div className="container">
                    <About title1={"About"} title2={"us"}
                           text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur beatae, eos et harum nesciunt quidem quod soluta? Enim nihil, omnis. Delectus dolore eius ipsam iste laboriosam omnis recusandae similique vero?Ad amet aperiam cupiditate delectus dolore eligendi ex expedita fuga laborum mollitia perferendis quam rerum sit, ullam vel. Accusantium cupiditate ea eligendi expedita facilis ipsam iure nisi odio porro quod.On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted."}/>

                    <div className="row">
                        <InfoBox icon={plan} title={'Our plan'} />
                        <InfoBox icon={mission} title={'Our mission'} />
                    </div>
                </div>
            </div>
            <Facts/>
        </div>
    )
};
export default AboutUs;
