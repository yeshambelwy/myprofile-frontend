import React, { useState } from "react";
import Footer from "../Footer/footer";
import { RiSendPlaneFill } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Fade from "react-reveal/Fade";
import "./contact.css";

import back from "../../images/back.png";
import program from "../../images/program.jpg";

const Contact = () => {
  const API = "http://localhost:3001/contactme";

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [joboffers, setJoboffers] = useState();
  const [message, setMessage] = useState();

  const sendemailInfo = () => {
    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        joboffers,
        message,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.error) {
          toast.error(result.error, {
            position: toast.POSITION.TOP_RIGHT,
          });
        } else {
          toast.success("Your E-mail has been sent", {
            position: toast.POSITION.TOP_RIGHT,
          });

          setName("");
          setEmail("");
          setJoboffers("");
          setMessage("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div id="contact">
        <section className="contact-sec footer-sec  gen-margin">
          <div
            className="overlay-back"
            style={{ backgroundImage: `url(${back})` }}
          ></div>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="contact-margin">
                  <div
                    className="box-full"
                    style={{ backgroundImage: `url(${back})` }}
                  >
                    <div
                      className="row"
                      style={{
                        boxShadow:
                          "rgba(0, 0, 0, 0.2) 1px 2px 5px 0px, rgba(0, 0, 0, 0.1) 0px -1px 5px 0px",
                      }}
                    >
                      <Fade bottom>
                        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 mapDisplay mb-5">
                          <div className="contact-form-iamge">
                            <img
                              src={program}
                              className="img-fluid"
                              alt="screen shot of code in the screen"
                              style={{
                                boxShadow: "rgb(3, 26, 107) 0px 0px 5px 3px",
                              }}
                            />
                          </div>
                        </div>
                      </Fade>
                      <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
                        <Fade right>
                          <div className="title-box-2">
                            <h5 className="title-left text-center">
                              Contact Me
                            </h5>
                            <p className="lead mt-5">
                              If you have any request, or just say hi, I'd love
                              to hear from you. Fill the from and send me.
                            </p>
                          </div>
                          <div>
                            <form>
                              <div className="row">
                                <div className="col-md-12 mb-3">
                                  <div className="form-group">
                                    <label className="form-lebel">Name</label>
                                    <input
                                      type="text"
                                      name="name"
                                      className="form-control"
                                      placeholder="Your Name"
                                      value={name}
                                      onChange={(e) => setName(e.target.value)}
                                    />
                                  </div>
                                </div>
                                <div className="col-md-12 mb-3">
                                  <div className="form-group">
                                    <label className="form-lebel">Email</label>
                                    <input
                                      type="email"
                                      className="form-control"
                                      name="email"
                                      placeholder="Your Email"
                                      value={email}
                                      onChange={(e) => setEmail(e.target.value)}
                                    />
                                  </div>
                                </div>
                                <div className="col-md-12 mb-3">
                                  <div className="form-group">
                                    <label className="form-lebel">
                                      Job Offers
                                    </label>
                                    <select
                                      className="custom-select-tag"
                                      value={joboffers}
                                      onChange={(e) =>
                                        setJoboffers(e.target.value)
                                      }
                                    >
                                      <option>
                                        Select Your Job Offer here ...
                                      </option>
                                      <option>On site</option>
                                      <option>Remote</option>

                                      <option>Internship</option>

                                      <option>Permanent</option>
                                      <option>Temporary</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-md-12 mb-3">
                                  <div className="form-group">
                                    <label className="form-lebel">
                                      Message
                                    </label>
                                    <textarea
                                      className="form-control"
                                      name="message"
                                      rows="5"
                                      placeholder="Your message here..."
                                      value={message}
                                      onChange={(e) =>
                                        setMessage(e.target.value)
                                      }
                                    >
                                      {" "}
                                    </textarea>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div
                                  className="button-submit"
                                  onClick={sendemailInfo}
                                >
                                  <p>
                                    Send <RiSendPlaneFill size={20} />
                                  </p>
                                </div>
                              </div>
                            </form>
                          </div>
                        </Fade>
                        <ToastContainer draggable autoClose={8000} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer>
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="copyright-box">
                    <p className="copyright">
                      <strong>@Yeshambel Yimer</strong> <Footer />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </section>
      </div>
    </>
  );
};

export default Contact;
