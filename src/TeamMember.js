import React from "react";


import {css, jsx} from "@emotion/core";
import omar from "./pictures/omar.jpg";
/** @jsx jsx */
const TeamMember = ({memberPic ,memberName,memberPoste}) => {
    return(
        <div data-aos="flip-left" data-aos-duration="1000" className="col-md-4 pl-2 col-sm-12  p-2 team-member " css={css` &> a{ font-size: 30px!important; } 
          &> a:hover{ text-decoration: none ;}  `}>
            <img src={memberPic} alt="" className="rounded-circle m-sm-4 team-img img-thumbnail team-image" width="300"
                 height="300" />
            <a className="fa fa-facebook-square team-link1" href="#"
               css={css` font-size: 30px!important;`}></a>
            <a className="fa fa-linkedin-square team-link2" href="#"
               css={css` font-size: 30px!important;`}></a>
            <h4>{memberName}</h4>
            <h5>{memberPoste}</h5>
        </div>
    )

};
export default TeamMember;
