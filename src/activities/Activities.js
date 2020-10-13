import React from 'react'
import {css, jsx} from '@emotion/core'
import Jump from "react-reveal/Jump";
import banner from '../pictures/activities/banner-activities.webp'
import summerSchool from '../pictures/SummerSchool.jpg';
import tsyp from '../pictures/tsyp.jpg';
import zhd from '../pictures/zhd.jpg'
import LatestActivities from "../LatestActivities";
import Activity from "../Activity";
import CarouselItem from "./CarouselItem";

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
            <div className="container" style={{'margin-bottom':' 50px'}}>
                <div className="row">
                    <div className="col-12">
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel"
                             css={carouselStyle}>
                            <div className="carousel-inner">

                                <CarouselItem title={'Zero Hunger Day'} picture={zhd } classAct={'carousel-item active'} text={'On September 25th 2019, IEEE PES celebrated the 1st IEEE PES Zero Hunger Day (Global) when ambassadors, PES SB chapters, PES Section chapters, PES YP, PES WiP, IEEE and PES volunteers  made food donation based on food donations campaigns with main focus on 17 UN Sustainable Development goals(2030).. For our chapter , we made a food donation campaign in our unit and we were glad to host our collaborator NGO Rotaract Tunis Hope Rotaract Tunis Hope in our SB local to celebrate the IEEE day and PES zero hunger day at the same Time . The meeting was not only about delivering the food donations that we collected but also it was a chance to exchange goals and values of both organizations. Everyone was really satisfied with this ZHD first edition so we  promised more impactful editions in the future.'}/>

                                <div className="carousel-item">
                                    <img className="d-block w-100" src={tsyp} alt="Second slide"/>
                                    <div className="carousel-caption  d-md-block">
                                        <h3>tsyp challenge</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi
                                            debitis eos minus natus odit quibusdam rem. Assumenda cupiditate dignissimos
                                            ...</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={summerSchool} alt="Third slide"/>
                                    <div className="carousel-caption  d-md-block">
                                        <h3>summer school</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi
                                            debitis eos minus natus odit quibusdam rem. Assumenda cupiditate dignissimos
                                            ...</p>
                                    </div>
                                </div>
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

                                    <div data-aos="fade-right" className="card p-lg-3">

                                        <img width="768px" height="517px"
                                             src="https://litmotion.net/demo/neori/wp-content/uploads/2019/10/9477-768x517.jpg"
                                             className="card-img-top card-bigger-img " alt=""
                                             srcSet="https://litmotion.net/demo/neori/wp-content/uploads/2019/10/9477-768x517.jpg 768w, https://litmotion.net/demo/neori/wp-content/uploads/2019/10/9477-300x202.jpg 300w, https://litmotion.net/demo/neori/wp-content/uploads/2019/10/9477-1024x690.jpg 1024w, https://litmotion.net/demo/neori/wp-content/uploads/2019/10/9477-600x404.jpg 600w"/>
                                        <div className="card-body">
                                            <h5 className="card-title">Dapibus congue orci in blandit purus proin
                                                sodales eros eu tortor</h5>
                                            <p className="card-text card-text1">Lorem ipsum dolor sit amet,
                                                consectetur
                                                adipiscing elit. Ut viverra nisl rutrum, pretium lectus nec,
                                                sagittis
                                                dolor. Phasellus eleifend efficitur gravida. Maecenas auctor...</p>
                                            <p className="card-meta">

                                                <img alt=""
                                                     src="https://secure.gravatar.com/avatar/ee009ffd2d2d1827217bf8c3a968fd16?s=20&amp;d=mm&amp;r=g"
                                                     srcSet="https://secure.gravatar.com/avatar/ee009ffd2d2d1827217bf8c3a968fd16?s=40&amp;d=mm&amp;r=g 2x"
                                                     className="useravatar avatar-20 photo rounded-circle"
                                                     height="20"
                                                     width="20"/> <span className="author"><a
                                                href="https://litmotion.net/demo/neori/author/admin/"
                                                title="Posts by Lora"
                                                rel="author">Omar</a></span>
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

