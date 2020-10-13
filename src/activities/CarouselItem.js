import React, {useEffect, useState} from "react";
import {css, jsx} from "@emotion/core";
import zhd from "../pictures/zhd.jpg";
import {Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";

/** @jsx jsx */
const CarouselItem = ({title,picture,text,classAct}) => {
    const modalStyle = css`
      & img{
        width: 100%;
        height: 50%;
        border-radius: 10px;
      }
      & .modal-text{
        margin-top: 15px;
      }
      & .modal-text::first-letter {
          color: #538d22 ;
          float: left;
          font-size: 5em;
          margin: 0 .2em 0 0;
          
}
  `;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <div className={classAct}>
            <img className="d-block w-100" src={picture} alt="First slide" style={{filter: 'brightness(50%)'}}/>
            <div className="carousel-caption  d-md-block">
                <h3 onClick={handleShow} style={{ cursor: 'pointer' }}>{title}</h3>
                <p>{text.split(' ').slice(0,19).join(' ')}
                    ...</p>
            </div>
            <Modal show={show} onHide={handleClose} size="lg" css={modalStyle}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={picture} alt="" height={'500'}/>
                    <div className="modal-text">
                        <div>{text}</div>


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
export default CarouselItem;
