import React from "react";
import heroOne from "../assets/hero-one.svg";
import heroTwo from "../assets/hero-two.svg";
import heroThree from "../assets/hero-three.svg";
import About from "./About";
import services1 from "../assets/service1.jpg";
import services2 from "../assets/service2.jpg";
import services3 from "../assets/service3.jpg";
import services7 from "../assets/service7.jpg";
import services5 from "../assets/service5.jpg";
import services6 from "../assets/service6.jpg";

export default function Home() {
  return (
    <>
      <div className="main">
        <section className="hero-section pt-100 background-img">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-6 col-lg-6">
                <div className="hero-content-left text-white mt-5">
                  <h1 className="text-white">
                    A strong Startup, where are your ideas turn into reality
                  </h1>
                  <p className="lead">
                    We provide high designated applications, websites and
                    digital branding.
                  </p>
                  <a href="#" className="btn solid-btn btn-primary">
                    Get Start Now{" "}
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-5">
                <div className="hero-animation-img">
                  <img
                    className="img-fluid d-block animation-one"
                    src={heroTwo}
                    alt="animation image"
                  />
                  <img
                    className="img-fluid d-none d-lg-block animation-two"
                    src={heroOne}
                    alt="animation image"
                    width="120"
                  />
                  <img
                    className="img-fluid d-none d-lg-block animation-four animation-new"
                    src={heroThree}
                    alt="animation image"
                    width="100"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <ul className="list-inline counter-wrap">
                <li className="list-inline-item">
                  <div className="single-counter text-center">
                    {/* <span>0 </span> */}
                    <h6>Developement </h6>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div className="single-counter text-center">
                    {/* <span>0 </span> */}
                    <h6>Support </h6>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div className="single-counter text-center">
                    {/* <span>0 </span> */}
                    <h6>Deployment </h6>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div className="single-counter text-center">
                    {/* <span>0 </span> */}
                    <h6>Digital Promotions</h6>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <br />
      <br />
      <section
        id="services"
        style={{ marginTop: "3vw" }}
        class="our-services-section ptb-100"
      >
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-9 col-lg-8">
              <div class="section-heading text-center text-center">
                <h2>Your One-Stop Hub for Digital Excellence </h2>
                <p class="lead">
                  we offer a wide spectrum of services designed to empower your
                  online presence and drive your business forward. From
                  cutting-edge website development to cloud services, SEO, and
                  digital promotions, we've got you covered.{" "}
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="single-services text-center mt-3 p-3">
                <div class="about-content">
                  <img src={services1} alt="" class="img-fluid" />
                </div>
                <div class="feature-content pt-3">
                  <h5 class="mb-2">Website Development </h5>
                  <p align="justify">
                    Your website is your digital storefront, and we craft
                    beautiful, functional, and user-friendly websites that leave
                    a lasting impression. Whether you need an elegant showcase
                    or a robust e-commerce platform, we have the expertise to
                    make it happen.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="single-services text-center mt-3 p-3">
                <div class="about-content">
                  <img src={services2} alt="" class="img-fluid" />
                </div>
                <div class="feature-content pt-3">
                  <h5 class="mb-2">Web App Development </h5>
                  <p align="justify">
                    Take your business to the next level with our web app
                    development services. We design and build tailored web
                    applications that streamline operations, enhance user
                    experiences, and boost your efficiency.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="single-services text-center mt-3 p-3">
                <div class="about-content">
                  <img src={services3} alt="" class="img-fluid" />
                </div>
                <div class="feature-content pt-3">
                  <h5 class="mb-2">Mobile App Development </h5>
                  <p align="justify">
                    Stay connected with your audience on the go with our mobile
                    app development expertise. Our mobile apps are designed for
                    maximum engagement, performance, and user satisfaction.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="single-services text-center mt-3 p-3">
                <div class="about-content">
                  <img src={services7} alt="" class="img-fluid" />
                </div>
                <div class="feature-content pt-3">
                  <h5 class="mb-2">Cloud Services Development </h5>
                  <p align="justify">
                    Leverage the power of the cloud to enhance scalability,
                    security, and efficiency. Our cloud services development
                    ensures your business is always ready for what's nex.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="single-services text-center mt-3 p-3">
                <div class="about-content">
                  <img src={services5} alt="" class="img-fluid" />
                </div>
                <div class="feature-content pt-3">
                  <h5 class="mb-2">SEO Development </h5>
                  <p align="justify">
                    Boost your online visibility and attract the right audience
                    with our SEO services. We optimize your digital presence to
                    ensure you rank higher in search results and grow your
                    organic reach.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="single-services text-center mt-3 p-3">
                <div class="about-content">
                  <img src={services6} alt="" class="img-fluid" />
                </div>
                <div class="feature-content pt-3">
                  <h5 class="mb-2">Digital Promotion </h5>
                  <p align="justify">
                    Reach your target audience effectively with our digital
                    promotion strategies. We create and implement campaigns that
                    drive results, boost brand awareness, and increase your
                    online influence.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" class="about-us ptb-100 gray-light-bg">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6">
              <div class="about-content-left">
                <h2>Digital Business to Internationalized Standard </h2>
                <p class="lead">
                  At Techness Solution, we offer a range of services designed to
                  take your business to international standards{" "}
                </p>

                <div class="single-feature my-4">
                  <div class="d-flex align-items-center mb-2">
                    <span class="ti-alarm-clock rounded mr-3 icon primary-bg text-white"></span>
                    <h5 class="mb-0">Consultation and Assessment </h5>
                  </div>
                  <p>
                    We begin by thoroughly assessing your current operations and
                    identifying areas that require improvement to meet
                    international standards. Our experts work closely with your
                    team to craft a tailored strategy.{" "}
                  </p>
                </div>
                <div class="single-feature my-4">
                  <div class="d-flex align-items-center mb-2">
                    <span class="ti-alarm-clock rounded mr-3 icon primary-bg text-white"></span>
                    <h5 class="mb-0">Quality Assurance </h5>
                  </div>
                  <p>
                    Ensuring the quality of your products and services is a top
                    priority. We assist in developing quality control systems
                    that align with international standards and help you
                    maintain consistency.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="counter">
                <div class="single-card box-animation-1 secondary-bg text-white">
                  <span class="ti-medall-alt color-primary"></span>
                  <h3>Digital </h3>
                  <p>Transformation </p>
                </div>
                <div class="single-card box-animation-2 icon-color-1">
                  <span class="ti-headphone-alt"></span>
                  <h3>Custom </h3>
                  <p>Software Solutions </p>
                </div>
                <div class="single-card box-animation-3 icon-color-2">
                  <span class="ti-cup"></span>
                  <h3>Scalable </h3>
                  <p>Technology Solutions </p>
                </div>
                <div class="single-card box-animation-4 primary-bg text-white">
                  <span class="ti-user color-secondary"></span>
                  <h3>Business </h3>
                  <p>Process Automation </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" class="contact-us-section ptb-100 gray-light-bg">
        <div class="container">
          <div class="row justify-content-around">
            <div class="col-12 pb-3 message-box d-none">
              <div class="alert alert-danger"></div>
            </div>
            <div class="col-md-6">
              <div class="contact-us-form white-bg rounded p-5">
                <h4>Ready to get started? </h4>
                <form
                  action="#"
                  method="POST"
                  id="contactForm1"
                  class="contact-us-form"
                >
                  <div class="form-row">
                    <div class="col-12">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          name="name"
                          placeholder="Enter name"
                          required="required"
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control"
                          name="email"
                          placeholder="Enter email"
                          required="required"
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <textarea
                          name="message"
                          id="message"
                          class="form-control"
                          rows="7"
                          cols="25"
                          placeholder="Message"
                        ></textarea>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-check d-inline-flex align-items-center mb-2">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="checkInfo"
                        />
                        <label class="form-check-label" for="checkInfo">
                          Save my information for _____ use{" "}
                        </label>
                      </div>
                    </div>
                    <div class="col-sm-12 mt-3">
                      <button
                        type="submit"
                        class="btn primary-solid-btn"
                        id="btnContactUs"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-md-5">
              <div class="contact-us-content">
                <h2>Looking for a excellent Business idea? </h2>
                <p class="lead">
                  Feel free to get in touch with us. Whether you have questions,
                  feedback, or require assistance with our services, we're here
                  to help. Please fill out the form below, and we'll respondas
                  soon as possible..{" "}
                </p>
                <hr class="my-5" />
                <h5>Touch via </h5>
                <br />
                <span>Phone: +91 8838166026, 9600295907 </span> <br />
                <span>
                  Email:{" "}
                  <a href="mailto:aziazhar111996@gmail.com" class="link-color">
                    aziazhar111996@gmail.com{" "}
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Element name="about">
        <About />
      </Element> */}
      <br />
      {/* <Element name="services">
        <Services />
      </Element>
      <br/> 
      <Element name="testimonials">
        <Testimonials />
      </Element> */}
    </>
  );
}
