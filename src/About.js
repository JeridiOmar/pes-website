import React from "react";
import {css, jsx} from "@emotion/core";


/** @jsx jsx */
const About = () => {
    const titleStyle = css`
    //text-decoration:  underline overline;
    font-weight: bold;
    padding: 5px;

     `;

    return (
        <div>
            <div className="container justify-content-center">
                <div className="row" >
                    <div className="col-12">
                    <h1 className="text-center shadow-sm m-3 " css={titleStyle} >About <span
                        css={css`color: #1c7430`}>Us</span></h1>
                    <p className="aboutText"><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur beatae, eos et harum nesciunt quidem quod soluta? Enim nihil, omnis. Delectus dolore eius ipsam iste laboriosam omnis recusandae similique vero?</span><span>Ad amet aperiam cupiditate delectus dolore eligendi ex expedita fuga laborum mollitia perferendis quam rerum sit, ullam vel. Accusantium cupiditate ea eligendi expedita facilis ipsam iure nisi odio porro quod.</span>
                    </p>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default About;
