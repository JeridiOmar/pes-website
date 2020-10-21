import React from "react";
import {css, jsx} from "@emotion/core";

import Activity from "./Activity";
import pam from "./pictures/activities/pam.webp";
import rflc from "./pictures/activities/rftlc.webp";
import yfc from "./pictures/activities/yfc.webp";


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
            <div className="container" style={{'margin-bottom':' 50px'}}>
                <div className="row " css={cardStyle}>

                    <Activity picture={pam} title={'PES anunual meeting'}
                              description={'In a changing world, we are facing a new reality including the energy transition. Willing to provide you a new\n' +
                              'experience, PES chapter presents to you the PES General Meeting Congress where you\'ll be introduced to this\n' +
                              'new domain and how it is making a progressive impact on the world.\n' +
                              '\n' +
                              'Organized for its first time by the IEEE PES INSAT Student Branch Chapter, the meeting will take place in\n' +
                              'November themed ENERGY TRANSITION!\n' +
                              '\n' +
                              'The seminar will include workshops and a conference bringing together professionals, inspiring speakers and\n' +
                              'motivational trainers.'}/>
                    <Activity title={'Recycle for the life CYCLE'} picture={rflc}
                              description={'In collaboration with “Emel Tounes“ association, we will be collecting plastic caps in a box that will be prepared by the PES chapter and\n' +
                              'located in the club room to be accessible to anyone willing to help.\n' +
                              'All the collected caps will be recycled and transformed to a wheelchair that will be given to a handicap person.\n' +
                              'This action is a volunteering and an environmental protection one because plastic is a material that Earth cannot digest.'}/>
                    <Activity title={'Youth for CHANGE'} picture={yfc}
                              description={'YFC consists of school visits in different regions of Tunisia where PES members will help students develop a better understanding of\n' +
                              'renewable energy.\n' +
                              '\n' +
                              'The team will organize a range of training courses and workshops in order to hopefully help nurture a whole generation and ignite a spark of\n' +
                              'passion in their spirit.\n' +
                              '\n' +
                              'PES members will also organize a competition between the participants at the end of the day in every visit to nominate the winning team.\n' +
                              'From every school, we will have a winning team, we will give them an idea about a project that they should realize.\n' +
                              'The final will be in INSAT, all the teams will pitch their fresh ideas and there will be awards to encourage and to show them that we do\n' +
                              'believe that young people will make this world better.'}/>
                </div>
            </div>
        </div>
    )
};
export default LatestActivities;
