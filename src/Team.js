import React from "react";
import {css, jsx} from "@emotion/core";
import omar from "./pictures/omar.jpg"
import test from './pictures/test.png'
import test2 from './pictures/test2.png'
import TeamMember from "./TeamMember";


/** @jsx jsx */
const Team = () => {
    const poste = css`
      & h5{
    color: #7cac3f!important;
    }
      `;
    return (
        <div className="team">
            <div className="team-header">
                <h3 className="text-center">Our Team</h3>
            </div>
            <div className="container" css={poste}>
                <div className="row justify-content-center text-center  ">
                    <TeamMember memberName={'Omar jridi'} memberPic={test} memberPoste={'WebMaster'}/>
                    <TeamMember memberName={'Omar jridi'} memberPic={test2} memberPoste={'WebMaster'}/>
                    <TeamMember memberName={'Omar jridi'} memberPic={omar} memberPoste={'WebMaster'}/>

                </div>

            </div>
            <div className="container">
                <div className="row justify-content-center text-center ">
                    <TeamMember memberName={'Omar jridi'} memberPic={omar} memberPoste={'WebMaster'}/>
                    <TeamMember memberName={'Omar jridi'} memberPic={omar} memberPoste={'WebMaster'}/>
                    <TeamMember memberName={'Omar jridi'} memberPic={omar} memberPoste={'WebMaster'}/>
                </div>

            </div>
            <div className="container">
                <div className="row justify-content-center text-center ">
                    <TeamMember memberName={'Omar jridi'} memberPic={omar} memberPoste={'WebMaster'}/>
                    <TeamMember memberName={'Omar jridi'} memberPic={omar} memberPoste={'WebMaster'}/>

                </div>

            </div>
        </div>
    )
};
export default Team;
