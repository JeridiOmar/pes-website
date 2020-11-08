import React, {Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom";
import {Main, Router} from "@reach/router";
import {css, jsx} from '@emotion/core'
import banner from "../pictures/gm/banner.webp";
import banner2 from "../pictures/gm/banner5.webp"
import Jump from "react-reveal/Jump";
import CountDown from "./CountDown"

/** @jsx jsx */
const Gm = () => {
    const bannerStyle = css`
    &{
       background-image: url(${banner2});
      
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
     
     //font-size: 100px;
    font-family: 'Cabin', sans-serif;
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
    & h3{
    margin-top: 20px;
      font-family: 'Cabin', sans-serif;
      color: #f2e8cf;
      font-size:30px;
        font-weight: 300;
       
        letter-spacing: 1px;
        word-spacing: 2px;
    }
    }
    & button {
    margin-top: 50px;
      padding: 10px 35px;
      border-radius: 20px;
      border: 0;
      outline: none;
      font-style: italic;
      font-weight: 700;
      font-size: 14px;
      color: #ffffff;
      background-color: #ff6000;
      transition-duration: 0.4s;
    }
    & button:hover,
    & button:focus,
    & button:active:focus {
      outline: none;
      color: #ffffff;
      background-color: #FF7E00;
    }
    
    
    & .icon {
      font-size: 48px;
    cursor: pointer;
    background-color: #ffffff;
    border-radius: 50%;
    width: 6rem;
    height: 6rem;
    line-height: 6rem;
    position: relative;
    display: inline-block;
    transition: all 0.25s;
    color: #353535;
    }
    & h5{
        color:#f2e8cf
    }
    & button {
      -webkit-box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.3);
      -moz-box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.3);
      box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.3);
    }
    @media(max-width: 750px){
       & h1{ 
        margin-top:60px;
        
    }
  `;
    return (
        <div css={bannerStyle}>

            <div css={headerStyle}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <Jump forever duration={1500}>
                                <h1>PES Tunisia General Meeting</h1>
                            </Jump>
                            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, iusto?</h3>
                            <CountDown timeTillDate="12 07 2020, 6:00 am" timeFormat="MM DD YYYY, h:mm a"/>
                            <div><span className={"icon"}><i className="fab fa-youtube"></i></span></div>
                            {/*<h5>Event teaser</h5>*/}
                            <button  className="btn btn-default">Join us</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
        // <div>
        //     {/*<div className="se-pre-con"></div>*/}
        //     <div className="container">
        //         <div className="row">
        //             <div className="col-md-12">
        //                 <div className="header-logo-wrapper">
        //                     <img src="images/avion_logo.png" alt="avion" title="Avion Template"
        //                          className="img-responsive center-block"/>
        //                 </div>
        //             </div>
        //         </div>
        //
        //         <div className="row">
        //             <div className="col-md-12">
        //                 <h1 className="text-center">We will be back with new and exciting feature!</h1>
        //                 <h3 className="text-center">turpis gravida vel donec id tuarpis tellus odio magna</h3>
        //             </div>
        //         </div>
        //
        //         <div className="row">
        //             <div className="col-md-12">
        //                 <div id="counter_wrapper">
        //                     <div className="text-center" id="counter"></div>
        //                 </div>
        //             </div>
        //         </div>
        //
        //         <div className="text-center subscribe-form-wrapper">
        //             <form action="#" className="form-inline">
        //
        //
        //                 <button type="submit" className="btn btn-default">Subscribe</button>
        //             </form>
        //         </div>
        //
        //         <div className="row">
        //             <div className="col-md-12">
        //                 <div className="social-media-wrapper text-center">
        //                     <a href="#"><i className="fa fa-pinterest"></i></a>
        //                     <a href="#"><i className="fa fa-facebook-official"></i></a>
        //                     <a href="#"><i className="fa fa-google-plus-official"></i></a>
        //                     <a href="#"><i className="fa fa-twitter"></i></a>
        //                     <a href="#"><i className="fa fa-instagram"></i></a>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
};
export default Gm;
