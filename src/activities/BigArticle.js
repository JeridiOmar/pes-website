import React, {useEffect, useState} from "react";
import {css, jsx} from "@emotion/core";
import zhd from "../pictures/zhd.jpg";
import {Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";

/** @jsx jsx */
const BigArticle = ({title, picture, text}) => {
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
    return (
        <div data-aos="fade-right" className="card p-lg-3">

            <img width="768px" height="517px"
                 src={picture} onClick={handleShow} style={{ cursor: 'pointer' }}
                 className="card-img-top card-bigger-img " alt=""
                />
            <div className="card-body">
                <h5 className="card-title" onClick={handleShow} style={{ cursor: 'pointer' }}>{title}</h5>
                <p className="card-text card-text1">{text.split(' ').slice(0,23).join(' ')}
                    ...</p>
                <p className="card-meta">

                    <img alt=""
                         src="https://secure.gravatar.com/avatar/ee009ffd2d2d1827217bf8c3a968fd16?s=20&amp;d=mm&amp;r=g"
                         srcSet="https://secure.gravatar.com/avatar/ee009ffd2d2d1827217bf8c3a968fd16?s=40&amp;d=mm&amp;r=g 2x"
                         className="useravatar avatar-20 photo rounded-circle"
                         height="20"
                         width="20"/> <span className="author"><a
                    href="https://litmotion.net/demo/neori/author/admin/"
                    title="Posts by Lora"
                    rel="author">Kmar</a></span>
                    <span className="date">October 24, 2020</span>
                    <span className="min-read"><span
                        className="span-reading-time rt-reading-time"><span
                        className="rt-label"></span> <span
                        className="rt-time"> 3</span> <span
                        className="rt-label rt-postfix"></span></span>min</span>

                </p>


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
export default BigArticle;
