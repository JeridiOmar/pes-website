import React from "react";
import ReactDOM from "react-dom";
import {css, jsx} from "@emotion/core";


/** @jsx jsx */
const Loading = () => {
    const loadingStyle = css`
    & img{
      margin-bottom: auto;
      width:100%;
      object-fit: cover;
      height: 100vh;
    }
    `
    return (
        <div className={'container'} css={loadingStyle}>
            <div className="row text-center">
                <div className="col-12">
                    <img src="https://miro.medium.com/max/500/1*DXvI3dy2rKOMzV8S3fKFMQ.gif" alt=""/>
                </div>
            </div>

        </div>

    )
};
export default Loading;
