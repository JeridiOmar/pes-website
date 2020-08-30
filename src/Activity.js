import React from "react";
import {css, jsx} from "@emotion/core";


/** @jsx jsx */
const Activity = ({title,description,picture}) => {
    return(
        <div className="col-md-4 col-sm-12 card-wrapper ">
            <div className="card p-lg-3" css={css` `} >
                <img className="card-img-top" src={picture} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-primary">Read more</a>
                </div>
            </div>
        </div>
    )
};
export default Activity;
