import React from "react";
import {css, jsx} from "@emotion/core";


/** @jsx jsx */
const About = ({title1, title2, text}) => {
    const titleStyle = css`
    //text-decoration:  underline overline;
    font-weight: bold;
    padding: 5px;
    &::before {
    content: '';
    position: absolute;
    display: block;
    width: 160px;
    height: 1px;
    background: #ddd;
    top: 54px;
    //bottom: 90px;
    left: calc(50% - 77px);
}

&::after {
    content: '';
    position: absolute;
    display: block;
    width: 40px;
    height: 3px;
    background: #2e911f;
   
    left: calc(50% - 20px);
}


     `;

    return (
        <div>
            <div className="container justify-content-center about-box">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center   " css={titleStyle}>{title1} <span
                            css={css`color: #1c7430`}>{title2}</span></h1>
                        <p className="aboutText text-center">{text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default About;
