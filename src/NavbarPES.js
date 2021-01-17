import React, {useEffect, useState} from "react";
import {css, jsx} from "@emotion/core";
import logoPes from './pictures/logo.webp'
import logoWhite from './pictures/logo-white.webp'
import {Link} from "@reach/router"
import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";


/** @jsx jsx */
const NavbarPES = () => {
    const [navState, setNavState] = useState('notScrolled');
    const [toglleState, setToglleState] = useState('notToggledClick');
    const [clickCounter, setClickCounter] = useState(0);
    const toggleClick = () => {
        if (screen.width < 992) {
            setClickCounter(clickCounter + 1);
        }

    };
    useEffect(() => {
        if (clickCounter % 2 === 1 && navState === "notScrolled") {
            setToglleState("toggledClick");

        } else if (clickCounter % 2 === 0) {
            setToglleState("notToggledClick");
        }
    }, [clickCounter]);
    const [logo, setlogo] = useState(logoWhite);
    const menuIcon = css`margin-right: 4px`;
    const navStyle = css`
        &.scrolled {
        background-color: #2e911f !important;
        transition: background-color 200ms linear;
}
         `;
    //managing change color when scrolled
    useEffect(() => {

        const listener = document.addEventListener('scroll', e => {
            const carouselLength = document.documentElement.clientHeight;
            let scrolled = document.scrollingElement.scrollTop;
            if (scrolled < 150) {
                setNavState("notScrolled");
                setlogo(logoWhite);
            } else {
                setNavState("scrolled");
                setlogo(logoPes);
            }


        });
    }, []);

    return (
        // <nav className={`navbar navbar-expand-lg navbar-light fixed-top pes-nav  ${navState}`}  >
        //     <div className="container">
        //         <a className="navbar-brand" href="#"><img className={'p-0'} src={logo} alt="logo" width={'120'} height={'60'}  css={css`object-fit: cover;`}/></a>
        //         <button className="navbar-toggler" type="button" data-toggle="collapse"
        //                 data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        //                 aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //
        //         <div className="collapse navbar-collapse " id="navbarSupportedContent">
        //             <ul className="navbar-nav ml-auto  " css={css`
        //                   & a{
        //                   font-size: 13px !important;
        //                   text-transform: uppercase;
        //                   color:black !important;
        //                   }
        //                   `}>
        //                 <li className="nav-item active ">
        //                     <Link className="nav-link pr-1" to={"/"}><i className="fas fa-home" css={menuIcon}></i>Home</Link>
        //                 </li>
        //                 <li className="nav-item ">
        //                     <Link className="nav-link pr-1" to={'/about'}><i className="far fa-address-card" css={menuIcon}></i>About us</Link>
        //                 </li>
        //                 <li className="nav-item ">
        //                     <Link className="nav-link pr-1" to={'/activities'}><i className="far fa-newspaper"css={menuIcon}></i>Activities</Link>
        //                 </li>
        //                 <li className="nav-item ">
        //                     <Link className="nav-link pr-1" to={'/awards'}><i className="fas fa-award"css={menuIcon}></i>Awards</Link>
        //                 </li>
        //                 <li className="nav-item ">
        //                     <Link className="nav-link pr-1 comm-link" to={'/community/memberofthemonth'}><i className=" fas fa-user-friends"css={menuIcon}></i>Our community</Link>
        //                 </li>
        //
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
        <Navbar collapseOnSelect={true} expand="lg" fixed="top" className={` pes-nav  ${navState}  ${toglleState}`}>
            <Container>
                <Navbar.Brand href="#home"><Link  to={"/"}><img className={'p-0'} src={logo} alt="logo" width={'120'} height={'60'}
                                                                css={css`object-fit: cover;`}/></Link></Navbar.Brand>
                <Navbar.Toggle onClick={toggleClick} aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto" css={css`
                          & a{
                          font-size: 13px !important;
                          text-transform: uppercase;
                          color:black !important;
                          }
                          `}>
                        <Nav.Link onClick={toggleClick} eventKey="1"><Link className="nav-link pr-1" to={"/"}><i
                            className="fas fa-home"
                            css={menuIcon}></i>Home</Link></Nav.Link>
                        <Nav.Link onClick={toggleClick} eventKey="2"> <Link className="nav-link pr-1" to={'/about'}><i
                            className="far fa-address-card"
                            css={menuIcon}></i>About
                            us</Link></Nav.Link>
                        <Nav.Link onClick={toggleClick} eventKey="3"> <Link className="nav-link pr-1"
                                                                            to={'/activities'}><i
                            className="far fa-newspaper"
                            css={menuIcon}></i>Activities</Link></Nav.Link>
                        {/*<Nav.Link  eventKey="4"><Link className="nav-link pr-1" to={'/awards'}><i className="fas fa-award"*/}
                        {/*                                                            css={menuIcon}></i>Awards</Link></Nav.Link>*/}
                        <Nav.Link onClick={toggleClick} eventKey="5"><Link className="nav-link pr-1 comm-link"
                                                                           to={'/community/gallery'}><i
                            className=" fas fa-user-friends" css={menuIcon}></i>Our community</Link></Nav.Link>

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};
export default NavbarPES
