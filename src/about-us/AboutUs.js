import React from 'react'
import {css, jsx} from '@emotion/core'

import About from "../About";
import Facts from "./Facts";
import Jump from 'react-reveal/Jump';
import Fade from "react-reveal/Fade";
import plan from '../pictures/about-us/plan.png'
import mission from '../pictures/about-us/mission.png'
import InfoBox from "./InfoBox";
import '../styles/bootstrap.min.css'

/** @jsx jsx */
const AboutUs = () => {
    return (

        <div>
            <div className="banner">
                <div className="overlay"></div>
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
                           text={"The IEEE Tunisia chapter of Power & energy was established in August 2011. In 2016, the INSAT Student Chapter was established as the third PES chapter in Tunisia Section. The INSAT PES chapter is the largest student R8 PES chapter with around 150 IEEE INSAT SB members that hail from different academic backgrounds.\n" +
                           "The IEEE INSAT PES chapter presents incredible opportunities for the members. The power and energy domain is an unlimited source of knowledge and our chapter is a place where all those interested could exchange the knowledge they have creating a space where ideas bloom into inventions."}/>

                    <div className="row">
                        <InfoBox icon={plan} title={'Our plan'}
                                 text={'Workshops, Conferences and industrial visits:\n' +
                                 'PES INSAT chapter aim to enhance our members skills and knowledge. As such, each year PES INSAT chapter provide workshops, training sessions, conferences in the field of energy be it technical or soft skills. We also organize industrial visits to different industries operating in the field of power and knowledge.'}/>
                        <InfoBox icon={mission} title={'Our mission'}
                                 text={'Our mission is to promote and foster PES members by developing and offering an array of innovative and diverse program that allows them to connect practical and technical knowledge with soft skills to create a sustainable, thriving future.'}/>
                    </div>
                </div>
            </div>
            <Facts/>
        </div>
    )
};
export default AboutUs;
