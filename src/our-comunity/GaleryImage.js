import React, {useEffect, useState} from "react";
import {css, jsx} from "@emotion/core";

import {Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import LazyLoad from 'react-lazy-load';
import ImageLoader from "./ImageLoader";

/** @jsx jsx */
const GaleryImage = ({title, picture}) => {
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
        <div className="card">
            {/*<LazyLoad><img className="card-img" src={picture} alt="Card image cap" height={300} width={300}/></LazyLoad>*/}
            <LazyLoad debounce={true}

                      throttle={250}
                      offsetHorizontal={3000}
                      offsetVertical={500}><ImageLoader src={picture}/></LazyLoad>
            <div onClick={handleShow} style={{ cursor: 'pointer' }}><i className="fas fa-eye"></i></div>
            <Modal show={show} onHide={handleClose} size="lg" css={modalStyle}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={picture} alt="" height={'500'}/>

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
export default GaleryImage;
