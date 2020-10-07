import React, {useEffect, useState} from "react";
import {css, jsx} from "@emotion/core";

import Jump from "react-reveal/Jump";
import banner from '../pictures/community/community-banner.jpg'
import omar from '../pictures/omar.jpg'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Galery from "./Galery";

/** @jsx jsx */
const Mom = () => {
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
            partialVisibilityGutter: 500
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
            partialVisibilityGutter: 50
        }
    };
    return (
        <div className=" mom">

            <Carousel partialVisible={true} swipeable={true}
                      draggable={true} responsive={responsive} infinite>
                {/*<ul id="autoWidth" class="cs-hidden">*/}

                <div className="item-a">

                    <div className="box">
                        <p className="mom-pic">Member of the month</p>

                        <img src={omar} className="model rounded-circle img-thumbnail  "/>

                        <div className="details">

                            <h3>01-01-2021</h3>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus earum illo
                                magnam
                                minima nulla qui sit unde! Beatae enim eveniet excepturi fugit in, itaque
                                nemo
                            </p>
                        </div>

                    </div>
                </div>

                <div className="item-a">
                    <div className="box">
                        <p className="mom-pic">Member of the month</p>

                        <img src={omar} className="model rounded-circle img-thumbnail  "/>

                        <div className="details">

                            <h3>01-01-2021</h3>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus earum illo
                                magnam
                                minima nulla qui sit unde! Beatae enim eveniet excepturi fugit in, itaque
                                nemo
                            </p>
                        </div>

                    </div>
                </div>

                <div className="item-a">

                    <div className="box">
                        <p className="mom-pic">Member of the month</p>

                        <img src={omar} className="model rounded-circle img-thumbnail  "/>

                        <div className="details">

                            <h3>01-01-2021</h3>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus earum illo
                                magnam
                                minima nulla qui sit unde! Beatae enim eveniet excepturi fugit in, itaque
                                nemo
                            </p>
                        </div>

                    </div>
                </div>

                <div className="item-a">

                    <div className="box">
                        <p className="mom-pic">Member of the month</p>

                        <img src={omar} className="model rounded-circle img-thumbnail  "/>

                        <div className="details">

                            <h3>01-01-2021</h3>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus earum illo
                                magnam
                                minima nulla qui sit unde! Beatae enim eveniet excepturi fugit in, itaque
                                nemo
                            </p>
                        </div>

                    </div>
                </div>

                <li className="item-a">

                    <div className="box">
                        <p className="mom-pic">Member of the month</p>

                        <img src={omar} className="model rounded-circle img-thumbnail  "/>

                        <div className="details">

                            <h3>01-01-2021</h3>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus earum illo
                                magnam
                                minima nulla qui sit unde! Beatae enim eveniet excepturi fugit in, itaque
                                nemo
                            </p>
                        </div>

                    </div>
                </li>

                <div className="item-a">

                    <div className="box">
                        <p className="mom-pic">Member of the month</p>

                        <img src={omar} className="model rounded-circle img-thumbnail  "/>

                        <div className="details">

                            <h3>01-01-2021</h3>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus earum illo
                                magnam
                                minima nulla qui sit unde! Beatae enim eveniet excepturi fugit in, itaque
                                nemo
                            </p>
                        </div>

                    </div>
                </div>
            </Carousel>
            {/*</ul>*/}

        </div>
    )
};
export default Mom;
