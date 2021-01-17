import React from "react";
import Carousel from "./Carousel";

import About from "./About";
import Team from "./Team";
import LatestActivities from "./LatestActivities";
import logo from './pictures/logo.png';
import renewable from './pictures/about-us/save-energy.png';
import solar from './pictures/about-us/wind-energy.png';
import creativity from './pictures/about-us/creativity.png'
import {css, jsx} from '@emotion/core';
import './styles/bootstrap.min.css'
import {Router} from "@reach/router";

import OurSponsors from "./OurSponsors";
/** @jsx jsx */
const Home = () => {
    const iconStyle = css`
      width :60%;
      height: 100px;
      object-fit: contain;
      // background-color: #2ECC71;
      border-radius: 4px;
`
    const boxStyle = css`
  &{
    margin-top: 30px;
    margin-bottom: 30px;
  }
  & .row{
  margin-top: 15px;
    background-color: white;
    border-radius: 10px;
    border: 1px solid #eaeaea;
    box-shadow:  0px 0px 13px 10px rgba(0,0,0,.08);
    margin-left: 10px;
    margin-right: 10px;
  }
  & .col-4{
   border-right:  2px solid #eaeaea ;
  }
  & .box-inner-home{
  padding:5px;
  padding-top: 8px;
  text-align: center;
   
  }
  & .box-text-home{
    margin-top: 5px;
  }
  @media(max-width: 750px){
    & .box-text-home{
      font-size: 10px!important;
    }
  }
`;

    return (
        <div>
            <Carousel/>
            {/*<About title1={"About"} title2={"us"}*/}
            {/*       text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur beatae, eos et harum nesciunt quidem quod soluta? Enim nihil, omnis. Delectus dolore eius ipsam iste laboriosam omnis recusandae similique vero?Ad amet aperiam cupiditate delectus dolore eligendi ex expedita fuga laborum mollitia perferendis quam rerum sit, ullam vel. Accusantium cupiditate ea eligendi expedita facilis ipsam iure nisi odio porro quod."}/>*/}
            <div className="ebes">
                <div className="container " css={boxStyle}>
                    <div className="row">
                        <div className=" col-4">
                            <div className="">
                                <div className="box-inner-home ">
                                    <img src={renewable} alt="renewable " css={iconStyle} className="text-center"/>
                                    <div className="box-text-home text-center"><p>Upgrading skills in the fields of power and energy</p></div>

                                </div>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="box-home">
                                <div className="box-inner-home">
                                    <img src={solar} alt="renewable" css={iconStyle} style={{padding: "0px"}}/>
                                    <div className="box-text-home">Renewable energy deployment</div>

                                </div>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="box-home">
                                <div className="box-inner-home" style={{'textAlign':'center','borderRight':'0px'}}>
                                    <img src={creativity} alt="renewable" css={iconStyle} style={{padding: "0px"}}/>
                                    <div className="box-text-home">Innovation for the future</div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Team/>
            <LatestActivities/>
            <OurSponsors/>
        </div>


    );
};
export default Home;
