import React from 'react';
import { Link } from "react-scroll";

import './socialMedia.css';


const SocialMedia = () =>{
    return(
        <>
        <div className="menu">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="menu-item menu-item-1">
            <div className="menu-item-icon"><i className="fab fa-fw fa-github" aria-hidden="true"></i></div>
            <div className="menu-item-expanded">GitHub</div>
        </a>
        <a href="https://www.linkedin.com/in/yeshambel/" target="_blank" rel="noopener noreferrer" className="menu-item menu-item-2">
            <div className="menu-item-icon"><i className="fab fa-fw fa-linkedin" aria-hidden="true"></i></div>
            <div className="menu-item-expanded">Linkedin</div>
        </a>
        <Link to="contact" className="menu-item menu-item-3">
            <div className="menu-item-icon"><i className="fas fa-user" aria-hidden="true"></i></div>
            <div className="menu-item-expanded">Contact</div>
        </Link>
        </div>
        </>
    )
}
export default SocialMedia