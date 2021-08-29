import React from "react";
import {css, jsx} from "@emotion/core";

import Activity from "./Activity";
import pam from "./pictures/activities/pam.webp";
import rflc from "./pictures/activities/rftlc.webp";
import yfc from "./pictures/activities/yfc.webp";
import CarouselItem from "./activities/CarouselItem";
import zhd from "./pictures/activities/zhd.webp";
import rip from "./pictures/activities/recitup.webp";


/** @jsx jsx */
const LatestActivities = () => {
    const cardStyle = css`
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
    const act = [
        {
            title: "Zero Hunger Day",
            picture: zhd,
            description: [
                {
                    text: 'On September 25th 2019, IEEE PES celebrated the 1st IEEE PES Zero Hunger Day (Global) when ambassadors, PES SB chapters, PES Section chapters, PES YP, PES WiP, IEEE and PES volunteers  made food donation based on food donations campaigns with main focus on 17 UN Sustainable Development goals(2030).. For our chapter , we made a food donation campaign in our unit and we were glad to host our collaborator NGO Rotaract Tunis Hope Rotaract Tunis Hope in our SB local to celebrate the IEEE day and PES zero hunger day at the same Time . The meeting was not only about delivering the food donations that we collected but also it was a chance to exchange goals and values of both organizations. Everyone was really satisfied with this ZHD first edition so we  promised more impactful editions in the future.'
                }
            ],
            date: {
                day: "15",
                month: "01",
                year: "2021"
            },
        },
        {
            title: "Youth For Change",
            picture: yfc,
            description: [
                {
                    text: 'Youth for change is an initiative that was first held in 2017 by PES volunteer members. This event’s goal is educating the younger generations about renewable energies in Tunisia as an investment for the future of our country and our planet as a whole. To achieve our goal, PES INSAT volunteers visit preparatory schools in many regions of TUNISIA and provide training sessions in the field of energy, for example how we produce electricity by using the solar energy, wind power, piezoelectric materials and hydro power. After this process, students are divided into teams in order to complete a challenge and the finals is held annually at our institute . Applying what they learnt and working in teams ,young students attempt to solve real-world challenges by conceiving projects related to renewable energies then their projects is put to the test as each team pitches their project idea in front of a global audience of their peers and a panel of judges.. It is fascinating to see this idea come to life as the influence of this experience left an impact on both the volunteers and the students. It was an honour to see their passion filled eyes as they emerge themselves in the process of learning. We are pleased to see the results of our work and are certain that this project will bear fruits in the future as such we hold it annually.'
                }
            ],
            date: {
                day: "15",
                month: "01",
                year: "2021"
            },
        },
        {
            title: "Rec it UP",
            picture:rip,
            description: [
                {
                    text: "The first ever ‘REC iT Up’ 24-hours challenge was organized by IEEE Power & Energy Society Chapter INSAT Student Branch.\n" +
                        "Renewable Energies Challenge “REC iT Up” is an entrepreneurship challenge in which IEEE members participated. In the beginning, the participants attended technical and soft skills training. The participants were divided into teams. They were then required to follow the instructions of the jury to represent their renewable energy related projects.  At the end of the challenge, the jury nominated the winning team based on its project’s innovation, feasibility and business plan. This challenge was open to all the IEEE members from all Student Branches in Tunisia which gave them an opportunity to network with fellow IEEE members from other student branches in Tunisia."
                }
            ],
            date: {
                day: "15",
                month: "01",
                year: "2021"
            },
        },
    ];
    return (
        <div>
            <div className="act-header">
                <h3 className="text-center">our activities</h3>
            </div>
            <div className="container" style={{'marginBottom': ' 50px'}}>
                <div className="row " css={cardStyle}>
                    {act.map(
                        ({title, picture, description,date}, index) => <Activity title={title}
                                                                            description={description}
                                                                            picture={picture}
                                                                            date={date}
                                                                            key={index}/>)}
                    {/*<Activity picture={pam} title={'PES anunual meeting'}*/}
                    {/*          description={'In a changing world, we are facing a new reality including the energy transition. Willing to provide you a new\n' +*/}
                    {/*          'experience, PES chapter presents to you the PES General Meeting Congress where you\'ll be introduced to this\n' +*/}
                    {/*          'new domain and how it is making a progressive impact on the world.\n' +*/}
                    {/*          '\n' +*/}
                    {/*          'Organized for its first time by the IEEE PES INSAT Student Branch Chapter, the meeting will take place in\n' +*/}
                    {/*          'November themed ENERGY TRANSITION!\n' +*/}
                    {/*          '\n' +*/}
                    {/*          'The seminar will include workshops and a conference bringing together professionals, inspiring speakers and\n' +*/}
                    {/*          'motivational trainers.'}/>*/}
                    {/*<Activity title={'Recycle for the life CYCLE'} picture={rflc}*/}
                    {/*          description={'In collaboration with “Emel Tounes“ association, we will be collecting plastic caps in a box that will be prepared by the PES chapter and\n' +*/}
                    {/*          'located in the club room to be accessible to anyone willing to help.\n' +*/}
                    {/*          'All the collected caps will be recycled and transformed to a wheelchair that will be given to a handicap person.\n' +*/}
                    {/*          'This action is a volunteering and an environmental protection one because plastic is a material that Earth cannot digest.'}/>*/}
                    {/*<Activity title={'Youth for CHANGE'} picture={yfc}*/}
                    {/*          description={'YFC consists of school visits in different regions of Tunisia where PES members will help students develop a better understanding of\n' +*/}
                    {/*          'renewable energy.\n' +*/}
                    {/*          '\n' +*/}
                    {/*          'The team will organize a range of training courses and workshops in order to hopefully help nurture a whole generation and ignite a spark of\n' +*/}
                    {/*          'passion in their spirit.\n' +*/}
                    {/*          '\n' +*/}
                    {/*          'PES members will also organize a competition between the participants at the end of the day in every visit to nominate the winning team.\n' +*/}
                    {/*          'From every school, we will have a winning team, we will give them an idea about a project that they should realize.\n' +*/}
                    {/*          'The final will be in INSAT, all the teams will pitch their fresh ideas and there will be awards to encourage and to show them that we do\n' +*/}
                    {/*          'believe that young people will make this world better.'}/>*/}

                    {/*<Activity title={'Zero Hunger Day'} picture={zhd}*/}
                    {/*          description={'On September 25th 2019, IEEE PES celebrated the 1st IEEE PES Zero Hunger Day (Global) when ambassadors, PES SB chapters, PES Section chapters, PES YP, PES WiP, IEEE and PES volunteers  made food donation based on food donations campaigns with main focus on 17 UN Sustainable Development goals(2030).. For our chapter , we made a food donation campaign in our unit and we were glad to host our collaborator NGO Rotaract Tunis Hope Rotaract Tunis Hope in our SB local to celebrate the IEEE day and PES zero hunger day at the same Time . The meeting was not only about delivering the food donations that we collected but also it was a chance to exchange goals and values of both organizations. Everyone was really satisfied with this ZHD first edition so we  promised more impactful editions in the future.'}/>*/}
                    {/*<Activity title={'Youth For Change'} picture={yfc}*/}
                    {/*          description={'Youth for change is an initiative that was first held in 2017 by PES volunteer members. This event’s goal is educating the younger generations about renewable energies in Tunisia as an investment for the future of our country and our planet as a whole. To achieve our goal, PES INSAT volunteers visit preparatory schools in many regions of TUNISIA and provide training sessions in the field of energy, for example how we produce electricity by using the solar energy, wind power, piezoelectric materials and hydro power. After this process, students are divided into teams in order to complete a challenge and the finals is held annually at our institute . Applying what they learnt and working in teams ,young students attempt to solve real-world challenges by conceiving projects related to renewable energies then their projects is put to the test as each team pitches their project idea in front of a global audience of their peers and a panel of judges.. It is fascinating to see this idea come to life as the influence of this experience left an impact on both the volunteers and the students. It was an honour to see their passion filled eyes as they emerge themselves in the process of learning. We are pleased to see the results of our work and are certain that this project will bear fruits in the future as such we hold it annually.'}/>*/}
                    {/*<Activity title={'Rec it UP'} picture={rip}*/}
                    {/*          description={"The first ever ‘REC iT Up’ 24-hours challenge was organized by IEEE Power & Energy Society Chapter INSAT Student Branch.\n" +*/}
                    {/*          "Renewable Energies Challenge “REC iT Up” is an entrepreneurship challenge in which IEEE members participated. In the beginning, the participants attended technical and soft skills training. The participants were divided into teams. They were then required to follow the instructions of the jury to represent their renewable energy related projects.  At the end of the challenge, the jury nominated the winning team based on its project’s innovation, feasibility and business plan. This challenge was open to all the IEEE members from all Student Branches in Tunisia which gave them an opportunity to network with fellow IEEE members from other student branches in Tunisia."}/>*/}

                </div>
            </div>
        </div>
    )
};
export default LatestActivities;
