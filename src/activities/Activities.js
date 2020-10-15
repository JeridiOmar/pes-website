import React from 'react'
import {css, jsx} from '@emotion/core'
import Jump from "react-reveal/Jump";
import banner from '../pictures/activities/banner-activities.webp'
import summerSchool from '../pictures/SummerSchool.jpg';
import tsyp from '../pictures/tsyp.jpg';
import zhd from '../pictures/zhd.jpg'
import yfc from '../pictures/activities/yfc.webp'
import LatestActivities from "../LatestActivities";
import rip from '../pictures/activities/recitup.webp'
import sc from '../pictures/activities/sc.webp'
import Activity from "../Activity";
import CarouselItem from "./CarouselItem";
import BigArticle from "./BigArticle";

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
    object-fit: fill;
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
    return (
        <div>
            <div css={bannerStyle}>
                <Jump forever duration={1500}>
                    <div css={headerStyle}>
                        <h1>Activities</h1>
                    </div>
                </Jump>
            </div>
            <div className="container" style={{'margin-bottom': ' 50px'}}>
                <div className="row">
                    <div className="col-12">
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel"
                             css={carouselStyle}>
                            <div className="carousel-inner">

                                <CarouselItem title={'Zero Hunger Day'} picture={zhd} classAct={'carousel-item active'}
                                              text={'On September 25th 2019, IEEE PES celebrated the 1st IEEE PES Zero Hunger Day (Global) when ambassadors, PES SB chapters, PES Section chapters, PES YP, PES WiP, IEEE and PES volunteers  made food donation based on food donations campaigns with main focus on 17 UN Sustainable Development goals(2030).. For our chapter , we made a food donation campaign in our unit and we were glad to host our collaborator NGO Rotaract Tunis Hope Rotaract Tunis Hope in our SB local to celebrate the IEEE day and PES zero hunger day at the same Time . The meeting was not only about delivering the food donations that we collected but also it was a chance to exchange goals and values of both organizations. Everyone was really satisfied with this ZHD first edition so we  promised more impactful editions in the future.'}/>
                                <CarouselItem title={'Youth For Change'} picture={yfc} classAct={'carousel-item'}
                                              text={'Youth for change is an initiative that was first held in 2017 by PES volunteer members. This event’s goal is educating the younger generations about renewable energies in Tunisia as an investment for the future of our country and our planet as a whole. To achieve our goal, PES INSAT volunteers visit preparatory schools in many regions of TUNISIA and provide training sessions in the field of energy, for example how we produce electricity by using the solar energy, wind power, piezoelectric materials and hydro power. After this process, students are divided into teams in order to complete a challenge and the finals is held annually at our institute . Applying what they learnt and working in teams ,young students attempt to solve real-world challenges by conceiving projects related to renewable energies then their projects is put to the test as each team pitches their project idea in front of a global audience of their peers and a panel of judges.. It is fascinating to see this idea come to life as the influence of this experience left an impact on both the volunteers and the students. It was an honour to see their passion filled eyes as they emerge themselves in the process of learning. We are pleased to see the results of our work and are certain that this project will bear fruits in the future as such we hold it annually.'}/>
                                <CarouselItem title={'Rec it UP'} picture={rip} classAct={'carousel-item'}
                                              text={"The first ever ‘REC iT Up’ 24-hours challenge was organized by IEEE Power & Energy Society Chapter INSAT Student Branch.\n" +
                                              "Renewable Energies Challenge “REC iT Up” is an entrepreneurship challenge in which IEEE members participated. In the beginning, the participants attended technical and soft skills training. The participants were divided into teams. They were then required to follow the instructions of the jury to represent their renewable energy related projects.  At the end of the challenge, the jury nominated the winning team based on its project’s innovation, feasibility and business plan. This challenge was open to all the IEEE members from all Student Branches in Tunisia which gave them an opportunity to network with fellow IEEE members from other student branches in Tunisia."}/>

                                <CarouselItem title={'Women in POWER'} picture={rip} classAct={'carousel-item'}
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
                            <h2>upcomming events</h2>
                            <div className="row upcomming">
                                <Activity picture={summerSchool} title={"Summer School"}
                                          description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab culpa, labore libero odit rem repellat vitae."}/>
                                <Activity picture={tsyp} title={"Pes insat in TSYP"}
                                          description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab culpa, labore libero odit rem repellat vitae."}/>
                                <Activity picture={zhd} title={"Zero hunguer day"}
                                          description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab culpa, labore libero odit rem repellat vitae."}/>

                                <Activity picture={summerSchool} title={"Summer School"}
                                          description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab culpa, labore libero odit rem repellat vitae."}/>
                                <Activity picture={tsyp} title={"Pes insat in TSYP"}
                                          description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab culpa, labore libero odit rem repellat vitae."}/>
                                <Activity picture={zhd} title={"Zero hunguer day"}
                                          description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab culpa, labore libero odit rem repellat vitae."}/>

                            </div>
                            <h2>Latest ativities</h2>
                            <div className="row latest">
                                <div className="col-12 col-md-6">

                                    <BigArticle title={"boost your career summer school 3.0" } picture={sc}
                                                text={'This workshop was presented by AI developer advocate and teacher, Mr. Elyes\n' +
                                                'Manai. The trainer dived into the secrets of the professional world to prepare\n' +
                                                'the attendees for the future of their career.\n' +
                                                '\n' +
                                                'Through his own experience, the trainer went through the fundamental\n' +
                                                'knowledge that each and every aspiring beginner professional should have, the\n' +
                                                'way one should act when faced with all kinds of situations and the mindset one\n' +
                                                'must have.\n' +
                                                '\n' +
                                                'In more details, the trainer went over hardships anyone can encounter when\n' +
                                                'climbing up the stairs to success. He explained that being dishonorable and\n' +
                                                'using underhanded ways will only lead to a downfall. He went over the stories\n' +
                                                'of people who managed to achieve the greatest success when it was expected\n' +
                                                'that they fail. The trainer then went to explain the ways of the business world\n' +
                                                'to get the attenddes ready to face the professional world.\n' +
                                                '\n' +
                                                'The feedback we got from attendees was stupefying. There were no complains\n' +
                                                'whatsoever. As a matter of fact, it seemed that they enjoyed his company for\n' +
                                                'the questions kept coming even after the workshop ended and Mr. Elyes Manai\n' +
                                                'didn’t fail to answer the questions to their satisfaction. This was probably due\n' +
                                                'to the trainer’s amazing ability to integrate people and his humor. Following\n' +
                                                'this positive feedback, the chapter is considering asking Mr. Elyes to present\n' +
                                                'again, as the number was small because of the precautions taken.'}/>
                                </div>

                                <div className="col-12 col-md-6 latest-left-bigger ">
                                    <div data-aos="fade-right" className="row">

                                        <div className="col-12 col-md-6">
                                            <img
                                                src="https://litmotion.net/demo/neori/wp-content/uploads/2019/10/9477-300x202.jpg"
                                                alt="pic" className={'right-article-img w-100'}
                                                style={{'margin-top': '14px'}}/>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <h5 className="title">Ac mauris consectetur, et pharetra nisl aliquet
                                                nam ac
                                                quam vel felis</h5>
                                            <p className="card-meta">

                                                <img alt=""
                                                     src="https://secure.gravatar.com/avatar/ee009ffd2d2d1827217bf8c3a968fd16?s=20&amp;d=mm&amp;r=g"
                                                     srcSet="https://secure.gravatar.com/avatar/ee009ffd2d2d1827217bf8c3a968fd16?s=40&amp;d=mm&amp;r=g 2x"
                                                     className="  rounded-circle"
                                                     height="20"
                                                     width="20"/> <span className="author"><a
                                                href="https://litmotion.net/demo/neori/author/admin/"
                                                title="Posts by Lora"
                                                rel="author">omar</a></span>
                                                <span className="date">January 28, 2018</span>
                                                <span className="min-read"><span
                                                    className="span-reading-time rt-reading-time"><span
                                                    className="rt-label"></span> <span
                                                    className="rt-time"> 3</span> <span
                                                    className="rt-label rt-postfix"></span></span>min</span>

                                            </p>

                                        </div>


                                    </div>
                                    <div data-aos="fade-right" className="row">
                                        <div className="col-12 col-md-6">
                                            <img
                                                src="https://litmotion.net/demo/neori/wp-content/uploads/2019/10/9477-300x202.jpg"
                                                alt="pic" className='right-article-img w-100 '/>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <h5 className="title">Ac mauris consectetur, et pharetra nisl aliquet nam ac
                                                quam vel felis</h5>
                                            <p className="card-meta">

                                                <img alt=""
                                                     src="https://secure.gravatar.com/avatar/ee009ffd2d2d1827217bf8c3a968fd16?s=20&amp;d=mm&amp;r=g"
                                                     srcSet="https://secure.gravatar.com/avatar/ee009ffd2d2d1827217bf8c3a968fd16?s=40&amp;d=mm&amp;r=g 2x"
                                                     className="  rounded-circle"
                                                     height="20"
                                                     width="20"/> <span className="author"><a
                                                href="https://litmotion.net/demo/neori/author/admin/"
                                                title="Posts by Lora"
                                                rel="author">omar</a></span>
                                                <span className="date">January 28, 2018</span>
                                                <span className="min-read"><span
                                                    className="span-reading-time rt-reading-time"><span
                                                    className="rt-label"></span> <span
                                                    className="rt-time"> 3</span> <span
                                                    className="rt-label rt-postfix"></span></span>min</span>

                                            </p>
                                        </div>


                                    </div>
                                    <div data-aos="fade-right" className="row">
                                        <div className="col-12 col-md-6">
                                            <img
                                                src="https://litmotion.net/demo/neori/wp-content/uploads/2019/10/9477-300x202.jpg"
                                                alt="pic" className={'right-article-img w-100'}/>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <h5 className="title">Ac mauris consectetur, et pharetra nisl aliquet nam ac
                                                quam vel felis</h5>
                                            <p className="card-meta">

                                                <img alt=""
                                                     src="https://secure.gravatar.com/avatar/ee009ffd2d2d1827217bf8c3a968fd16?s=20&amp;d=mm&amp;r=g"
                                                     srcSet="https://secure.gravatar.com/avatar/ee009ffd2d2d1827217bf8c3a968fd16?s=40&amp;d=mm&amp;r=g 2x"
                                                     className="  rounded-circle"
                                                     height="20"
                                                     width="20"/> <span className="author"><a
                                                href="https://litmotion.net/demo/neori/author/admin/"
                                                title="Posts by Lora"
                                                rel="author">omar</a></span>
                                                <span className="date">January 28, 2018</span>
                                                <span className="min-read"><span
                                                    className="span-reading-time rt-reading-time"><span
                                                    className="rt-label"></span> <span
                                                    className="rt-time"> 3</span> <span
                                                    className="rt-label rt-postfix"></span></span>min</span>

                                            </p>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};
export default Activities;

