import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Typewriter from 'typewriter-effect';
import { Link } from "react-scroll";
import SocialMedia from '../SocialMedia/socialMedia';

import './home.css';

import image2 from '../../images/R.png';

class Home extends Component {  
   render() {
       const typewriter ={
        fontSize: "150px"
    }
        return (
        <div className="container-fliud" id="home">
        <div className="row" style={{backgroundImage:`url(${image2})`, typewriter, height:"100vh"}}>
         <div className="col-12">
             <h2 style={{color:"white", fontSize:"60px",textAlign:'center', 
            }}><span style={{color: "transparent",
    background: "linear-Gradient(90deg,orange,#ff0,green,#0ff,#00f,violet)",
    webkitBackgroundClip: "text"}}>Hi I'M </span> <br /><span style={{background: "radial-gradient(ellipse at left top,#3f5efb 0,#fc466b 100%)",webkitBackgroundClip: "text", 
    color: "transparent"}}>Yeshambel <br /> </span></h2>
        <div style={{fontSize:"50px", textAlign:"center", color: "white"}}>
           <Typewriter 
                options={{
                  strings: ['Front End Developer','Back End Developer','Fullstack Developer'],
                  autoStart: true,
                  loop: true,
                }} 
              />
            </div>
            <div className= "row">
            <div className="col-12 col-lg-4"></div>
            <div className="col-12 col-lg-4">
            <Carousel 
                autoPlay={true} 
                infiniteLoop={true}
                showThumbs={false} 
                showArrows={false} 
                showStatus={false}
                showIndicators={false}
                >
                <div>
                 
                    <p className="legend"><Link className="btn btn-primary btn px-4" to="contact" role="button">Contact Me</Link></p>
                    
                </div>
                <div>
                    <p className="legend"><Link className="btn btn-primary btn px-4" to="project" role="button">View My Work</Link></p>
                    
                </div>
                <div>
                    
                    <p className="legend"><Link className="btn btn-primary btn px-4" to="portfolio" role="button">View My Portfolio</Link></p>
                    
                </div>
                </Carousel>
            </div>
            <div className="col-12 col-lg-4"></div>
            </div>
            
            </div>

         </div>
           <SocialMedia />
        </div>
     
      );
   }
}


export default Home