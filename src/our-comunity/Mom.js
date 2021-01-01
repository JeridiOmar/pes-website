import React, {useEffect, useState} from "react";
import {css, jsx} from "@emotion/core";


import omar from '../pictures/omar.jpg'
import nour from '../pictures/community/mom/nour.webp'
import chaima from '../pictures/community/mom/chaima.webp'
import emna from '../pictures/community/mom/emna.webp'
import fedy from '../pictures/community/mom/fedy.webp'
import iheb from '../pictures/community/mom/iheb.webp'
import anis from "../pictures/community/mom/anis.webp"
import sinda from "../pictures/community/mom/sinda.webp"
import imen from "../pictures/community/mom/imen.webp"
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
import MomItem from "./MomItem";


/** @jsx jsx */
const Mom = () => {
    const responsive = {
        fullhd: {
            breakpoint: {max: 3000, min: 1600},
            items: 4,
            slidesToSlide: 1, // optional, default to 1.
            partialVisibilityGutter: 70
        },
        desktop: {
            breakpoint: {max: 1600, min: 1024},
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
    const moms = [
        {
            picture:sinda,
            date:"November 2020",
            text:
                "During the past month, Sinda ElHedi and  Ayedi Imen amazed us with their incredible potential and their hard work. \n" +
                "They both are part of the IEEE PES Tunisia General Meeting committee and they always made sure to de their best in order to make the congress shine and succeed. \n" +
                "We would like to thank them for their devotion to PES chapter 💚💚 and congratulate them on deserving the \"Member of the month\" award.\n" +
                "Keep shining girls 🔥🔥🔥"
        },
        {
            picture:imen,
            date:"November 2020",
            text:"During the past month, Sinda ElHedi and  Ayedi Imen amazed us with their incredible potential and their hard work. \n" +
                "They both are part of the IEEE PES Tunisia General Meeting committee and they always made sure to de their best in order to make the congress shine and succeed. \n" +
                "We would like to thank them for their devotion to PES chapter 💚💚 and congratulate them on deserving the \"Member of the month\" award.\n" +
                "Keep shining girls 🔥🔥🔥"
        },
        {
            key: 1,
            picture: anis,
            date: "October 2020",
            text: "We are so glad to announce our member of the month! 🔥\n" +
                "Congratulations to Anis Rajhi, the media and communication manager of the IEEE PES Tunisia General Meeting, for his involvement and his commitment! 🥰\n" +
                "Keep your motivation flying high! \n" +
                "We certainly found ourselves confused to choose the most hardworking and dedicated member, that's why we want to thank all PES members for their motivation 💚"

        }
    ];
    return (
        <div className=" mom">

            <Carousel partialVisible={true} swipeable={true}
                      draggable={true} responsive={responsive} infinite>

                {moms.map(
                    ({picture,date,text},index)=>(<MomItem picture={picture} text={text} date={date}/> )
                )}
                <div className="item-a">

                    <div className="box">
                        <p className="mom-pic">Member of the month</p>

                        <img src={nour} className="model rounded-circle img-thumbnail  "/>

                        <div className="details">

                            <h3>February 2020</h3>

                            <p>Here we come to the end of this month and like every month we found ourselves confused to
                                choose the most active and hardworking member .
                                That's why we want to thank all our members for their contribution in making our events
                                succeed during this month and for making the choice harder every month 😅💪🏼
                                Special thanks also for Nour Belgaied and Chaima Hammami who have been chosen as members
                                of February 💚💚
                            </p>
                        </div>

                    </div>
                </div>


                <div className="item-a">
                    <div className="box">
                        <p className="mom-pic">Member of the month</p>

                        <img src={chaima} className="model rounded-circle img-thumbnail  "/>

                        <div className="details">

                            <h3>February 2020</h3>

                            <p>Here we come to the end of this month and like every month we found ourselves confused to
                                choose the most active and hardworking member .
                                That's why we want to thank all our members for their contribution in making our events
                                succeed during this month and for making the choice harder every month 😅💪🏼
                                Special thanks also for Nour Belgaied and Chaima Hammami who have been chosen as members
                                of February 💚💚
                            </p>
                        </div>

                    </div>
                </div>

                <div className="item-a">

                    <div className="box">
                        <p className="mom-pic">Member of the month</p>

                        <img src={emna} className="model rounded-circle img-thumbnail  "/>

                        <div className="details">

                            <h3>January 2020</h3>

                            <p>During this month we were surprised by the commitement and hardwork of all our members
                                that's why we want to thank them all but this made the mission to choose one between all
                                of them a little bit difficult 🤯 and finally we chose both EMNA BARGUI and FEDY SLIMI
                                as members of the month who were really brilliant during this month and they made it to
                                the top 🔥🔥🔥
                                Thank You All 💚💚💚💚
                            </p>
                        </div>

                    </div>
                </div>

                <div className="item-a">

                    <div className="box">
                        <p className="mom-pic">Member of the month</p>

                        <img src={fedy} className="model rounded-circle img-thumbnail  "/>

                        <div className="details">

                            <h3>January 2020</h3>

                            <p>During this month we were surprised by the commitement and hardwork of all our members
                                that's why we want to thank them all but this made the mission to choose one between all
                                of them a little bit difficult 🤯 and finally we chose both EMNA BARGUI and FEDY SLIMI
                                as members of the month who were really brilliant during this month and they made it to
                                the top 🔥🔥🔥
                                Thank You All 💚💚💚💚
                            </p>
                        </div>

                    </div>
                </div>

                <div className="item-a">

                    <div className="box">
                        <p className="mom-pic">Member of the month</p>

                        <img src={iheb} className="model rounded-circle img-thumbnail  "/>

                        <div className="details">

                            <h3>December 2019</h3>

                            <p>We’re proud to announce our member of the month for December 2019, Iheb Driouech ! 💪
                                Iheb, our YFC's logistics manager, is a hardworker person, motivated and always smiling
                                to all members 😃
                                Since He joined our family, He has shown an immense commitment to work with his team to
                                ensure a succesful event
                                We are glad to have you among us !
                                Thank you and Good Luck 💚💚
                            </p>
                        </div>

                    </div>
                </div>

                {/*<div className="item-a">*/}

                {/*    <div className="box">*/}
                {/*        <p className="mom-pic">Member of the month</p>*/}

                {/*        <img src={omar} className="model rounded-circle img-thumbnail  "/>*/}

                {/*        <div className="details">*/}

                {/*            <h3>01-01-2021</h3>*/}

                {/*            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus earum illo*/}
                {/*                magnam*/}
                {/*                minima nulla qui sit unde! Beatae enim eveniet excepturi fugit in, itaque*/}
                {/*                nemo*/}
                {/*            </p>*/}
                {/*        </div>*/}

                {/*    </div>*/}
                {/*</div>*/}
            </Carousel>
            {/*</ul>*/}

        </div>
    )
};
export default Mom;
