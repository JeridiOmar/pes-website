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
    background: #a7c957;
   bottom:0%;
    left: calc(50% - 20px);
}


     `;
    return (
        <div className={"facts"}>
            <div className="container" style={{'margin-bottom':' 50px'}}>
                <div className="text-center">
                    {/*<img src={logo} alt="" width={"120px"} height={"60px"} className={"facts-logo text-center"}/>*/}
                    <h3 className="text-center  section-title" css={titleStyle}><span style={{color:"#a7c957"}}>PES</span> numbers</h3>
                </div>
                <TrackVisibility className="row facts-content" partialVisibility>

                    <FactElemnt title={'Members'} number={150} icon={students} left={true}/>

                    <FactElemnt title={'Awards'} number={8} icon={medal} top={true}/>
                    <FactElemnt title={'Events'} number={34} icon={training} bottom={true}/>
                    <FactElemnt title={'Years old'} number={4} icon={counter} right={true}/>
                </TrackVisibility>
            </div>

        </div>
    )

};
export default Facts;
