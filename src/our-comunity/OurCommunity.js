import React, {useEffect, useState} from "react";
import {css, jsx} from "@emotion/core";

import Jump from "react-reveal/Jump";
import banner from '../pictures/community/community-banner.webp'
import omar from '../pictures/omar.jpg'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Galery from "./Galery";
import Mom from './Mom'
import {Link, Router} from "@reach/router";
import About from "../About";
import '../styles/bootstrap.min.css'
/** @jsx jsx */
const OurCommunity = ({location}) => {
    const [momVisible, setmomVisible] = useState('initial');
    const [galleryVisible, setgalleryVisible] = useState('none');
    const handlemom = () => {
        setgalleryVisible('none');
        setmomVisible('initial');
        console.log(momVisible);
        console.log(galleryVisible);
    };
    const handlegallery = () => {
        setgalleryVisible('initial');
        setmomVisible('none');
        console.log(momVisible);
        console.log(galleryVisible);
    };

    const contentStyle = css`
  & .mom {
    margin-top: 20px;
  }
  
`;
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
        font-size: 55px;
        
    }
  `;
    const navStyle = css`
    &{
        margin-top: 30px;
    }
    & .active {
      background-color: #28a745 !important;
      color: white;
    }
    & .nav-item a{
    color:#28a745 ;
    }
    @media(min-width: 720px){
        &{
            padding-left:300px;
            padding-right: 250px;
        }
    }
    `;

    useEffect(()=>{
        const momButton=document.querySelector("#mom-tab");
        const galleryButton=document.querySelector("#gallery-tab");
        const elements=[momButton,galleryButton];
        elements.forEach((element)=>{
            element.classList.remove("active");
        });
        if(location.pathname==="/community/gallery"){
            galleryButton.classList.add("active");
        }else{
            momButton.classList.add("active");
        }

        console.log(location);
    },[location.pathname]);
    return (
        <div>
            <div css={bannerStyle} className={'comm-banner'}>
                <div className="overlay"></div>
                <Jump forever duration={1500}>
                    <div css={headerStyle}>
                        <h1 style={{textAlign: "center"}}>Our</h1><h1> Community</h1>
                    </div>
                </Jump>
            </div>

            <ul className="nav nav-pills nav-fill text-center" role="tablist" css={navStyle}>

                <li className="nav-item">
                    <Link className="nav-link mom-button active" id="mom-tab" data-toggle="tab"
                          to={'memberofthemonth'}
                          aria-selected="true" on>Member of the month</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link " id="gallery-tab" data-toggle="tab" to={'gallery'}
                          aria-selected="true">Gallery</Link>
                </li>

            </ul>
            <div className="tab-content" id="myTabContent" css={contentStyle} style={{'margin-bottom':' 50px'}}>

                <Router>


                    <Galery path={'gallery'}/>

                    <Mom path={'memberofthemonth'}/>

                </Router>
            </div>
        </div>
    )
};
export default OurCommunity;
