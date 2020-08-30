import React from "react";
import logo from "./pictures/logo.png";
import {css} from "@emotion/core";

const Footer = ({sponsors}) => {
    return (
        <footer>
            <div className="footer-top m-2">
                <div className="container ">
                    <div className="row ">
                        <div className="col-md-4 col-lg-4 footer-about wow fadeInUp animated ">

                            <img className="logo-footer " src={logo} alt="logo-footer"
                                 data-at2x="assets/img/logo.png" width={'140'} height={"80"}/>
                            <h3>
                                IEEE PES SB
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda aut
                                excepturi pariatur. Aut dolore eveniet, excepturi exercita voluptates.
                            </p>

                        </div>
                        <div className="col-md-4 col-lg-4 offset-lg-1 footer-contact wow fadeInDown animated"
                        >
                            <h3>Contact</h3>
                            <p><i className="fas fa-map-marker-alt"></i> 676 INSAT Centre Urbain Nord BP، Tunis Cedex
                                1080</p>
                            <p><i className="fas fa-phone"></i> Phone: +216 5579319</p>
                            <p><i className="fas fa-envelope"></i> Email: <a css={css`text-decoration: none; `}
                                                                             href="mailto:hello@domain.com">pes@pes.com</a>
                            </p>
                            <p><i className="fab fa-skype"></i> Skype: pes</p>
                        </div>
                        <div className="col-md-4 col-lg-3 footer-social wow fadeInUp animated"
                        >
                            <h3>Follow us</h3>
                            <p>
                                <a href="#"><i className="fab fa-facebook"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-google-plus-g"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-pinterest"></i></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="justify-content-center text-center sponsors">
                <div>Our sponsors</div>

                {
                    sponsors.map((sponsor) => (
                        <img src={sponsor} alt="sponsor" height={'50'} width={'80'}/>
                    ))
                }
            </div>

        </footer>
    )
};
export default Footer;
