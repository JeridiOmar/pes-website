import React ,{useEffect} from 'react'
import {css, jsx} from '@emotion/core'
import { useCountUp } from "react-countup";
/** @jsx jsx */
const FactElemnt = ({icon,title,number,isVisible,animation}) => {
    console.log(isVisible);
    const { countUp, start, pauseResume, reset, update } = useCountUp({end:number,duration: 5});
    useEffect(()=>{
        if (isVisible){
            start();
        }else{
            reset();
        }
    },[isVisible]);


    return(
        <div className="col-md-3 col-sm-6 col-6 text-center" data-aos={animation} data-aos-duration="1500">
            <img src={icon}/>

            <h4 className={"facts-number"}>  {countUp}</h4>
            <h4 className={"facts-name"}>{title}</h4>
        </div>
    )
};
export default FactElemnt;
