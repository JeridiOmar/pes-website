import React, {useEffect, useState} from "react";
import {css, jsx} from "@emotion/core";

import {Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Jump from "react-reveal/Jump";
import banner from "../pictures/awards/awards-banner.webp";
import omar from "../pictures/omar.jpg";
import Carousel from "react-multi-carousel";
import awarding from '../pictures/awards/award.jpg'

import About from "../About";
import '../styles/bootstrap.min.css'
/** @jsx jsx */
const Awards = () => {
    const bannerStyle = css`
    &{
       background-image: url(${banner});
        height: 100vh;
        background-attachment: fixed;
        background-size:cover;
        background-position: center center;
        display: flex;
        align-items: center;
        justify-content: space-around; 
        //clip-path: polygon(0 0, 100% 0, 100% 88%, 57% 100%, 0 86%);
  }
  @media(max-width: 750px){
    &{
        //clip-path: polygon(0 0, 100% 0, 100% 50%, 100% 93%, 55% 100%, 0 92%) !important;
    }
  }
   
      
  `;
    const headerStyle = css`
     & h1{ 
     font-size: 100px;
    font-family: railway sans-serif;
    margin: 10px 0;
    /*background:linear-gradient(94deg, rgba(83,141,34,1) 0%, rgba(94,142,86,0.0984768907563025) 88%, rgba(214,214,214,1) 99%);*/
    /*-webkit-background-clip: text;*/
    /*-webkit-text-fill-color: transparent;*/
   color: #f2e8cf;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    word-spacing: 2px;
    }
    @media(max-width: 750px){
       & h1{ 
        font-size: 60px;
        
    }
  `;
    const galeryStyle = css`
       & {
        margin-top:30px;
        transition: all ease 0.3s;
       }
      & .card {
      //width: 18rem;
      border-radius :10px;
      position: relative;
      margin-right: 15px;
      margin-left: 15px;
      margin-bottom: 15px;
      }
      & .card-img{
        border-radius: 10px;
      }
      & .card:hover i{
        visibility: visible;
      }
      & .card i{
      visibility: hidden;
      position: absolute;
    left: calc(50% - 25px);
    top: calc(50% - 25px);
    /* left: 50%; */
    /* bottom: 50%; */
    display: inline-block;
    line-height: 50px;
    text-align: center;
    width: 50px;
    height: 50px;
    background: #fff;
    border-radius: 50%;
    transition: all ease 0.3s;
    font-size: 30px;
    color: #1b1e21 !important;
      }
      & .card {
        transition: all ease 0.3s;
      }
      & .card:hover {
        
        transform-style: preserve-3d;
        transform: scale(1.02);
        filter:blur(0.5px);
        
      }
      & .card i:hover{
        background-color: #538d22;
      }
      & h2{
        display: inline-block;
        margin: 0 0 25px 25px;
        color: #272727;
        font-family: 'Heebo', 'Arial';
        font-size: 40px;
        font-weight: 700;
        letter-spacing: -1.66px;
        text-transform: capitalize;
        transition: 0.2s;
    }
    & .gallery-title{
      margin-top: 30px;
      margin-bottom: 15px;
    }
    & img{
      pointer-events: none;
      object-fit: cover;
    }
  `;
    const backstyle = css`
& {
    background: url("https://www.enelx.com/content/dam/enel-x-na/for-business/products/solar-plus-storage.jpg.resize.1440.700.center.center.jpeg") center top no-repeat fixed;
    background-size: cover;
    padding: 60px 0 60px 0;
    position: relative;
}

&::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.88);
    z-index: 9;
}
& .container {
    position: relative;
    z-index: 10;
}
`;
    const modalStyle= css`
  & img {
  border-radius: 10px;
  
  }
  & .modal-text{
    margin-top: 10px;
  }
`;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        e.preventDefault();
        setShow(true);
    };
    return (
        <div>
            <div css={bannerStyle} className={'comm-banner'}>
                <Jump forever duration={1500}>
                    <div css={headerStyle}>
                        <h1 style={{textAlign: "center"}}>Awards</h1>
                    </div>
                </Jump>
            </div>
            <div className="container">
                <div className="row text-center">
                    <About title1={'Our'} title2={'Awards'}
                           text={' Our PES chapter has endured an enchanting journey since its establishment, encountering many bumpy roads and emotional rides on the way, but through our teamwork that we are so proud of, our persevering bared fruit And our chapter won many awards that we are well-deserved'}/>
                </div>
            </div>
            <div css={backstyle}>
                <div className="container">
                    <div className="row text-center" css={galeryStyle}>

                        <div className="col-12 col-md-4">

                            <div data-aos="flip-left " className="card ">
                                <img className="card-img" src={awarding} alt="Card image cap" height={300} width={300}/>
                                <a onClick={handleShow} href="#"><i className="fas fa-eye"></i></a>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">

                            <div data-aos="flip-left " className="card ">
                                <img className="card-img" src={awarding} alt="Card image cap" height={300} width={300}/>
                                <a onClick={handleShow} href="#"><i className="fas fa-eye"></i></a>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">

                            <div data-aos="flip-left" className="card ">
                                <img className="card-img" src={awarding} alt="Card image cap" height={300} width={300}/>
                                <a onClick={handleShow} href="#"><i className="fas fa-eye"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="row text-center" css={galeryStyle}>

                        <div className="col-12 col-md-4">

                            <div className="card ">
                                <img className="card-img" src={awarding} alt="Card image cap" height={300} width={300}/>
                                <a onClick={handleShow} href="#"><i className="fas fa-eye"></i></a>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 ">

                            <div className="card ">
                                <img className="card-img" src={awarding} alt="Card image cap" height={300} width={300}/>
                                <a onClick={handleShow} href="#"><i className="fas fa-eye"></i></a>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">

                            <div className="card ">
                                <img className="card-img " src={awarding} alt="Card image cap" height={300}
                                     width={300}/>
                                <a onClick={handleShow} href="#"><i className="fas fa-eye"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="row text-center" css={galeryStyle}>

                        <div className="col-12 col-md-4">

                            <div className="card ">
                                <img className="card-img" src={awarding} alt="Card image cap" height={300} width={300}/>
                                <a onClick={handleShow} href="#"><i className="fas fa-eye"></i></a>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">

                            <div className="card ">
                                <img className="card-img" src={awarding} alt="Card image cap" height={300} width={300}/>
                                <a onClick={handleShow} href="#"><i className="fas fa-eye"></i></a>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">

                            <div className="card ">
                                <img className="card-img" src={awarding} alt="Card image cap" height={300} width={300}/>
                                <a onClick={handleShow} href="#"><i className="fas fa-eye"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Award</Modal.Title>
                </Modal.Header>
                <Modal.Body className={"text-center"} css ={modalStyle}>
                    <img className={'w-100'} src={awarding} alt=""/>
                    <div className="modal-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius excepturi facilis fugiat hic nihil
                    officia perferendis quaerat quo sint temporibus! Adipisci animi asperiores deserunt dolor et illum
                    impedit minima vero.</div>
                </Modal.Body>
                <Modal.Footer>

                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
};
export default Awards;
