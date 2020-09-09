import React from 'react'
import {css, jsx} from '@emotion/core'
import banner from './pictures/about-banner.JPG'

/** @jsx jsx */
const AboutUs = () => {
    return (

        <div>
            <div className="banner">
                <div className="header-text">
                    <h1 >About</h1><h1 css={css`padding-left: 100px;`}> us</h1>
                </div>
            </div>
        </div>
    )
};
export default AboutUs;
