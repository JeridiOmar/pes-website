import React from "react";
import {css, jsx} from "@emotion/core";


/** @jsx jsx */
const Activity = ({title,description,picture}) => {
    return(
        <div data-aos="zoom-in" data-aos-duration="1500"  className="col-md-4  col-sm-12 card-wrapper  " css={css`padding-bottom: 1px!important;;`}>
            <div className="card p-lg-3" css={css` `} >
                <img className="card-img-top" src={picture} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text card-text1">{description}</p>
                    <p className="card-meta">

                        <img alt=""
                             src="https://secure.gravatar.com/avatar/ee009ffd2d2d1827217bf8c3a968fd16?s=20&amp;d=mm&amp;r=g"
                             srcSet="https://secure.gravatar.com/avatar/ee009ffd2d2d1827217bf8c3a968fd16?s=40&amp;d=mm&amp;r=g 2x"
                             className="useravatar avatar-20 photo rounded-circle" height="20" width="20"/> <span className="author"><a
                            href="https://litmotion.net/demo/neori/author/admin/" title="Posts by Lora"
                            rel="author">Omar</a></span>
                            <span className="date">January 28, 2018</span>
                            <span className="min-read"><span className="span-reading-time rt-reading-time"><span
                                className="rt-label"></span> <span className="rt-time"> 3</span> <span
                                className="rt-label rt-postfix"></span></span>min</span>

                    </p>
                    <a href="#" className="btn btn-primary">Read more</a>

                </div>
            </div>
        </div>
    )
};
export default Activity;
