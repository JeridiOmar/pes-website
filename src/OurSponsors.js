import React from 'react';
import sponsor1 from "./pictures/sponsor1.png";
import sponsor2 from "./pictures/sponsor2.png";
import sponsor3 from "./pictures/sponsor3.png";
import sponsor4 from "./pictures/sponsor4.gif";
import {css, jsx} from "@emotion/core";
import sponsorHeader from "./pictures/sponsorheader.webp";
/** @jsx jsx */

const OurSponsors = () => {
    const sponsorsStyle = css`
  & .sponsor-header{
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 150px;
    background-image: url(${sponsorHeader});
    background-size: cover;
    background-attachment: fixed;
    margin-bottom: 5%;
  }
  & .sponsor-header h3 {
    font-size: 50px;
    font-weight: 100;
    text-transform: uppercase;
    letter-spacing: 1px;
    word-spacing: 2px;
    animation-delay: .6s;
    color: rgba(255, 255, 255, .8);
    font-family: 'Rubik', sans-serif;
}
  & .sponsor-logos img{
  transition: 0.3s!important;
    width: 170px;
    height: 170px;
    object-fit: scale-down;
    opacity: 50%;
}
& .sponsor-logos img:hover{
    width: 170px;
    height: 170px;
    transform: scale(1.05);
    transition: 0.3s!important;
    object-fit: scale-down;
    opacity: 100%;
}
& {
margin-bottom: 70px;
}

`;
    return (
        <div css={sponsorsStyle}>
            <div className="sponsor-header">
                <h3 className="text-center">our sponsors</h3>
            </div>
            <div className="container">
                <div className="row sponsor-logos">
                    <div data-aos="fade-up" className="col-lg-3 col-6"><img  src={sponsor1} alt=""/></div>
                    <div data-aos="fade-up" className="col-lg-3 col-6"><img  src={sponsor2} alt=""/></div>
                    <div data-aos="fade-up" className="col-lg-3 col-6"><img  src={sponsor3} alt=""/></div>
                    <div data-aos="fade-up" className="col-lg-3 col-6"><img  src={sponsor4} alt=""/></div>
                </div>
            </div>
        </div>
    );
};

export default OurSponsors;
