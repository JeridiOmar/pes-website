import React from 'react'
import {css, jsx} from '@emotion/core'
import Jump from "react-reveal/Jump";
import banner from '../pictures/activities/banner-activities.webp'

import zhd from '../pictures/activities/zhd.webp'
import yfc from '../pictures/activities/yfc.webp'
import LatestActivities from "../LatestActivities";
import rip from '../pictures/activities/recitup.webp'
import pam from '../pictures/activities/pam.webp'
import sc from '../pictures/activities/sc.webp'
import rflc from '../pictures/activities/rftlc.webp'
import sc2 from '../pictures/activities/sc2.webp'
import sc3 from '../pictures/activities/sc3.webp'
import wip from '../pictures/activities/wip.webp'
import gm from "../pictures/activities/gm.webp"
import recycle from "../pictures/activities/recycle.webp"
import qhse from "../pictures/activities/qhse.webp"
import publicSpeaking from "../pictures/activities/public.webp"
import Activity from "../Activity";
import CarouselItem from "./CarouselItem";
import BigArticle from "./BigArticle";
import SmallArticle from "./SmallArticle";
import '../styles/bootstrap.min.css'
import ActivityLatest from "./ActivityLatest";

/** @jsx jsx */
const Activities = () => {
    const bannerStyle = css`
    &{
       background-image: url(${banner});
        height: 100vh;
        background-attachment: fixed;
        background-size:cover;
        background-position: center center;
        display: flex;
        align-items: center;
        justify-content: space-around; 
        //clip-path: polygon(0 0, 100% 0, 100% 88%, 57% 100%, 0 86%);
  }
  @media(max-width: 750px){
    &{
        //clip-path: polygon(0 0, 100% 0, 100% 50%, 100% 93%, 55% 100%, 0 92%) !important;
    }
  }
   
      
  `;
    const headerStyle = css`
     & h1{ 
     font-size: 100px;
    font-family: railway sans-serif;
    margin: 10px 0;
    /*background:linear-gradient(94deg, rgba(83,141,34,1) 0%, rgba(94,142,86,0.0984768907563025) 88%, rgba(214,214,214,1) 99%);*/
    /*-webkit-background-clip: text;*/
    /*-webkit-text-fill-color: transparent;*/
   color: #f2e8cf;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    word-spacing: 2px;
    }
    @media(max-width: 750px){
       & h1{ 
        font-size: 60px;
        
    }
  `;
    const carouselStyle = css`
    &{
      margin-top: 30px;
      margin-bottom: 30px;
    }
    & img{
      height: 400px;
      border-radius: 15px;
      object-fit:cover;
    }
    & h3 {
      font-weight: 700!important;
      font-size: 34px;
    }
     @media(max-width: 750px){
        & img {
          height: 250px!important;
        }
        & p{
          font-size: 10px;
        }
     }
  `;
    const upcommingStyle = css`
    & h2{
        display: inline-block;
        margin: 0 0 25px 25px;
        color: #272727;
        font-family: 'Heebo', 'Arial';
        font-size: 40px;
        font-weight: 700;
        letter-spacing: -1.66px;
        text-transform: capitalize;
        transition: 0.2s;
    }
     & .card{
         border: hidden!important;     
   
    }
    & .card-img-top{
      border-radius: 10px;
      transition: 0.3s!important;
     
    }
    & .card-img-top:hover,& .right-article-img:hover{
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
    & .card-bigger-img{
        position: relative;
        top: 0;
        max-height: 359px;
        object-fit: cover;
        border-radius: 7px;
    }
    
    & .upcomming .card-img-top{
    height: 213px!important;
    object-fit: cover;
}
//  & .latest-left-bigger img{
//    height: 167px;
//    width: 240px;
//}
   & .right-article-img{
      max-width: 100%;
      border-radius: 7px;
      transition: 0.3s!important;
   }
   & .latest-left-bigger .row{
   margin-bottom: 13px;
   }
   & .card-body{
      padding-left: 3px!important;
   }
   @media(max-width: 750px){
      & .card-bigger-img{
        height: 216px;
    }
   }
`;
    const latest = [
        {
            title: "IEEE PES Tunisia General Meeting",
            picture: gm,
            description: [
                {
                    text: "IEEE PES Tunisia General Meeting is an annual national scale congress where IEEE members " +
                        "and volunteers get to meet up and further nurture their knowledge in the power and energy field. In it’s second edition, IEEE PES INSAT Student Branch Chapter got the honor to organize it. Following the chosen theme: “Energy Transition”," +
                        " multiple conferences and diverse workshops, ranging from soft skills to technical skills, took place. " +
                        "Towards the end of the event, a 24h challenge took place following the theme of the event."
                }
            ]
        },
        {
            title: "Workshop: Introduction to QHSE",
            picture: qhse,
            description:
                [
                    {

                        text: "This workshop was presented by Ms. Rihab a university teacher and a trainer and expert in QHSE. As one of the most \n" +
                            "prominent management systems, QHSE or quality, health, security and \n" +
                            "environmental management is a mandatory tool that most engineers must \n" +
                            "possess.."
                    },
                    {
                        text: "QHSE stands for Quality, Health, Security and Environment. As the name indicates, a QHSE Management System aims to achieve optimal results in these criteria. It is a tool to direct, manage and develop an organization. The goal of a \n" +
                            "QHSE Management System is to make sure that an organization complies with \n" +
                            "regulations and legislation in the aforementioned fields."
                    },
                    {
                        text: "The trainer delved deep into QHSE by explaining all four of Quality, Health, Security and Environment norms. She then proceeded to enumerate the \n" +
                            "different benefits it has and their impact on the different impact on the organization following this tool’s guidelines. She also mentioned the different standards making an organization more trustworthy and less prone to legal \n" +
                            "issues."
                    },
                    {
                        text: "The trainees appreciated the work of Ms. Rihab Righi, which made them more interested in pursuing more knowledge in this subject"
                    }

                ]
        },
        {
            title: "Workshop: how recycling saves energy",
            picture: recycle,
            description: [
                {
                    text: "This workshop was presented by Mr. Anis Guerfi, an engineer and an expert in plastics. The trainer guided the participants through the basics of recycling and explained why it is important to do."
                },
                {
                    text: "Wasted material and energy sources are some of our world’s biggest problems. To begin with, the waste’s amount is increasing in a way that wastelands are unable to contain and in a way that is intoxicating Earth. Then, we can’t deny the problem presented in the scarcity of energy and inability to produce more through fuel. That’s why recycling is important as it solves a percentage of \n" +
                        "these problems."
                },
                {
                    text: "First, Mr. Anis Guerfi explained the types of plastics, how to identify them and their characteristics. He explained how some plastics can get recycled upto 9 times while some can’t be recycled according to their type and how many times they’ve been recycled already. He also explained how recycling can be a source of energy as the materials you use are reused rather than consuming more polymeric material. Later on, our trainer emphasized the importance of our behavior in regards to our excessive use of plastics. He presented alternatives to using plastics such as using a fabric bag that you can use over \n" +
                        "and over again."
                },
                {
                    text: "The attendees were very pleased with this workshop as they showed great interest in the subject and had many questions to ask. Mr. Anis was very accommodating as he answered the questions in details and made sure everyone understood it clearly. The participants were very active, but two of them were very outstanding. That’s why they won a free pass to our next workshop."
                }
            ]


        },
        {
            title: "Workshop: public speaking",
            picture: publicSpeaking,
            description: [
                {
                    text: "This workshop was presented by Asma Selmi, a professional soft skills coach. The trainer helped the attendees through the basis of public speaking to \n" +
                        "overcome their stage fright and give their best performance."
                },
                {
                    text: "One of the most important stages of a project or an event is its introduction and the first impression it makes. As such, the announcer’s duty is to nail the presentation. This process is not easy as it is necessary to monitor every word and every move down to the slightest details."
                },
                {
                    text: "The first thing the trainer did was take in the demeanor of the attendees, in order to better understand them and point out the changes they must make. Then, she went through the whole process of communication and the \n" +
                        "techniques of public speaking. Afterwards, she gave examples to better\n" +
                        "understand prior information. Finally, a simulation of different situations took place, to practice what’s been learned."
                },
                {
                    text: "The attendees were very pleased with this workshop as they have gained a new perspective. As the feedback was positive and the interest picked in the first place, there may be a second workshop with Ms. Asma Selmi."
                }

            ]

        },
        {
            title: "boost your career summer school 3.0",
            picture: sc,
            description: [
                {
                    text: "This workshop was presented by AI developer advocate and teacher, Mr. Elyes Manai. The trainer dived into the secrets of the professional world to prepare the attendees for the future of their career."
                },
                {
                    text: "Through his own experience, the trainer went through the fundamental knowledge that each and every aspiring beginner professional should have, the way one should act when faced with all kinds of situations and the mindset one \n" +
                        "must have."
                },
                {
                    text: "In more details, the trainer went over hardships anyone can encounter when climbing up the stairs to success. He explained that being dishonorable and \n" +
                        "using underhanded ways will only lead to a downfall. He went over the stories of people who managed to achieve the greatest success when it was expected that they fail. The trainer then went to explain the ways of the business world to get the attenddes ready to face the professional world."
                },
                {
                    text: "The feedback we got from attendees was stupefying. There were no complains whatsoever. As a matter of fact, it seemed that they enjoyed his company for the questions kept coming even after the workshop ended and Mr. Elyes Manai didn’t fail to answer the questions to their satisfaction. This was probably due to the trainer’s amazing ability to integrate people and his humor. Following this positive feedback, the chapter is considering asking Mr. Elyes to present again, as the number was small because of the precautions taken."
                }
            ]
        },
        {
            title: "IEEE Summer school 3.0: Energy transition workshop",
            picture: sc2,
            description: [
                {
                    text:"This workshop was presented by Mr. Samer Zwaydeh, an independent internationally recognized energy expert and lecturer at Al Hussein Technical University with twenty-six years of management experience around the world. This certified carbon reduction manager introduced energy transition from its concept to its real life application."
                },
                {
                    text:"Energy transition is oriented towards the use of renewable energy in place of fossil energy to minimize the emission of dioxide carbon and hopefully eliminating it completely towards the end of the century. Energy transition aims to limit climate change through the disposal of carbon emitters."
                },
                {
                    text:"In more details, Mr. Samer Zwaydeh explained the methods used in providing renewable energy such as solar energy. The trainer went as far as to provide examples different examples of the application of energy transition in real life and in the current crisis the world is suffering from: corona."
                },
                {
                    text:"The workshop picked the attention of most of the attendees as the trainer introduced energy transition through the current situation by explaining this concept use. This workshop proved that energy transition is an important carbon-neutral strategy that we should aim to use in life."
                }
            ]
        },
        {
            title: "Zero Hunger Day 2019",
            picture: zhd,
            description: [
                {
                    text: "On September 25th 2019, IEEE PES celebrated the 1st IEEE PES Zero Hunger Day (Global) when ambassadors, PES SB chapters, PES Section chapters, PES YP, PES WiP, IEEE and PES volunteers made food donation based on food donations campaigns with main focus on 17 UN Sustainable Development goals(2030)."
                },
                {
                    text:"For our chapter , we made a food donation campaign in our unit and we were glad to host our collaborator NGO Rotaract Tunis Hope Rotaract Tunis Hope in our SB local to celebrate the IEEE day and PES zero hunger day at the same Time . The meeting was not only about delivering the food donations that we collected but also it was a chance to exchange goals and values of both organizations."
                },
                {
                    text:"Everyone was really satisfied with this ZHD first edition so we promised more impactful editions in the future."
                }
            ]
        },
        // {
        //     title: "Summer School 2.0",
        //     picture: sc3,
        //     description: 'The IEEE NSAT SB found it a great idea to start this academic year with the\n' +
        //         '2nd edition of Summer school .This very first event took place 6–8 September 2019\n' +
        //         'in INSAT . It gathered more than one hundred students from different backgrounds\n' +
        //         'and levels of studies , making it so far the largest summer school since its\n' +
        //         'establishment in 2017. The purpose of the summer school was to provide the\n' +
        //         'participating students with a large variety of workshops , conferences , and many\n' +
        //         'other activities .It was also a great opportunity for the freshmen to discover the IEEE\n' +
        //         'family and its activities and to get more familiar with INSAT’s corners and walls in an\n' +
        //         'academic context .\n' +
        //         'For the PES chapter , the summer school consisted of a workshop and a conference\n' +
        //         'that were provided by 2 experts covering topics from Solar energy and electricity\n' +
        //         'consumption and plastic and circular economy'
        // },

    ];
    const upcommpingEvents=[
        {
            title:"Recycle for the life CYCLE",
            picture:rflc,
            description:[
                {
                    text:'In collaboration with “Emel Tounes“ association, we will be collecting plastic caps in a box that will be prepared by the PES chapter and\n' +
                        'located in the club room to be accessible to anyone willing to help.\n' +
                        'All the collected caps will be recycled and transformed to a wheelchair that will be given to a handicap person.\n' +
                        'This action is a volunteering and an environmental protection one because plastic is a material that Earth cannot digest.'
                }
            ]

        },
        {
            title:"Youth for CHANGE",
            picture:yfc,
            description:[
                {
                    text:"YFC consists of school visits in different regions of Tunisia where PES members will help students develop a better understanding of renewable energy."
                },
                {
                    text:"The team will organize a range of training courses and workshops in order to hopefully help nurture a whole generation and ignite a spark of passion in their spirit. PES members will also organize a competition between the participants at the end of the day in every visit to nominate the winning team. \n" +
                        "From every school, we will have a winning team, we will give them an idea about a project that they should realize."
                },
                {
                    text:"The final will be in INSAT, all the teams will pitch their fresh ideas and there will be awards to encourage and to show them that we do believe that young people will make this world better."
                },

            ]

        },
        {
            title:"REC\'IT UP 3.0 ",
            picture:rip,
            description:[
                {
                    text:"The first ever ‘REC'It Up’ 24-hours challenge was organized by IEEE Power & Energy Society Chapter INSAT Student Branch."
                },
                {
                    text:"Renewable Energies Challenge “REC iT Up” is an entrepreneurship challenge in which IEEE members participated. In the beginning, the participants attended technical and soft skills training. The participants were divided into teams. They were then required to follow the instructions of the jury to represent their renewable energy related projects.  At the end of the challenge, the jury nominated the winning team based on its project’s innovation, feasibility and business plan."
                },
                {
                    text:"This challenge was open to all the IEEE members from all Student Branches in Tunisia which gave them an opportunity to network with fellow IEEE members from other student branches in Tunisia."
                }
            ]

        },
    ];
    return (
        <div>
            <div css={bannerStyle}>
                <div className="overlay"></div>
                <Jump forever duration={1500}>
                    <div css={headerStyle}>
                        <h1>Activities</h1>
                    </div>
                </Jump>
            </div>
            <div className="container" style={{'marginBottom': ' 50px'}}>
                <div className="row">
                    <div className="col-12">
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel"
                             css={carouselStyle}>
                            <div className="carousel-inner">

                                <CarouselItem title={'Zero Hunger Day'} picture={zhd} classAct={'carousel-item active'}
                                              text={'On September 25th 2019, IEEE PES celebrated the 1st IEEE PES Zero Hunger Day (Global) when ambassadors, PES SB chapters, PES Section chapters, PES YP, PES WiP, IEEE and PES volunteers  made food donation based on food donations campaigns with main focus on 17 UN Sustainable Development goals(2030).. For our chapter , we made a food donation campaign in our unit and we were glad to host our collaborator NGO Rotaract Tunis Hope Rotaract Tunis Hope in our SB local to celebrate the IEEE day and PES zero hunger day at the same Time . The meeting was not only about delivering the food donations that we collected but also it was a chance to exchange goals and values of both organizations. Everyone was really satisfied with this ZHD first edition so we  promised more impactful editions in the future.'}/>
                                <CarouselItem title={'Youth For Change'} picture={yfc} classAct={'carousel-item'}
                                              text={'Youth for change is an initiative that was first held in 2017 by PES volunteer members. This event’s goal is educating the younger generations about renewable energies in Tunisia as an investment for the future of our country and our planet as a whole. To achieve our goal, PES INSAT volunteers visit preparatory schools in many regions of TUNISIA and provide training sessions in the field of energy, for example how we produce electricity by using the solar energy, wind power, piezoelectric materials and hydro power. After this process, students are divided into teams in order to complete a challenge and the finals is held annually at our institute . Applying what they learnt and working in teams ,young students attempt to solve real-world challenges by conceiving projects related to renewable energies then their projects is put to the test as each team pitches their project idea in front of a global audience of their peers and a panel of judges.'}/>
                                <CarouselItem title={'Rec it UP'} picture={rip} classAct={'carousel-item'}
                                              text={"The first ever ‘REC iT Up’ 24-hours challenge was organized by IEEE Power & Energy Society Chapter INSAT Student Branch.\n" +
                                              "Renewable Energies Challenge “REC iT Up” is an entrepreneurship challenge in which IEEE members participated. In the beginning, the participants attended technical and soft skills training. The participants were divided into teams. They were then required to follow the instructions of the jury to represent their renewable energy related projects.  At the end of the challenge, the jury nominated the winning team based on its project’s innovation, feasibility and business plan. This challenge was open to all the IEEE members from all Student Branches in Tunisia which gave them an opportunity to network with fellow IEEE members from other student branches in Tunisia."}/>

                                <CarouselItem title={'Women in POWER'} picture={wip} classAct={'carousel-item'}
                                              text={'The first edition of WOMEN in POWER was organized by IEEE PES INSAT Student Chapter in collaboration with IEEE WIE INSAT Student Affinity Group. This event takes up a whole day where conferences, success stories of women of women in the field of power and energy. We dedicate this day to appreciate , celebrate and empower women in the field of energy.\n' +
                                              'The first edition took place on the 20th of February 2019. The conference had six speakers (Mrs Kaouther Lihidheb ,Mrs Nedra Mtimet ,Mrs Tesnime Ben Dekhil,Mrs Nourane Bouadjila ,Mrs Soumaya Alouane and Mrs Awatef Siala). This much-anticipated event portrayed female energy experts who left their fingerprint in the energy domain. This conference both covered the most pressing and controversial issues in the energy sector and tackled the most interesting and updated topics such as Energy efficiency, Renewable energy in Tunisia, Oil exploration and production in Tunisia and also Environmental and social safeguards of energy projects.  The success of this event was enormous as both attendees and students were able to socialize and share expertise.'}/>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button"
                               data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button"
                               data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
                {/*upcomming events*/}
                <div className={'events'} css={upcommingStyle}>
                    <div className="container">
                        <div className="row ">
                            <h2>upcoming events</h2>
                            <div className="row upcomming">
                                {upcommpingEvents.map(
                                    ({title, picture, description}, index) => <Activity title={title}
                                                                                            description={description}
                                                                                            picture={picture}
                                                                                            key={index}/>)}
                                {/*<Activity picture={pam} title={'IEEE PES tunisia general  meeting'}*/}
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
                                {/*<Activity title={"REC\'IT UP 3.0 "} picture={rip}*/}
                                {/*          description={"If you are an IEEE member and you want to prove your skills\n" +*/}
                                {/*          "THIS IS YOUR CHANCE TO SHINE!!   \n" +*/}
                                {/*          "Rec’it up ,a 24-hours challenge, will be organized by IEEE PES INSAT chapter in its third edition.  \n" +*/}
                                {/*          "The renewable energies challenge is an entrepreneurship challenge which will be open to all the IEEE members  from all student branches and non-members  in Tunisia.\n" +*/}
                                {/*          "Don't hesitate to be part of the organizing committee ! \n" +*/}
                                {/*          "Fill the form !"}/>*/}

                            </div>
                            <h2>Latest activities</h2>
                            <div className="row latest">
                                <div className="col-12 col-md-6">
                                    <BigArticle title={latest[0].title} text={latest[0].description}
                                                picture={latest[0].picture}/>
                                    {/*<BigArticle title={"boost your career summer school 3.0"} picture={sc}*/}
                                    {/*            text={'This workshop was presented by AI developer advocate and teacher, Mr. Elyes\n' +*/}
                                    {/*            'Manai. The trainer dived into the secrets of the professional world to prepare\n' +*/}
                                    {/*            'the attendees for the future of their career.\n' +*/}
                                    {/*            '\n' +*/}
                                    {/*            'Through his own experience, the trainer went through the fundamental\n' +*/}
                                    {/*            'knowledge that each and every aspiring beginner professional should have, the\n' +*/}
                                    {/*            'way one should act when faced with all kinds of situations and the mindset one\n' +*/}
                                    {/*            'must have.\n' +*/}
                                    {/*            '\n' +*/}
                                    {/*            'In more details, the trainer went over hardships anyone can encounter when\n' +*/}
                                    {/*            'climbing up the stairs to success. He explained that being dishonorable and\n' +*/}
                                    {/*            'using underhanded ways will only lead to a downfall. He went over the stories\n' +*/}
                                    {/*            'of people who managed to achieve the greatest success when it was expected\n' +*/}
                                    {/*            'that they fail. The trainer then went to explain the ways of the business world\n' +*/}
                                    {/*            'to get the attenddes ready to face the professional world.\n' +*/}
                                    {/*            '\n' +*/}
                                    {/*            'The feedback we got from attendees was stupefying. There were no complains\n' +*/}
                                    {/*            'whatsoever. As a matter of fact, it seemed that they enjoyed his company for\n' +*/}
                                    {/*            'the questions kept coming even after the workshop ended and Mr. Elyes Manai\n' +*/}
                                    {/*            'didn’t fail to answer the questions to their satisfaction. This was probably due\n' +*/}
                                    {/*            'to the trainer’s amazing ability to integrate people and his humor. Following\n' +*/}
                                    {/*            'this positive feedback, the chapter is considering asking Mr. Elyes to present\n' +*/}
                                    {/*            'again, as the number was small because of the precautions taken.'}/>*/}
                                </div>

                                <div className="col-12 col-md-6 latest-left-bigger ">
                                    {latest.slice(1, 4).map(
                                        ({title, picture, description}, index) => <SmallArticle title={title}
                                                                                                text={description}
                                                                                                picture={picture}
                                                                                                key={index}/>
                                    )}
                                    {/*<SmallArticle title={'IEEE Summer school 3.0: Energy transition workshop'}*/}
                                    {/*              picture={sc2}*/}
                                    {/*              text={'This workshop was presented by Mr.\n' +*/}
                                    {/*              'Samer Zwaydeh, an independent\n' +*/}
                                    {/*              'internationally recognized energy expert\n' +*/}
                                    {/*              'and lecturer at Al Hussein Technical\n' +*/}
                                    {/*              'University with twenty-six years of\n' +*/}
                                    {/*              'management experience around the\n' +*/}
                                    {/*              'world. This certified carbon reduction\n' +*/}
                                    {/*              'manager introduced energy transition\n' +*/}
                                    {/*              'from its concept to its real life application.\n' +*/}
                                    {/*              '\n' +*/}
                                    {/*              'Energy transition is oriented towards the use of renewable energy in place of\n' +*/}
                                    {/*              'fossil energy to minimize the emission of dioxide carbon and hopefully\n' +*/}
                                    {/*              'eliminating it completely towards the end of the century. Energy transition\n' +*/}
                                    {/*              'aims to limit climate change through the disposal of carbon emitters.\n' +*/}
                                    {/*              '\n' +*/}
                                    {/*              'In more details, Mr. Samer Zwaydeh explained the methods used in providing\n' +*/}
                                    {/*              'renewable energy such as solar energy. The trainer went as far as to provide\n' +*/}
                                    {/*              'examples different examples of the application of energy transition in real life\n' +*/}
                                    {/*              'and in the current crisis the world is suffering from: corona.\n' +*/}
                                    {/*              '\n' +*/}
                                    {/*              'The workshop picked the attention of most of the attendees as the trainer\n' +*/}
                                    {/*              'introduced energy transition through the current situation by explaining this\n' +*/}
                                    {/*              'concept use. This workshop proved that energy transition is an important\n' +*/}
                                    {/*              'carbon-neutral strategy that we should aim to use in life.'}/>*/}
                                    {/*<SmallArticle title={'Zero HUNGER DAY 2019'} picture={zhd}*/}
                                    {/*              text={'On September 25th 2019, IEEE PES celebrated the 1st IEEE PES Zero Hunger Day\n' +*/}
                                    {/*              '(Global) when ambassadors, PES SB chapters, PES Section chapters, PES YP, PES\n' +*/}
                                    {/*              'WiP, IEEE and PES volunteers made food donation based on food donations\n' +*/}
                                    {/*              'campaigns with main focus on 17 UN Sustainable Development goals(2030).. For\n' +*/}
                                    {/*              'our chapter , we made a food donation campaign in our unit and we were glad to host\n' +*/}
                                    {/*              'our collaborator NGO Rotaract Tunis Hope Rotaract Tunis Hope in our SB local to celebrate the\n' +*/}
                                    {/*              'IEEE day and PES zero hunger day at the same Time . The meeting was not only about\n' +*/}
                                    {/*              'delivering the food donations that we collected but also it was a chance to exchange goals and\n' +*/}
                                    {/*              'values of both organizations. Everyone was really satisfied with this ZHD first edition so we\n' +*/}
                                    {/*              'promised more impactful editions in the future'}/>*/}
                                    {/*<SmallArticle title={'Summer SCHOOL 2.0'} picture={sc3}*/}
                                    {/*              text={'The IEEE NSAT SB found it a great idea to start this academic year with the\n' +*/}
                                    {/*              '2nd edition of Summer school .This very first event took place 6–8 September 2019\n' +*/}
                                    {/*              'in INSAT . It gathered more than one hundred students from different backgrounds\n' +*/}
                                    {/*              'and levels of studies , making it so far the largest summer school since its\n' +*/}
                                    {/*              'establishment in 2017. The purpose of the summer school was to provide the\n' +*/}
                                    {/*              'participating students with a large variety of workshops , conferences , and many\n' +*/}
                                    {/*              'other activities .It was also a great opportunity for the freshmen to discover the IEEE\n' +*/}
                                    {/*              'family and its activities and to get more familiar with INSAT’s corners and walls in an\n' +*/}
                                    {/*              'academic context .\n' +*/}
                                    {/*              'For the PES chapter , the summer school consisted of a workshop and a conference\n' +*/}
                                    {/*              'that were provided by 2 experts covering topics from Solar energy and electricity\n' +*/}
                                    {/*              'consumption and plastic and circular economy'}/>*/}


                                </div>
                            </div>
                            <div className="row">
                                {latest.slice(4, latest.length).map(
                                    ({title, description, picture}, index) => {
                                        // if (index > 3) {
                                        return (
                                            <ActivityLatest title={title}
                                                            description={description}
                                                            picture={picture}
                                                            key={index}/>
                                        )
                                        // } else {
                                        //     return null
                                        // }

                                    }
                                )}
                                {/*<ActivityLatest picture={pam} title={'IEEE PES tunisia general  meeting'}*/}
                                {/*                description={'In a changing world, we are facing a new reality including the energy transition. Willing to provide you a new\n' +*/}
                                {/*                'experience, PES chapter presents to you the PES General Meeting Congress where you\'ll be introduced to this\n' +*/}
                                {/*                'new domain and how it is making a progressive impact on the world.\n' +*/}
                                {/*                '\n' +*/}
                                {/*                'Organized for its first time by the IEEE PES INSAT Student Branch Chapter, the meeting will take place in\n' +*/}
                                {/*                'November themed ENERGY TRANSITION!\n' +*/}
                                {/*                '\n' +*/}
                                {/*                'The seminar will include workshops and a conference bringing together professionals, inspiring speakers and\n' +*/}
                                {/*                'motivational trainers.'}/>*/}


                                {/*<ActivityLatest picture={pam} title={'IEEE PES tunisia general  meeting'}*/}
                                {/*                description={'In a changing world, we are facing a new reality including the energy transition. Willing to provide you a new\n' +*/}
                                {/*                'experience, PES chapter presents to you the PES General Meeting Congress where you\'ll be introduced to this\n' +*/}
                                {/*                'new domain and how it is making a progressive impact on the world.\n' +*/}
                                {/*                '\n' +*/}
                                {/*                'Organized for its first time by the IEEE PES INSAT Student Branch Chapter, the meeting will take place in\n' +*/}
                                {/*                'November themed ENERGY TRANSITION!\n' +*/}
                                {/*                '\n' +*/}
                                {/*                'The seminar will include workshops and a conference bringing together professionals, inspiring speakers and\n' +*/}
                                {/*                'motivational trainers.'}/>*/}


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};
export default Activities;

