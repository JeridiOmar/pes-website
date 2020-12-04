import React, {useState} from "react";
import facebook from './pictures/facebook.png'
import linkedin from './pictures/linkedin.png'
import whatsapp from './pictures/whatsapp.png'

import {css, jsx} from "@emotion/core";
import omar from "./pictures/omar.jpg";
import {Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";

/** @jsx jsx */
const TeamMember = ({memberPic, memberName, memberPoste, animation,text,fb,li}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        e.preventDefault();
        setShow(true);
    };
    const modalStyle =css`
      & .modal-icons{
          font-size: 24px;
          //border: 1px solid #eaeaea;
          //box-shadow: 0 2px 12px rgba(0,0,0,.08);
      }
      & .modal-icons i{
        padding-left: 5px;
      }
    `;
    const titleStyle = css`
    //text-decoration:  underline overline;
    font-weight: bold;
    padding: 5px;
    position: relative;
    &::before {
    content: '';
    position: absolute;
    display: block;
    width: 160px;
    height: 1px;
    background: #ddd;
    top: 97%;
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
    top: 97%;
    left: calc(50% - 20px);
}


     `;
    return (
        <div data-aos={animation} data-aos-duration="1000" className="col-md-4 pl-2 col-sm-12  p-2 team-member "
             css={css` &> a{ font-size: 30px!important; } 
          &> a:hover{ text-decoration: none ;}  `}>
            <img onClick={handleShow} src={memberPic} alt=""
                 className="rounded-circle m-sm-4 team-img img-thumbnail team-image" width="300"
                 height="300"/>
            <a className="fa fa-facebook-square team-link1" href={fb} target="_blank"
               css={css` font-size: 30px!important;`}></a>
            <a className="fa fa-linkedin-square team-link2" href={li} target="_blank"
               css={css` font-size: 30px!important;`}></a>

            <a className="fas fa-info-circle team-link3" onClick={handleShow} href="#"
               css={css` font-size: 30px!important;`}></a>
            <h4>{memberName}</h4>
            <h5>{memberPoste}</h5>
            <Modal show={show} onHide={handleClose} css={modalStyle}>
                <Modal.Header closeButton>
                    <Modal.Title>{memberName}</Modal.Title>
                </Modal.Header>
                <Modal.Body className={"text-center"}>
                    <img src={memberPic} alt="" className="rounded-circle m-sm-4 team-img img-thumbnail team-image "
                         width="300"
                         height="300"/>

                    <h1 className="text-center   " css={titleStyle}>{memberPoste} </h1>
                    <div className="modal-text">
                        <div>{text} </div>

                        {/*<div className="modal-icons text-left">*/}
                        {/*    <i className="fab fa-facebook"></i>*/}
                        {/*    <i className="fab fa-linkedin "></i>*/}
                        {/*    <i className="fas fa-phone"></i>25579319*/}
                        {/*</div>*/}
                    </div>
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
export default TeamMember;
