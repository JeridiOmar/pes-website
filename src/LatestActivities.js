import React from "react";
import {css, jsx} from "@emotion/core";
import summerSchool from './pictures/SummerSchool.jpg';
import tsyp from './pictures/tsyp.jpg';
import zhd from './pictures/zhd.jpg'
import Activity from "./Activity";


/** @jsx jsx */
const LatestActivities = () => {
    return (
        <div>
            <div className="act-header">
                <h3 className="text-center">Latest activities</h3>
            </div>
            <div className="container">
                <div className="row ">

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
