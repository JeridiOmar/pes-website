import React from "react";
import {css, jsx} from "@emotion/core";
import summerSchool from './pictures/SummerSchool.jpg';
import tsyp from './pictures/tsyp.jpg';
import zhd from './pictures/zhd.jpg'
import Activity from "./Activity";


/** @jsx jsx */
const LatestActivities = () => {
    const cardStyle =css`
& .card-img-top:hover{
        top: 5px!important;
        filter: brightness(80%)!important;
        transition: 0.3s!important;
        transform: scale(1.05);
    }
    & .card-text1{
      color:#909090!important;
    }
    & .card-title{
        color: #272727;
        font-weight: 700;
    }
    & .card-meta{
        margin-bottom: 8px;
        font-size: 14px;
        color: #afafaf;
    }
    & .card-meta .author {
        margin-right: 4px;
    }
    & .min-read {
        margin-left: 7px;
        border-left: 1px solid rgba(211, 211, 211, 0.63);
        padding-left: 10px;
    }
    & .card-img-top{
    height: 213px!important;
    object-fit: fill;
}
`
    return (
        <div>
            <div className="act-header">
                <h3 className="text-center">Latest activities</h3>
            </div>
            <div className="container">
                <div className="row " css={cardStyle}>

                    <Activity picture={summerSchool} title={"Summer School"}
                              description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab culpa, labore libero odit rem repellat vitae."}/>
                    <Activity picture={tsyp} title={"Pes insat in TSYP"}
                              description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab culpa, labore libero odit rem repellat vitae."}/>
                    <Activity picture={zhd} title={"Zero hunguer day"}
                              description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab culpa, labore libero odit rem repellat vitae."}/>

                </div>
            </div>
        </div>
    )
};
export default LatestActivities;
