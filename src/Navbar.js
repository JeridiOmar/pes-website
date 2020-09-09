import React, {useEffect, useState} from "react";
import {css, jsx} from "@emotion/core";
import logo from './pictures/logo.png'
import {Link} from "@reach/router"
/** @jsx jsx */
const Navbar = () => {
    const [navState, setNavState] = useState('notScrolled');
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
            if(scrolled < 150){
                setNavState("notScrolled");
            }else{
                setNavState("scrolled");
            }

            console.log(scrolled);
            console.log()
        });
    },[]);

    return (
        <nav className={`navbar navbar-expand-lg navbar-light fixed-top  ${navState}`}  >
            <div className="container">
                <a className="navbar-brand" href="#"><img className={'p-0'} src={logo} alt="logo" width={'120'} height={'60'}  css={css`object-fit: fill;`}/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto  " css={css`
                          & a{
                          font-size: 13px !important;
                          text-transform: uppercase;
                          color:black !important;
                          }
                          `}>
                        <li className="nav-item active ">
                            <Link className="nav-link pr-1" to={"/"}>Home</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link pr-1" to={'/about'}>About us</Link>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link pr-1" href="#">Activities</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link pr-1" href="#">Awards</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link pr-1" href="#">Our community</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
};
export default Navbar
