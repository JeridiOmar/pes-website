import React from "react";
import banner1 from "./pictures/banner1.png";
import banner2 from "./pictures/banner2.jpg";
import banner3 from './pictures/banner3.jpg'
import banner4 from './pictures/about-back.jpg'
import {jsx, css} from '@emotion/core'

/** @jsx jsx */
const Carousel = () => {

    return (
        <div className={"carousel-resp"} css={css`
  
 
 clip-path: polygon(0 0, 100% 0, 100% 88%, 57% 100%, 0 86%);
`}>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" >
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">

                        <img className="d-block w-100 " src={banner4} alt="First slide"
                             height={document.documentElement.clientHeight -2} /></div>
                    <div className="absolute-div">
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Discover
                                IEEE PES Chapter</h1>
                            <h3>INSAT Student Branch</h3>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 " src={banner3} alt="Second slide"
                             height={document.documentElement.clientHeight -2}/>
                    </div>
                    <div className="carousel-item ">

                        <img className="d-block w-100 " src={banner1} alt="Third slide"
                             height={document.documentElement.clientHeight -2}/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
};
export default Carousel;
