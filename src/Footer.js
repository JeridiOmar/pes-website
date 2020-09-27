import React from "react";
import logo from "./pictures/logo-white.png";

import {css,jsx} from "@emotion/core";

/** @jsx jsx */
const Footer = () => {
    return (
        <footer>
            <div className="footer-top ">
                <div className="container ">
                    <div className="row ">
                        <div className="col-md-6 col-sm-12  footer-left ">
                            <img className="logo-footer " src={logo} alt="logo-footer"
                                 data-at2x="assets/img/logo.png" width={'140'} height={"80"} css={css`object-fit: contain;margin-left: -15px;`}/>
                            <h3>
                                IEEE PES SB
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda aut
                                excepturi pariatur. Aut dolore eveniet, excepturi exercita voluptates.
                            </p>


                        </div>
                        <div className="col-md-6 col-sm-12 footer-right ">
                            {/*<h3>Contact</h3>*/}
                            <p><i className="fas fa-map-marker-alt"></i> 676 INSAT Centre Urbain Nord BP، Tunis Cedex
                                1080</p>
                            <p><i className="fas fa-phone"></i> Phone: +216 5579319</p>
                            <p><i className="fas fa-envelope"></i> Email: <a css={css`text-decoration: none; `}
                                                                             href="mailto:hello@domain.com">pes@pes.com</a>
                            </p>
                            <div >
                                <a href="#"><i className="fab fa-facebook"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-google-plus-g"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-pinterest"></i></a>
                            </div>

                        </div>

                    </div>
                </div>
            </div>


        </footer>
    )
};
export default Footer;
