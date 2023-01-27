import React, { Component, Fragment } from "react";
import SocialMedia from "../SocialMedia/socialMedia";

import "./portfolio.css";
import image2 from "../../images/2.jpg";

//caruasal
import image3 from "../../images/sha.png";
import image4 from "../../images/cisco.jpg";
import image5 from "../../images/m.png";
import image6 from "../../images/l.jpg";

class Portfolio extends Component {
  state = {
    coding: [
      {
        id: "HTML5_skill",
        icon: "fab fa-html5",
        language: "HTML5",
        porcentage: "85%",
        value: "85",
      },
      {
        id: "CSS3_skill",
        icon: "fab fa-css3",
        language: "CSS3",
        porcentage: "80%",
        value: "80",
      },
      {
        id: "JavaScript_skill",
        icon: "fab fa-js",
        language: "JavaScript",
        porcentage: "90%",
        value: "90",
      },
      {
        id: "Node Js_skill",
        icon: "fab fa-node",
        language: "Node.Js",
        porcentage: "70%",
        value: "70",
      },
      {
        id: "MYSQL_skill",
        icon: " ",
        language: "MYSQL",
        porcentage: "80%",
        value: "80",
      },
      {
        id: "Typescript_skill",
        icon: " ",
        language: "TypeScript",
        porcentage: "75%",
        value: "75",
      },
    ],
    framework: [
      {
        id: "React_skill",
        icon: "fab fa-react",
        framework: "React",
        porcentage: "85%",
        value: "85",
      },
      {
        id: "Angular_skill",
        icon: "fab fa-angular",
        framework: "Angular",
        porcentage: "70%",
        value: "70",
      },
      {
        id: "Bootstrap",
        icon: "fab fa-bootstrap",
        framework: "Bootstratp",
        porcentage: "85%",
        value: "85",
      },
    ],
    tools: [
      {
        id: "NPM",
        icon: "fab fa-npm",
        tool: "NPM",
        porcentage: "65%",
        value: "65",
      },
      {
        id: "Yarn",
        icon: "fab fa-yarn",
        tool: "Yarn",
        porcentage: "60%",
        value: "60",
      },
      {
        id: "Git",
        icon: "fab fa-github",
        tool: "Git",
        porcentage: "80%",
        value: "80",
      },
    ],
  };
  render() {
    return (
      <>
        <div className="container-fluid" id="portfolio">
          <div className="container mt-4">
            <div className=" text-center mt-5">
              <div className="title-box-2">
                <h5 className="title-left"> PORTFOLIO</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-8">
                <div className="card mb-4">
                  <div
                    className="col-sm-6 col-md-5"
                    style={{ margin: "0 auto", background: "#f2f3f7" }}
                  >
                    <div className="about-img" style={{ textAlign: "center" }}>
                      <img
                        src={image2}
                        className="img-fluid"
                        alt=""
                        style={{
                          boxShadow: "rgb(3, 26, 107) 0px 0px 5px 3px",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <h3 className="card-header text-center">About Me</h3>
                    <p className="card-text text-justify">
                      Full Stack Web Developer interested in a Front-End focus.
                      Specialized in HTML5, CSS3, JavaScript(TypeScript),
                      React.js, Angular, Node.js, MySQL, Git. In-depth
                      understanding of all aspects of statistical methods and
                      models. Experience in coordinating and organizing teams
                      involving in different survey designs. Well presented with
                      excellent interpersonal skills, with high attention to
                      detail and having the ability to solve problems with
                      accuracy and in time.
                    </p>
                  </div>
                </div>
                <div className="card mb-4">
                  <h2 className="card-header text-center">Work Experience</h2>
                  <div className="card-body">
                    <div className="media mb-2">
                      <div className="media-body">
                        <h3 className="h4 mb-1">Front-End Developer</h3>
                        <div className="d-sm-flex justify-content-sm-between align-items-sm-baseline">
                          <h5 className="mb-0">
                            <a href="#0">SHA</a>
                          </h5>{" "}
                          <small className="d-block text-uppercase font-weight-bold text-muted">
                            <time datetime="2017-01">Nov-2019</time> &ndash;{" "}
                            <time datetime="2017-12">OCT-2020</time>
                          </small>
                        </div>
                      </div>
                    </div>
                    <p className="card-text">
                      Assisted and developed a login, Forgot-password and
                      Reset-password functionality to the Social Hackers Academy
                      website using React.js.
                    </p>
                    <hr />
                    <div className="media mb-2">
                      <div className="media-body">
                        <h3 className="h4 mb-1">Statistician</h3>
                        <div className="d-sm-flex justify-content-sm-between align-items-sm-baseline">
                          <h5 className="mb-0">
                            <a href="#0">Ethiopian Central Statistics Agency</a>
                          </h5>{" "}
                          <small className="d-block text-uppercase font-weight-bold text-muted">
                            <time datetime="2003-01">Martch 2003</time> &ndash;{" "}
                            <time datetime="2017-4">April 2017</time>
                          </small>
                        </div>
                      </div>
                    </div>
                    <p className="card-text">
                      Design a survey, including sample size determination,
                      designing a questionnaire, data analysis using different
                      statistical software's like SPSS, STATA , Mplus , SAS and
                      R and also I am good at Microsoft Excel.
                    </p>
                    <hr />
                  </div>
                </div>
                <div className="card mb-4">
                  <h2 className="card-header text-center">Education</h2>
                  <div className="card-body">
                    <div className="media mb-2">
                      <i className="fas fa-university fa-3x fa-fw text-primary mr-2"></i>
                      <div className="media-body">
                        <h3 className="h4 mb-1">Msc in Biostatistics</h3>
                        <div className="d-sm-flex justify-content-sm-between align-items-sm-baseline">
                          <h5 className="mb-0">
                            <a href="#0">Gondar University</a>
                          </h5>{" "}
                          <small className="d-block text-uppercase font-weight-bold text-muted">
                            <time datetime="2013-01">Sep 2013</time> &ndash;{" "}
                            <time datetime="2016-11">Nov 2016</time>
                          </small>
                        </div>
                      </div>
                    </div>
                    <p className="card-text">
                      In 2016 I graguated from the university of Gondar and got
                      my Masters degree in Biostatistics and work as a
                      statistician.
                    </p>
                    <hr />
                    <div className="media mb-2">
                      <i className="fas fa-university fa-3x fa-fw text-primary mr-2"></i>
                      <div className="media-body">
                        <h3 className="h4 mb-1">Bachelor in Mathematics</h3>
                        <div className="d-sm-flex justify-content-sm-between align-items-sm-baseline">
                          <h5 className="mb-0">
                            <a href="#0">Dilla University</a>
                          </h5>{" "}
                          <small className="d-block text-uppercase font-weight-bold text-muted">
                            <time datetime="1998-10">OCT 1998</time> &ndash;{" "}
                            <time datetime="2002-08">July 2002</time>
                          </small>
                        </div>
                      </div>
                    </div>
                    <p className="card-text">
                      In 2002 I graguated from the university of Dilla and got
                      my Bachelor degree in Mathematics.
                    </p>
                    <hr />
                  </div>
                </div>
                <div className="card mb-4">
                  <h2 className="card-header text-center">Certifications</h2>
                  <div className="card-body">
                    <div
                      id="carousel"
                      className="carousel slide"
                      data-ride="carousel"
                    >
                      <ol className="carousel-indicators mb-0">
                        <li
                          data-target="#carousel"
                          data-slide-to="0"
                          className="active"
                        ></li>
                        <li data-target="#carousel" data-slide-to="1"></li>
                        <li data-target="#carousel" data-slide-to="2"></li>
                        <li data-target="#carousel" data-slide-to="3"></li>
                        <li data-target="#carousel" data-slide-to="4"></li>
                      </ol>
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <blockquote className="blockquote text-center d-flex flex-column justify-content-center">
                            <p className="mb-0">
                              <a
                                href="https://www.linkedin.com/company/social-hackers-academy/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: "none" }}
                              >
                                Full stack web developement
                              </a>
                            </p>
                            <p className="mb-0">
                              {" "}
                              <img
                                src={image3}
                                alt="social hackers logo"
                                style={{ height: "60px", width: "60px" }}
                              />{" "}
                              <small style={{ opacity: "0.4" }}>
                                Social Hackers Academy
                              </small>
                            </p>
                          </blockquote>
                        </div>
                        <div className="carousel-item">
                          <blockquote className="blockquote text-center d-flex flex-column justify-content-center">
                            <p className="mb-0">IT Essential</p>
                            <p className="mb-0">
                              {" "}
                              <img
                                src={image4}
                                alt="Cisco logo"
                                style={{ height: "60px", width: "60px" }}
                              />{" "}
                              <small style={{ opacity: "0.4" }}>Cisco</small>
                            </p>
                          </blockquote>
                        </div>
                        <div className="carousel-item">
                          <blockquote className="blockquote text-center d-flex flex-column justify-content-center">
                            <p className="mb-0">
                              <a
                                href="https://www.coursera.org/account/accomplishments/certificate/EW48XMJWB9Z4"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: "none" }}
                              >
                                Resposive website basics: Code with HTML, CSS
                                and JavaScript
                              </a>
                            </p>
                            <p className="mb-0">
                              {" "}
                              <img
                                src={image6}
                                alt="social hackers logo"
                                style={{ height: "60px", width: "60px" }}
                              />{" "}
                              <small style={{ opacity: "0.4" }}>
                                University of London
                              </small>
                            </p>
                          </blockquote>
                        </div>
                        <div className="carousel-item">
                          <blockquote className="blockquote text-center d-flex flex-column justify-content-center">
                            <p className="mb-0">
                              {" "}
                              <a
                                href="https://www.coursera.org/account/accomplishments/certificate/MAPTSJASUZRG"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: "none" }}
                              >
                                Introduction to CSS3{" "}
                              </a>
                            </p>
                            <p className="mb-0">
                              {" "}
                              <img
                                src={image5}
                                alt="social hackers logo"
                                style={{ height: "60px", width: "60px" }}
                              />{" "}
                              <small style={{ opacity: "0.4" }}>
                                University of Michigan
                              </small>
                            </p>
                          </blockquote>
                        </div>
                        <div className="carousel-item">
                          <blockquote className="blockquote text-center d-flex flex-column justify-content-center">
                            <p className="mb-0">
                              <a
                                href="https://www.coursera.org/account/accomplishments/certificate/GAPXLTYGGHGD"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: "none" }}
                              >
                                Introduction to HTML5{" "}
                              </a>
                            </p>
                            <p className="mb-0">
                              {" "}
                              <img
                                src={image5}
                                alt="social hackers logo"
                                style={{ height: "60px", width: "60px" }}
                              />{" "}
                              <small style={{ opacity: "0.4" }}>
                                University of Michigan
                              </small>
                            </p>
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="card mb-4">
                  <h2 className="card-header text-center">Contact info</h2>
                  <div className="card-body">
                    <div className="media">
                      <div className="fa-layers fa-fw fa-2x mr-3">
                        <i className="fas ico-circle text-primary">
                          <i
                            className="fas fa-male fa-2x"
                            data-fa-transform="shrink-8"
                          ></i>
                        </i>
                      </div>
                      <SocialMedia />
                      <div className="media-body">
                        Yeshambel Workie Yimer
                        <hr />
                      </div>
                    </div>
                    <div className="media">
                      <div className="fa-layers fa-fw fa-2x mr-3">
                        <i
                          className="fas fa-phone text-white"
                          data-fa-transform="shrink-8"
                        ></i>
                      </div>
                      <ul className="media-body list-unstyled">
                        <li></li>
                        <li>
                          <i className="fab fa-fw fa-skype text-muted"></i>{" "}
                          <a href="#0">Skype_User</a>
                        </li>
                        <li>
                          {" "}
                          <i className="fab fa-fw fa-whatsapp text-muted"></i>
                          <a href="#0">Whatsapp_User</a>
                        </li>
                        <li>
                          <hr />
                        </li>
                      </ul>
                    </div>
                    <div className="media">
                      <div className="fa-layers fa-fw fa-2x mr-3">
                        <i className="fas ico-circle text-primary">
                          <i className="fas fa-envelope"></i>
                        </i>
                      </div>
                      <ul className="media-body list-unstyled">
                        <li>
                          <a href="mailto:yeshambelwy@gmail.com">
                            mail@gmail.com
                          </a>
                        </li>
                        <li>
                          <i className="fab fa-fw fa-linkedin text-muted"></i>{" "}
                          <a href="https://www.linkedin.com/in/yeshambel/" target="_blank">
                            LinkedIn
                          </a>
                        </li>
                        <li>
                          <i className="fab fa-fw fa-github text-muted"></i>{" "}
                          <a href="https://github.com/" target="_blank">GitHub</a>
                        </li>
                        <li>
                          <hr />
                        </li>
                      </ul>
                    </div>
                    <div className="media">
                      <div className="fa-layers fa-fw fa-2x mr-3">
                        <i className="fas ico-circle text-primary">
                          {" "}
                          <i className="fas fa-home "></i>
                        </i>
                      </div>
                      <div className="media-body">
                        <address className="mb-0">
                          <br />
                          Athens,
                          <br />
                          Greek
                        </address>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-4">
                  <h2 className="card-header text-center">Skills</h2>
                  <div className="card-body">
                    <div className="mb-3">
                      <h3 className="h5 mb-3">Coding Languages</h3>
                      <div className="skill-bar">
                        {this.state.coding.map((skill) => {
                          return (
                            <Fragment key={skill.id}>
                              <span>
                                <i
                                  className={skill.icon}
                                  style={{ marginRight: "5px" }}
                                ></i>
                                {skill.language}
                              </span>
                              <span className="pull-right">
                                {skill.porcentage}
                              </span>
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{ width: skill.porcentage }}
                                  aria-valuenow={skill.value}
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </Fragment>
                          );
                        })}
                      </div>
                    </div>
                    <div className="mb-3">
                      <h3 className="h5 mb-3">Front-End Frameworks</h3>
                      <div className="skill-bar">
                        {this.state.framework.map((skill) => {
                          return (
                            <Fragment key={skill.id}>
                              <span>
                                <i
                                  className={skill.icon}
                                  style={{ marginRight: "5px" }}
                                ></i>
                                {skill.framework}
                              </span>
                              <span className="pull-right">
                                {skill.porcentage}
                              </span>
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{ width: skill.porcentage }}
                                  aria-valuenow={skill.value}
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </Fragment>
                          );
                        })}
                      </div>
                    </div>
                    <div className="mb-3">
                      <h3 className="h5 mb-3">web Tools</h3>
                      <div className="skill-bar">
                        {this.state.tools.map((skill) => {
                          return (
                            <Fragment key={skill.id}>
                              <span>
                                <i
                                  className={skill.icon}
                                  style={{ marginRight: "5px" }}
                                ></i>
                                {skill.tool}
                              </span>
                              <span className="pull-right">
                                {skill.porcentage}
                              </span>
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{ width: skill.porcentage }}
                                  aria-valuenow={skill.value}
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </Fragment>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Portfolio;
