import React,{useEffect} from "react";
import {css, jsx} from "@emotion/core";

import Jump from "react-reveal/Jump";
import banner from '../pictures/community/community-banner.jpg'
import omar from '../pictures/omar.jpg'


/** @jsx jsx */
const OurCommunity = () => {
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
        clip-path: polygon(0 0, 100% 0, 100% 88%, 57% 100%, 0 86%);
  }
  @media(max-width: 750px){
    &{
        clip-path: polygon(0 0, 100% 0, 100% 50%, 100% 93%, 55% 100%, 0 92%) !important;
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
    // useEffect(
    //     ()=>{
    //         $(document).ready(function() {
    //
    //             $('#autoWidth').lightSlider({
    //                 autoWidth:true,
    //                 loop:true,
    //                 onSliderLoad: function() {
    //                     $('#autoWidth').removeClass('cS-hidden');
    //                 }
    //             });
    //         });
    //
    //     },[]
    // );
    return (
        <div>
            <div css={bannerStyle} className={'comm-banner'}>
                <Jump forever duration={1500}>
                    <div css={headerStyle}>
                        <h1 style={{textAlign:"center"}}>Our</h1><h1> Community</h1>
                    </div>
                </Jump>
            </div>

            <div class=" mom">

                <ul id="autoWidth" class="cs-hidden">

                    <li class="item-a">

                        <div class="box">
                            <p class="mom-pic">Member of the month</p>

                            <img src={omar} class="model rounded-circle img-thumbnail  "/>

                            <div class="details">

                                <h3>01-01-2021</h3>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus earum illo magnam
                                    minima nulla qui sit unde! Beatae enim eveniet excepturi fugit in, itaque nemo
                                </p>
                            </div>

                        </div>
                    </li>

                    <li class="item-a">
                        <div className="box">
                            <p className="mom-pic">Member of the month</p>

                            <img src={omar} className="model rounded-circle img-thumbnail  "/>

                            <div className="details">

                                <h3>01-01-2021</h3>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus earum illo magnam
                                    minima nulla qui sit unde! Beatae enim eveniet excepturi fugit in, itaque nemo
                                </p>
                            </div>

                        </div>
                    </li>

                    <li class="item-a">

                        <div className="box">
                            <p className="mom-pic">Member of the month</p>

                            <img src={omar} className="model rounded-circle img-thumbnail  "/>

                            <div className="details">

                                <h3>01-01-2021</h3>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus earum illo magnam
                                    minima nulla qui sit unde! Beatae enim eveniet excepturi fugit in, itaque nemo
                                </p>
                            </div>

                        </div>
                    </li>

                    <li class="item-a">

                        <div className="box">
                            <p className="mom-pic">Member of the month</p>

                            <img src={omar} className="model rounded-circle img-thumbnail  "/>

                            <div className="details">

                                <h3>01-01-2021</h3>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus earum illo magnam
                                    minima nulla qui sit unde! Beatae enim eveniet excepturi fugit in, itaque nemo
                                </p>
                            </div>

                        </div>
                    </li>

                    <li class="item-a">

                        <div className="box">
                            <p className="mom-pic">Member of the month</p>

                            <img src={omar} className="model rounded-circle img-thumbnail  "/>

                            <div className="details">

                                <h3>01-01-2021</h3>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus earum illo magnam
                                    minima nulla qui sit unde! Beatae enim eveniet excepturi fugit in, itaque nemo
                                </p>
                            </div>

                        </div>
                    </li>

                    <li class="item-a">

                        <div className="box">
                            <p className="mom-pic">Member of the month</p>

                            <img src={omar} className="model rounded-circle img-thumbnail  "/>

                            <div className="details">

                                <h3>01-01-2021</h3>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus earum illo magnam
                                    minima nulla qui sit unde! Beatae enim eveniet excepturi fugit in, itaque nemo
                                </p>
                            </div>

                        </div>
                    </li>
                </ul>


            </div>


        </div>
    )
};
export default OurCommunity;
