import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import "./sideBarDrawer.css";

const SideBarDrawer = (props) => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <nav className={drawerClasses}>
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
            {" "}
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
            {" "}
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
            {" "}
            <span>
              <i className="fas fa-user"></i>
            </span>
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideBarDrawer;
