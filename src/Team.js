import React from "react";
import {css, jsx} from "@emotion/core";

import test from './pictures/test.png'
import test2 from './pictures/test2.png'
import omar from './pictures/team-members/OmarJridi.png'
import emna from './pictures/team-members/EmnaBargui.png'
import yessine from './pictures/team-members/YassineAyadi.png'
import nour from './pictures/team-members/NourBelgaied.png'
import iheb from './pictures/team-members/IhebDriouech.png'
import zeineb from './pictures/team-members/ZeinebNefzi.png'
import abir from './pictures/team-members/AbirSlimene.png'
import kmar from './pictures/team-members/KmarMhiri.png'
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
                    <TeamMember memberName={'Emna bargui'} memberPic={emna} memberPoste={'ChairWomen'} animation={"flip-left"}/>
                    <TeamMember memberName={'Iheb Driouech'} memberPic={iheb} memberPoste={'Vice chair'} animation={"flip-left"}/>
                    <TeamMember memberName={'Kmar mhiri'} memberPic={kmar} memberPoste={'General secretary'} animation={"flip-left"}/>

                </div>

            </div>
            <div className="container">
                <div className="row justify-content-center text-center ">
                    <TeamMember memberName={'Nour belgaid'} memberPic={nour} memberPoste={'HR manager'} animation={"flip-right"}/>
                    <TeamMember memberName={'Abir slimene'} memberPic={abir} memberPoste={'Treasurer'} animation={"flip-right"}/>
                    <TeamMember memberName={'zeineb nefzi '} memberPic={zeineb} memberPoste={'Training manager'} animation={"flip-right"}/>
                </div>

            </div>
            <div className="container">
                <div className="row justify-content-center text-center ">
                    <TeamMember memberName={'Yassine ayadi'} memberPic={yessine} memberPoste={'media and communication manager'} animation={"flip-left"}/>
                    <TeamMember memberName={'Omar jridi'} memberPic={omar} memberPoste={'WebMaster'} animation={"flip-left"}/>

                </div>

            </div>
        </div>
    )
};
export default Team;
