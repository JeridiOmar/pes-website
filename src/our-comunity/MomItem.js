import React from 'react';
import {css, jsx} from "@emotion/core";
/** @jsx jsx */

const MomItem = ({picture, date, text}) => {
    return (
        <div className="item-a">

            <div className="box">
                <p className="mom-pic">Member of the month</p>

                <img src={picture} className="model rounded-circle img-thumbnail  "/>

                <div className="details">

                    <h3>{date}</h3>

                    <p>{text}</p>

                </div>

            </div>
        </div>
    );
};

export default MomItem;
