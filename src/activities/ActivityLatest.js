import React, {useEffect, useState} from "react";
import {css, jsx} from "@emotion/core";

import {Modal} from 'react-bootstrap';
import Button from "react-bootstrap/Button";

/** @jsx jsx */
const ActivityLatest = ({title, description, picture}) => {
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
    const [time, setTime] = useState(0);
    useEffect(() => {
            const writed = new Date("10/23/2020");
            const today = new Date();
            var timeD = today.getTime() - writed.getTime();
            // console.log(today);
            // console.log(writed);
            timeD=timeD/( (1000 * 3600 * 24));
            // console.log(time);
            setTime(Math.round(timeD));
        }
        , []);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div data-aos="zoom-in" data-aos-duration="1500" className="col-md-6  col-sm-12 card-wrapper  "
             css={css`padding-bottom: 1px!important;;`}>
            <div className="card p-lg-3" css={css` `}>
                <img className="card-img-top" style={{"height":" 250px",
                    "object-fit": "cover"}} src={picture} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text card-text1">{description.substring(0,125)}
                        ...</p>
                    <p className="card-meta">

                        <img alt=""
                             src="https://secure.gravatar.com/avatar/ee009ffd2d2d1827217bf8c3a968fd16?s=20&amp;d=mm&amp;r=g"
                             srcSet="https://secure.gravatar.com/avatar/ee009ffd2d2d1827217bf8c3a968fd16?s=40&amp;d=mm&amp;r=g 2x"
                             className="useravatar avatar-20 photo rounded-circle" height="20" width="20"/> <span
                        className="author"><a
                        href="#" title="Posts by Lora"
                        rel="author">Kmar</a></span>
                        <span className="date">October 24, 2020</span>
                        <span className="min-read"><span className="span-reading-time rt-reading-time"><span
                            className="rt-label"></span> <span className="rt-time"> {time}</span> <span
                            className="rt-label rt-postfix"></span></span>days</span>

                    </p>
                    <button className="btn btn-primary" onClick={handleShow}>Read more</button>

                </div>
            </div>
            <Modal show={show} onHide={handleClose} size="lg" css={modalStyle}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={picture} alt="" height={'500'}/>
                    <div className="modal-text">
                        <div>{description}
                        </div>

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
export default ActivityLatest;