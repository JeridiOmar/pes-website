import React, {useEffect, useState} from "react";
import {css, jsx} from "@emotion/core";
import zhd from "../pictures/zhd.jpg";
import {Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";

/** @jsx jsx */
const SmallArticle = ({title, picture, text,date}) => {
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
    const months = [ "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December" ];
    useEffect(() => {
            const dateString=date.month+"/"+date.day+"/"+date.year;
            const writed = new Date(dateString);
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
        <div data-aos="fade-right" className="row">

            <div className="col-12 col-md-6">
                <img
                    src={picture}
                    alt="pic" className={'right-article-img w-100'}
                    style={{'marginTop': '14px', cursor: 'pointer',height:'172px','object-fit':'cover'}} onClick={handleShow} />
            </div>
            <div className="col-12 col-md-6">
                <h5 className="title" onClick={handleShow} style={{ cursor: 'pointer','marginTop': '15px' }}>{title}</h5>
                <p className="card-meta">

                    <img alt=""
                         src="https://secure.gravatar.com/avatar/ee009ffd2d2d1827217bf8c3a968fd16?s=20&amp;d=mm&amp;r=g"
                         srcSet="https://secure.gravatar.com/avatar/ee009ffd2d2d1827217bf8c3a968fd16?s=40&amp;d=mm&amp;r=g 2x"
                         className="  rounded-circle"
                         height="20"
                         width="20"/> <span className="author"><a
                    href="#"
                    title="Posts by Lora"
                    rel="author">Kmar</a></span>
                    <span className="date">{months[parseInt(date.month)]+" "+date.day+", "+date.year}</span>
                    <span className="min-read"><span
                        className="span-reading-time rt-reading-time"><span
                        className="rt-label"></span> <span
                        className="rt-time"> {time}</span> <span
                        className="rt-label rt-postfix"></span></span>days</span>

                </p>

            </div>
            <Modal show={show} onHide={handleClose} size="lg" css={modalStyle}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={picture} alt="" height={'500'}/>
                    <div className="modal-text">
                        {text.map(({text})=><div><p>{text}</p></div>)}
                        {/*<div>{text}</div>*/}


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
export default SmallArticle;
