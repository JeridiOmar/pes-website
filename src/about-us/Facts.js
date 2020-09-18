import React from 'react'
import {css, jsx} from '@emotion/core'
import logo from '../pictures/logo.png'
import CountUp from 'react-countup';
import FactElemnt from "./facts-elemnt";
import TrackVisibility from 'react-on-screen';
import medal from '../pictures/about-us/medal.png'
import counter from '../pictures/about-us/counter.png'
import students from '../pictures/about-us/students.png'
import training from '../pictures/about-us/training.png'

/** @jsx jsx */
const Facts = () => {

    const titleStyle = css`
    //text-decoration:  underline overline;
    font-weight: bold;
    padding: 5px;
    &::before {
    content: '';
    position: absolute;
    display: block;
    width: 250px;
    height: 1px;
    background: #ddd;
    bottom: 1%;
    //bottom: 90px;
    left: calc(50% - 125px);
}

&::after {
    content: '';
    position: absolute;
    display: block;
    width: 40px;
    height: 3px;
    background: #bc4749;
   bottom:0%;
    left: calc(50% - 20px);
}


     `;
    return (
        <div className={"facts"}>
            <div className="container">
                <div className="text-center">
                    <img src={logo} alt="" width={"120px"} height={"60px"} className={"facts-logo text-center"}/>
                    <h3 className="text-center  section-title" css={titleStyle}>in numbers</h3>
                </div>
                <TrackVisibility className="row facts-content" >


                        <FactElemnt title={'Members'} number={500} icon={students} animation={'fade-right'}/>

                        <FactElemnt title={'Award'} number={30} icon={medal} animation={'fade-up'}/>
                        <FactElemnt title={'Event'} number={30} icon={training}animation={'fade-down'}/>
                        <FactElemnt title={'Years old'} number={7} icon={counter}animation={'fade-left'}/>



                </TrackVisibility>
            </div>

        </div>
    )

};
export default Facts;
