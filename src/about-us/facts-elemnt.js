import React, {useEffect,useState} from 'react'
import {css, jsx} from '@emotion/core'
import {useCountUp} from "react-countup";
import Fade from "react-reveal/Fade";

/** @jsx jsx */
const FactElemnt = ({icon, title, number, isVisible, left,right,top,bottom}) => {
    // console.log(isVisible);
    const [spy, setSpy] = useState(false);
    const {countUp, start, pauseResume, reset, update} = useCountUp({end: number, duration: 5});
    useEffect(() => {
        if (isVisible) {

            start();
        } else {

            reset();
        }

        setSpy(spy+1);

    }, [isVisible]);


    return (
        <Fade left={left} right={right} top={top} bottom={bottom} spy={spy} distance={'30%'}    duration={1500}>
            <div className="col-md-3 col-sm-6 col-6 text-center">

                <img src={icon}/>
                <h4 className={"facts-number"}>  {countUp}</h4>
                <h4 className={"facts-name"}>{title}</h4>

            </div>
        </Fade>
    )
};
export default FactElemnt;
