import React from "react";
import banner1 from "./pictures/banner7.webp";
import banner5 from './pictures/banner4.webp'
import banner6 from './pictures/banner6.webp'
import Jump from 'react-reveal/Jump';
import {jsx, css} from '@emotion/core'

/** @jsx jsx */
const Carousel = () => {

    return (
        <div className={"carousel-resp"} css={css`
  
 //
 //clip-path: polygon(0 0, 100% 0, 100% 88%, 57% 100%, 0 86%);
`}>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item carousel-item-home active">

                        <img className="d-block w-100  " src={banner5} alt="First slide" style={{filter: 'brightness(50%)'}}
                             height={document.documentElement.clientHeight }/></div>
                    <div className="absolute-div">
                        <Jump forever duration={1500}>
                            <div className="carousel-caption carousel-caption-home d-block ">
                                <h1>Discover
                                    IEEE PES Chapter</h1>
                                <h3>INSAT Student Branch</h3>
                            </div>
                        </Jump>
                    </div>
                    <div className="carousel-item carousel-item-home">
                        <img className="d-block w-100 " src={banner6} alt="Second slide"
                             height={document.documentElement.clientHeight } style={{filter: 'brightness(50%)'}}/>
                    </div>
                    <div className="carousel-item carousel-item-home ">

                        <img className="d-block w-100 " src={banner1} alt="Third slide" style={{filter: 'brightness(50%)'}}
                             height={document.documentElement.clientHeight }/>
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
