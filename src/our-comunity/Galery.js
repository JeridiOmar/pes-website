import React, {useEffect, useState} from "react";
import {css, jsx} from "@emotion/core";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import omar from '../pictures/omar.jpg'
import {Modal} from "react-bootstrap";

import Button from "react-bootstrap/Button";
import GaleryImage from "./GaleryImage";
// function importAll(r) {
//     let images = {};
//     r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
//     return images;
// }

const images = require('../pictures/community/galleries/elyes-workshop/*.webp');
const zhd2019=require('../pictures/community/galleries/zhd2019/*.webp');
const teambuilding2019=require('../pictures/community/galleries/teambuilding2019/*.webp');
const publicSpeaking=require('../pictures/community/galleries/publicspeaking/*.webp');
const yfc1=require('../pictures/community/galleries/yfc1/*.webp');
const yfc2=require('../pictures/community/galleries/yfc2/*.webp');
const yfc3=require('../pictures/community/galleries/yfc3/*.webp');
const workshopIso50001 =require('../pictures/community/galleries/workshop-iso50001/*.webp');
const sortieSteg =require('../pictures/community/galleries/steg/*.webp');
const gm=require('../pictures/community/galleries/gm/*.webp');
/** @jsx jsx */
const Galery = () => {

    const responsive = {
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3,
            slidesToSlide: 1, // optional, default to 1.
            partialVisibilityGutter: 70
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2,
            slidesToSlide: 2,// optional, default to 1.
            partialVisibilityGutter: 60
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
            partialVisibilityGutter: 50
        }
    };
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (event) => {
        event.preventDefault();
        setShow(true);
    };
    const galeryStyle = css`
       & {
        margin-top:15px;
        transition: all ease 0.3s;
       }
      & .card {
      width: 18rem;
      border-radius :10px;
      position: relative;
      }
      & .card-img{
        border-radius: 10px;
        object-fit: cover;
      }
      & .card:hover i{
        visibility: visible;
      }
      & .card i{
      visibility: hidden;
      position: absolute;
    left: calc(50% - 25px);
    top: calc(50% - 25px);
    /* left: 50%; */
    /* bottom: 50%; */
    display: inline-block;
    line-height: 50px;
    text-align: center;
    width: 50px;
    height: 50px;
    background: #fff;
    border-radius: 50%;
    transition: all ease 0.3s;
    font-size: 30px;
    color: #1b1e21 !important;
      }
      & .card {
        transition: all ease 0.3s;
      }
      & .card:hover {
        
        transform-style: preserve-3d;
        transform: scale(1.02);
        filter:blur(0.5px);
        
      }
      & .card i:hover{
        background-color: #538d22;
      }
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
    & .gallery-title{
      margin-top: 30px;
      margin-bottom: 15px;
    }
    & img{
      pointer-events: none;
    }
  `;
    return (
        <div className={'container'}>
            <div >
                <div  css={galeryStyle}>
                    <div className="container">
                        <div className="row ">
                            <h2 className={'gallery-title'}>STEG Khelidia training center industrial visit</h2>
                        </div>
                    </div>
                    <Carousel partialVisible={true} swipeable={true}
                              draggable={true} responsive={responsive} infinite>
                        {Object.values(sortieSteg).map((image)=>(<GaleryImage title={'STEG Khelidia training center industrial visit'} picture={image}/>))}

                    </Carousel>
                </div>
                <div  css={galeryStyle}>
                    <div className="container">
                        <div className="row ">
                            <h2 className={'gallery-title'}>YFC 4.0 third school</h2>
                        </div>
                    </div>
                    <Carousel partialVisible={true} swipeable={true}
                              draggable={true} responsive={responsive} infinite>
                        {Object.values(yfc3).map((image)=>(<GaleryImage title={'YFC 4.0 third school'} picture={image}/>))}

                    </Carousel>
                </div>
                <div  css={galeryStyle}>
                    <div className="container">
                        <div className="row ">
                            <h2 className={'gallery-title'}>YFC 4.0 second school</h2>
                        </div>
                    </div>
                    <Carousel partialVisible={true} swipeable={true}
                              draggable={true} responsive={responsive} infinite>
                        {Object.values(yfc2).map((image)=>(<GaleryImage title={'YFC 4.0 second school'} picture={image}/>))}

                    </Carousel>
                </div>
                <div  css={galeryStyle}>
                    <div className="container">
                        <div className="row ">
                            <h2 className={'gallery-title'}>Workshop ISO 50001</h2>
                        </div>
                    </div>
                    <Carousel partialVisible={true} swipeable={true}
                              draggable={true} responsive={responsive} infinite>
                        {Object.values(workshopIso50001).map((image)=>(<GaleryImage title={'Workshop ISO 50001'} picture={image}/>))}

                    </Carousel>
                </div>
                <div  css={galeryStyle}>
                    <div className="container">
                        <div className="row ">
                            <h2 className={'gallery-title'}>YFC 4.0 first school</h2>
                        </div>
                    </div>
                    <Carousel partialVisible={true} swipeable={true}
                              draggable={true} responsive={responsive} infinite>
                        {Object.values(yfc1).map((image)=>(<GaleryImage title={'YFC 4.0 first school'} picture={image}/>))}

                    </Carousel>
                </div>

                <div  css={galeryStyle}>
                    <div className="container">
                        <div className="row ">
                            <h2 className={'gallery-title'}>IEEE PES tunisia general meeting</h2>
                        </div>
                    </div>
                    <Carousel partialVisible={true} swipeable={true}
                              draggable={true} responsive={responsive} infinite>
                        {Object.values(gm).map((image)=>(<GaleryImage title={'IEEE PES tunisia general meeting'} picture={image}/>))}

                    </Carousel>
                </div>

                <div  css={galeryStyle}>
                    <div className="container">
                        <div className="row ">
                            <h2 className={'gallery-title'}>Formation public speaking</h2>
                        </div>
                    </div>
                    <Carousel partialVisible={true} swipeable={true}
                              draggable={true} responsive={responsive} infinite>
                        {Object.values(publicSpeaking).map((image)=>(<GaleryImage title={'Zero HUNGER day 2019'} picture={image}/>))}

                    </Carousel>
                </div>

                <div  css={galeryStyle}>
                    <div className="container">
                        <div className="row ">
                            <h2 className={'gallery-title'}>Formation Elyes Manai</h2>
                        </div>
                    </div>
                    <Carousel partialVisible={true} swipeable={true}
                              draggable={true} responsive={responsive} infinite>

                        {Object.values(images).map((image)=>(<GaleryImage title={'Formation Elyes Manai'} picture={image}/>))}



                    </Carousel>
                </div>

                <div  css={galeryStyle}>
                    <div className="container">
                        <div className="row ">
                            <h2 className={'gallery-title'}>Zero HUNGER day 2019</h2>
                        </div>
                    </div>
                    <Carousel partialVisible={true} swipeable={true}
                              draggable={true} responsive={responsive} infinite>
                        {Object.values(zhd2019).map((image)=>(<GaleryImage title={'Zero HUNGER day 2019'} picture={image}/>))}

                    </Carousel>
                </div>

                <div  css={galeryStyle}>
                    <div className="container">
                        <div className="row ">
                            <h2 className={'gallery-title'}>Team Building 2019</h2>
                        </div>
                    </div>
                    <Carousel partialVisible={true} swipeable={true}
                              draggable={true} responsive={responsive} infinite>
                        {Object.values(teambuilding2019).map((image)=>(<GaleryImage title={'Team Building 2019'} picture={image}/>))}

                    </Carousel>
                </div>
            </div>

        </div>

    )
};
export default Galery;
