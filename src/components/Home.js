
import React from "react";
import heroOne from "../assets/hero-one.svg";
import heroTwo from "../assets/hero-two.svg";
import heroThree from "../assets/hero-three.svg";
import About from "./About";
import Services from "./Services";
import { Element } from "react-scroll";
import Testimonials from "./Testimonials";


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
                    <h6>Support  </h6>
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
      <br/>
      <Element name="about">
        <About />
      </Element>
     <br/> 
      <Element name="services">
        <Services />
      </Element>
      <br/> 
      <Element name="testimonials">
        <Testimonials />
      </Element>
    </>
  );
}
