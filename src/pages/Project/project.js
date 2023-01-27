import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-scroll";


import './project.css';


//Angular images
import image1 from '../../images/angular/1.png';
import image2 from '../../images/angular/2.png';
import image3 from '../../images/angular/3.png';
import image4 from '../../images/angular/4.png';
import image5 from '../../images/angular/5.png';

//Hotel images

import image6 from '../../images/hotel/1.png';
import image7 from '../../images/hotel/2.png';
import image8 from '../../images/hotel/3.png';
import image9 from '../../images/hotel/4.png';
import image21 from '../../images/hotel/5.png';

//project images
import image10 from '../../images/project/1.png';
import image11 from '../../images/project/2.png';
import image12 from '../../images/project/3.png';

//SHA images
import image13 from '../../images/SHA/1.png';
import image14 from '../../images/SHA/2.png';
import image15 from '../../images/SHA/3.png';

class Project extends Component{
    render(){
        return(
            <>
            <div id="project">  
           <section  className="project" >
                <div className="container mb-5" >
                    <div className="row"> 
                        <div className="col-md-12">
                        <div className=" text-center mt-5">
                            <div className="title-box-2">
                                <h5 className="title-left">                                           My Work
                                     </h5>
                                    </div>
                                </div>
             <div className="row">
                <div className="col-lg-4 container-fluid">
                    <div style={{margin: "10 auto"}}>  
          <Carousel 
                autoPlay={true} 
                infiniteLoop={true}
                showThumbs={false} 
                showArrows={false} 
                showStatus={false}
                showIndicators={false}
                axis="vertical"
                >
               <div>
                    <img src={image13} className="img-fluid " alt=""/>
                    <p className="legend">
                    <a href="https://joinus.socialhackersacademy.org/login" target="_blank" rel="noopener noreferrer" className="btn btn-primary "  role="button">View My Work</a></p>  
                </div>
                <div>
                    <img src={image14} className="img-fluid" alt=""/>
                    <p className="legend" >
                    <a href="https://joinus.socialhackersacademy.org/forgot-password" target="_blank" rel="noopener noreferrer" className="btn btn-primary " role="button">View My Work</a></p>
                    
                </div>
                <div>
                    <img src={image15} className="img-fluid" alt=""/>
                    <p className="legend"><a href="https://joinus.socialhackersacademy.org/login" target="_blank" rel="noopener noreferrer" className="btn btn-primary " role="button">View My Work</a></p>    
                </div>
                </Carousel>                                                 
                  </div>
             </div>
                               
             <div className="col-lg-4 container-fluid" style={{marginLeft: "0"}}>        <div className="about-img" style={{textAlign: "center"}}>
            <Carousel 
                autoPlay={true} 
                infiniteLoop={true}
                showThumbs={false} 
                showArrows={false} 
                showStatus={false}
                showIndicators={false}
                >
                <div>
                 
                    <img src={image1}  alt="" className="imageScale"/>
                    <p className="legend"><a href="https://github.com/yeshambel/WFE-1-Final-project-skeleton" target="_blank" rel="noopener noreferrer" className="btn btn-primary"  role="button">View My Work</a></p>
                    
                </div>
                <div>
                   <img src={image2}  alt="" className="imageScale"/>
                    <p className="legend" ><a href="https://github.com/yeshambel/WFE-1-Final-project-skeleton" target="_blank" rel="noopener noreferrer"  className="btn btn-primary btn px-4"  role="button">View My Work</a></p>
                    
                </div>
                <div>
                    <img src={image3}  alt="" className="imageScale"/>
                    <p className="legend"><a href="https://github.com/yeshambel/WFE-1-Final-project-skeleton" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn px-4"  role="button">View My Work</a></p>
                    
                </div>
                <div>
                    <img src={image4}  alt="" className="imageScale"/>
                    <p className="legend"><a href="https://github.com/yeshambel/WFE-1-Final-project-skeleton" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn px-4"  role="button">View My Work</a></p>
               
                </div>
                <div>
                   <img src={image5}  alt="" className="imageScale"/>
                    <p className="legend"><a href="https://github.com/yeshambel/WFE-1-Final-project-skeleton" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn px-4" role="button">View My Work</a></p>
                   
                </div>          
                </Carousel>                                                 
             </div>
         </div>
        <div className="col-lg-4 container-fluid">                                 
         <div className="about-img" style={{textAlign: "center"}}>
             <Carousel 
                autoPlay={true} 
                infiniteLoop={true}
                showThumbs={false} 
                showArrows={false} 
                showStatus={false}
                showIndicators={false}
                axis="vertical"
                >
                <div>
                    <img src={image6} alt=""/>
                    <p className="legend"><a href="https://yeshambel.github.io/index.html" target="_blank" rel="noopener noreferrer"  className="btn btn-primary btn px-4" role="button">View My Work</a></p> 
                </div>
                <div>
                   <img src={image7} className="img-fluid" alt=""/>
                    <p className="legend" ><a href="https://yeshambel.github.io/menu.html" target="_blank" rel="noopener noreferrer"  className="btn btn-primary btn px-4" to="work" role="button">View My Work</a></p>
                </div>
                <div>
                    <img src={image8} className="img-fluid" alt=""/>
                    <p className="legend"><a href="https://yeshambel.github.io/gallery.html" target="_blank" rel="noopener noreferrer"  className="btn btn-primary btn px-4" role="button">View My Work</a></p>  
                </div>
                <div>
                    <img src={image9} className="img-fluid" alt=""/>
                    <p className="legend"><a href="https://yeshambel.github.io/reserve.html" target="_blank" rel="noopener noreferrer"  className="btn btn-primary btn px-4"  role="button">View My Work</a></p>
                </div>
                <div>
                    <img src={image21} className="img-fluid" alt=""/>
                    <p className="legend"><a href="https://yeshambel.github.io/contact.html" target="_blank" rel="noopener noreferrer"  className="btn btn-primary btn px-4"  role="button">View My Work</a></p>
                 </div>
                </Carousel>
             </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4"></div>
            <div className="col-lg-4 container-fluid mb-5 mt-5">     
                <div style={{margin: "10 auto"}}>           
            <Carousel 
                autoPlay={true} 
                infiniteLoop={true}
                showThumbs={false} 
                showArrows={false} 
                showStatus={false}
                showIndicators={false}
                axis="vertical"
                >
                <div>
                    <img src={image10} className="img-fluid" alt=""/>
                    <p className="legend"><Link className="btn btn-primary btn px-4" to=" " role="button">View My Work</Link></p> 
                </div>
                <div>
                    <img src={image11} className="img-fluid" alt=""/>
                    <p className="legend" ><Link className="btn btn-primary " to="work" role="button">View My Work</Link></p>   
                </div>
                <div>
                    <img src={image12} className="img-fluid" alt=""/>
                    <p className="legend"><Link className="btn btn-primary" to=" " role="button">View My Work</Link></p>  
                </div>
                </Carousel>
             </div>
            </div>
             <div className="col-md-4">
              </div>
             </div>
           </div>
       </div>  
     </div> 
    </section>
   </div>
  </>
  )
  }
 }
export default Project