import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import ToggleButton from "../ToggleButton/toggleButton";
import logo from "../../images/logo3.jpg";
import "./navBar.css";

const NavBar = (props) => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <header className="toolbar">
        <nav className="toolbar__navigation">
          <div className="toolbar__toggle-button">
            <ToggleButton
              click={props.drawerClickHandler}
              buttonClass={props.buttonClass}
            />
          </div>
          <div className="toolbar__logo">
            <Link to="home">
              <img
                src={logo}
                alt=" profile logo"
                className="logo-rotation"
                style={{ width: "40px", height: "40px", borderRadius: "15rem" }}
              />
            </Link>
          </div>
          <div className="spacer" />
          <div className="toolbar_navigation-items">
            <ul>
              <li>
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <span>
                    {" "}
                    <i className="fas fa-home"></i>
                  </span>
                  HOME
                </Link>
              </li>

              <li>
                <Link
                  activeClass="active"
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <span>
                    <i className="fas fa-cog"></i>
                  </span>
                  MY WORK
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <span>
                    <i className="fas fa-toolbox"></i>
                  </span>
                  PORTFOLIO
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <span>
                    <i className="fas fa-user"></i>
                  </span>
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
