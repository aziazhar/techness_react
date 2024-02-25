import React from "react";
import About1 from "../assets/mission.jpg";
import About2 from "../assets/vision.jpg";
import About3 from "../assets/grow.jpg";
import sliderImg1 from "../assets/client-1-color.png";
import sliderImg2 from "../assets/client-2-color.png";
import sliderImg3 from "../assets/client-3-color.png";
import sliderImg4 from "../assets/client-4-color.png";
import sliderImg5 from "../assets/client-5-color.png";
import sliderImg6 from "../assets/client-6-color.png";
import sliderImg7 from "../assets/client-7-color.png";
import client1 from "../assets/client-1.jpg";
import client2 from "../assets/client-2.jpg";
import client3 from "../assets/client-3.jpg";
import client4 from "../assets/client-4.jpg";
import team1 from "../assets/team-1.jpg";
import team2 from "../assets/team-2.jpg";
import team3 from "../assets/team-3.jpg";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

export default function About() {
  const navigate = useNavigate();

  var settings = {
    slidesToShow: 7,
    slidesToScroll: 7,
    autoplay: true,
    autoplaySpeed: 500,
    infinite: true,
    speed: 80000,
    // dots: true,
  };
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <i
        class="fa fa-angle-left sliderBtn"
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          color: "#ff8657",
          fontSize: "1.5vw",
          border: "1px dashed gainsboro",
          padding: "5px 10px",
          borderRadius: "4px",
          cursor: "pointer",
        }}
        onClick={onClick}
      />
    );
  };

  const NextArrow = (props) => {
    const { onClick, style } = props;
    return (
      <i
        class="fa fa-angle-right sliderBtn"
        style={{
          position: "absolute",
          bottom: 0,
          left: "53.5%",
          color: "#ff8657",
          fontSize: "1.5vw",
          border: "1px dashed gainsboro",
          padding: "5px 10px",
          borderRadius: "4px",
          cursor: "pointer",
        }}
        onClick={onClick}
      />
    );
  };
  var testimonials = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    speed: 2000, // Adjust speed of slide transition
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
  
    <div class="main">
      {/* <!--page header section start--> */}
      <section
        class="hero-section background-img ptb-100"
        // style="background: url('img/hero-bg-1.jpg')no-repeat bottom center / cover fixed"
      >
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-8 col-lg-7">
              <div class="page-header-content text-white text-center pt-5">
                <h1 class="text-white mb-1">About us </h1>
                <ul class="breadcrumb">
                  <li>
                    <a onClick={() => navigate("/")}>Home </a>
                  </li>
                  <i class="fa fa-angle-right headerIcon" />
                  <li class="active">Pages </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--page header section end--> */}

      {/* <!--our mission section start--> */}
      <section class="our-services-section ptb-100">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-9 col-lg-8">
              <div class="section-heading text-center text-center">
                <h2>We are Agency, We ______ Solutions </h2>
                <p class="lead">
                  Uniquely strategize vertical materials _______ real-time
                  web-readiness. Progressively transition ___-____ processes
                  client technology.{" "}
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="single-services text-center mt-3 p-3">
                <div class="about-content">
                  <img src={About1} alt="" class="img-fluid" />
                </div>
                <div class="feature-content pt-3">
                  <h5 class="mb-2">Our Mission </h5>
                  <p>
                    where we use search _______ to market your product; _______
                    paid methods (Pay per _____ (PPC) Services) web-enabled
                    testing{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="single-services text-center mt-3 p-3">
                <div class="about-content">
                  <img src={About2} alt="" class="img-fluid" />
                </div>
                <div class="feature-content pt-3">
                  <h5 class="mb-2">Our Vision </h5>
                  <p>
                    While browsing Facebook or _______ or even Linkedin, sticky
                    ____________ exceptional you are subjected __ advertisements
                    fashion.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="single-services text-center mt-3 p-3">
                <div class="about-content">
                  <img src={About3} alt="" class="img-fluid" />
                </div>
                <div class="feature-content pt-3">
                  <h5 class="mb-2">Why Us? </h5>
                  <p>
                    Email marketing is one __ the most popular strategies
                    _______ by full-service digital marketing ________
                    future-proof.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--our mission section end--> */}

      {/* <!--about use second section start--> */}
      <section class="imageblock-section switchable switchable-content gray-light-bg">
        <div class="imageblock-section-img col-lg-5 col-md-5">
          <div
            class="background-image-holder"
            // style="background: url('img/about-img.jpg')no-repeat center center / cover; opacity: 1;"
          ></div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-7">
              <div class="core-idea-wrap ptb-100">
                <div class="section-heading mb-4">
                  <h2>Great Solution for Business </h2>
                  <p class="lead">
                    Globally evolve integrated processes ___ backend
                    communities. Compellingly cultivate business imperatives
                    before productize ___-__-___ total linkage.{" "}
                  </p>
                </div>
                <div class="row">
                  <div class="col-md-6 col-lg-6">
                    <div class="core-idea-single my-3">
                      <div class="d-flex align-items-center pb-3">
                        <span class="ti-bar-chart mr-2 icon-sm color-primary"></span>
                        <h5 class="mb-0">Marketing </h5>
                      </div>
                      <p>
                        Proactively conceptualize clicks-and-mortar "outside ___
                        box" thinking after cross-unit.{" "}
                      </p>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <div class="core-idea-single my-3">
                      <div class="d-flex align-items-center pb-3">
                        <span class="ti-thought mr-2 icon-sm color-primary"></span>
                        <h5 class="mb-0">Communication </h5>
                      </div>
                      <p>
                        Intrinsicly seize high-payoff outsourcing _______
                        functional process improvements.{" "}
                      </p>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <div class="core-idea-single my-3">
                      <div class="d-flex align-items-center pb-3">
                        <span class="ti-headphone-alt mr-2 icon-sm color-primary"></span>
                        <h5 class="mb-0">Consultancy </h5>
                      </div>
                      <p>
                        Authoritatively matrix wireless infrastructures
                        ___-_-___ team building potentialities.{" "}
                      </p>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <div class="core-idea-single my-3">
                      <div class="d-flex align-items-center pb-3">
                        <span class="ti-cloud-up mr-2 icon-sm color-primary"></span>
                        <h5 class="mb-0">Cloud Business </h5>
                      </div>
                      <p>
                        Progressively extend multifunctional potentialities
                        ___-_-___ cost effective potentialities.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--end of row--> */}
        </div>
      </section>
      {/* <!--about use second section end--> */}

      {/* <!--client section start--> */}
      <section class="client-section ptb-100">
        <div class="container">
          {/* <!--clients logo start--> */}
          <div class="row justify-content-center">
            <div class="col-md-8">
              <div class="section-heading text-center mb-5">
                <h2>Trusted by companies </h2>
                <p class="lead">
                  Rapidiously _____ transparent internal or "organic" _______
                  whereas resource sucking e-business. Conveniently innovate
                  compelling ________.
                </p>
              </div>
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-md-12">
              <Slider {...settings} className="testimonial_slide logoSlide">
                <div class="item single-client">
                  <img src={sliderImg1} alt="client logo" class="client-img" />
                </div>
                <div class="item single-client">
                  <img src={sliderImg2} alt="client logo" class="client-img" />
                </div>
                <div class="item single-client">
                  <img src={sliderImg3} alt="client logo" class="client-img" />
                </div>
                <div class="item single-client">
                  <img src={sliderImg4} alt="client logo" class="client-img" />
                </div>
                <div class="item single-client">
                  <img src={sliderImg5} alt="client logo" class="client-img" />
                </div>
                <div class="item single-client">
                  <img src={sliderImg6} alt="client logo" class="client-img" />
                </div>
                <div class="item single-client">
                  <img src={sliderImg7} alt="client logo" class="client-img" />
                </div>
              </Slider>
            </div>
          </div>
          {/* <!--clients logo end--> */}
        </div>
      </section>
      {/* <!--client section start-->

<!--our team section start--> */}
      <section class="team-member-section gray-light-bg ptb-100">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-7 col-md-8">
              <div class="section-heading text-center mb-5">
                <h2>Our team members </h2>
                <p class="lead">
                  Following _______ show advantages of adding ________ to your
                  lead pages, _____ and checkouts
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="single-team-member rounded position-relative">
                <div class="team-image">
                  <img
                    src={team1}
                    alt="Team Members"
                    class="img-fluid rounded"
                  />
                </div>
                <div class="team-info text-white rounded d-flex flex-column align-items-center justify-content-center">
                  <h5 class="mb-0">Edna Mason </h5>
                  <h6>Senior Designer </h6>
                  <ul class="list-inline team-social social-icon mt-4 text-white">
                    <li class="list-inline-item">
                      <a href="#">
                        <span class="ti-facebook"></span>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                        <span class="ti-twitter"></span>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                        <span class="ti-github"></span>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                        <span class="ti-dribbble"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="single-team-member rounded position-relative">
                <div class="team-image">
                  <img
                    src={team2}
                    alt="Team Members"
                    class="img-fluid rounded"
                  />
                </div>
                <div class="team-info text-white rounded d-flex flex-column align-items-center justify-content-center">
                  <h5 class="mb-0">Edna Mason </h5>
                  <h6>Senior Designer </h6>
                  <ul class="list-inline team-social social-icon mt-4 text-white">
                    <li class="list-inline-item">
                      <a href="#">
                        <span class="ti-facebook"></span>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                        <span class="ti-twitter"></span>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                        <span class="ti-github"></span>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                        <span class="ti-dribbble"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="single-team-member rounded position-relative">
                <div class="team-image">
                  <img
                    src={team3}
                    alt="Team Members"
                    class="img-fluid rounded"
                  />
                </div>
                <div class="team-info text-white rounded d-flex flex-column align-items-center justify-content-center">
                  <h5 class="mb-0">Edna Mason </h5>
                  <h6>Senior Designer </h6>
                  <ul class="list-inline team-social social-icon mt-4 text-white">
                    <li class="list-inline-item">
                      <a href="#">
                        <span class="ti-facebook"></span>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                        <span class="ti-twitter"></span>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                        <span class="ti-github"></span>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                        <span class="ti-dribbble"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--our team section end-->


<!--testimonial section start--> */}
      <section class="testimonial-section ptb-100">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-9 col-lg-8">
              <div class="section-heading mb-5 text-center">
                <h2>Testimonials What Clients Say </h2>
                <p class="lead">
                  Rapidiously _____ transparent internal or "organic" _______
                  whereas resource sucking e-business. Conveniently innovate
                  compelling ________.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 col-lg-12">
              <Slider {...testimonials} className="testimonial_slide">
                <div class="testimonial_wrap">
                  <div class="testimonial-single shadow-sm gray-light-bg rounded p-4">
                    <blockquote>
                      Assertively procrastinate distributed _____________
                      whereas equity invested intellectual _______ everything
                      energistically underwhelm proactive.
                    </blockquote>
                    <div class="client-ratting mt-2">
                      <ul class="list-inline client-ratting-list">
                        <li class="list-inline-item">
                          <span class="ti-star ratting-color"></span>
                        </li>
                        <li class="list-inline-item">
                          <span class="ti-star ratting-color"></span>
                        </li>
                        <li class="list-inline-item">
                          <span class="ti-star ratting-color"></span>
                        </li>
                        <li class="list-inline-item">
                          <span class="ti-star ratting-color"></span>
                        </li>
                        <li class="list-inline-item">
                          <span class="ti-star ratting-color"></span>
                        </li>
                      </ul>
                      <h6 class="font-weight-bold">
                        5.0 <small class="font-weight-lighter">BizBite </small>
                      </h6>
                    </div>
                  </div>
                  <div class="client-info-wrap d-flex align-items-center mt-5">
                    <div class="client-img mr-3">
                      <img
                        src={client1}
                        alt="client"
                        width="60"
                        class="img-fluid rounded-circle shadow-sm"
                      />
                    </div>
                    <div class="client-info">
                      <h5 class="mb-0">Austin Cesar </h5>
                      <p class="mb-0">ThemeTags </p>
                    </div>
                  </div>
                </div>
                <div class="testimonial_wrap">
                  <div class="testimonial-single shadow-sm gray-light-bg rounded p-4">
                    <blockquote>
                      Intrinsicly facilitate functional ___________ without
                      next-generation meta-services. Compellingly _____________
                      worldwide users vis-a-vis enterprise ____ practices.
                    </blockquote>
                    <div class="client-ratting mt-2">
                      <ul class="list-inline client-ratting-list">
                        <li class="list-inline-item">
                          <span class="ti-star ratting-color"></span>
                        </li>
                        <li class="list-inline-item">
                          <span class="ti-star ratting-color"></span>
                        </li>
                        <li class="list-inline-item">
                          <span class="ti-star ratting-color"></span>
                        </li>
                        <li class="list-inline-item">
                          <span class="ti-star ratting-color"></span>
                        </li>
                        <li class="list-inline-item">
                          <span class="ti-star ratting-color"></span>
                        </li>
                      </ul>
                      <h6 class="font-weight-bold">
                        5.0 <small class="font-weight-lighter">BizBite </small>
                      </h6>
                    </div>
                  </div>
                  <div class="client-info-wrap d-flex align-items-center mt-5">
                    <div class="client-img mr-3">
                      <img
                        src={client2}
                        alt="client"
                        width="60"
                        class="img-fluid rounded-circle shadow-sm"
                      />
                    </div>
                    <div class="client-info">
                      <h5 class="mb-0">Pirtle Karol </h5>
                      <p class="mb-0">ThemeTags </p>
                    </div>
                  </div>
                </div>
                <div class="testimonial_wrap">
                  <div class="testimonial-single shadow-sm gray-light-bg rounded p-4">
                    <blockquote>
                      Interactively grow backend _________ through one
                      paradigms. Distinctively ___ communicate efficient
                      information without _________ meta-services.
                    </blockquote>
                    <div class="client-ratting mt-2">
                      <ul class="list-inline client-ratting-list">
                        <li class="list-inline-item">
                          <span class="ti-star ratting-color"></span>
                        </li>
                        <li class="list-inline-item">
                          <span class="ti-star ratting-color"></span>
                        </li>
                        <li class="list-inline-item">
                          <span class="ti-star ratting-color"></span>
                        </li>
                        <li class="list-inline-item">
                          <span class="ti-star ratting-color"></span>
                        </li>
                        <li class="list-inline-item">
                          <span class="ti-star ratting-color"></span>
                        </li>
                      </ul>
                      <h6 class="font-weight-bold">
                        5.0 <small class="font-weight-lighter">BizBite </small>
                      </h6>
                    </div>
                  </div>
                  <div class="client-info-wrap d-flex align-items-center mt-5">
                    <div class="client-img mr-3">
                      <img
                        src={client3}
                        alt="client"
                        width="60"
                        class="img-fluid rounded-circle shadow-sm"
                      />
                    </div>
                    <div class="client-info">
                      <h5 class="mb-0">Aminul Islam </h5>
                      <p class="mb-0">ThemeTags </p>
                    </div>
                  </div>
                </div>
                <div class="testimonial_wrap">
                  <div class="testimonial-single shadow-sm gray-light-bg rounded p-4">
                    <blockquote>
                      Intrinsicly facilitate functional ___________ without
                      next-generation meta-services. Compellingly _____________
                      worldwide users vis-a-vis enterprise ____ practices.
                    </blockquote>
                    <div class="client-ratting mt-2">
                      <ul class="list-inline client-ratting-list">
                        <li class="list-inline-item">
                          <span class="ti-star ratting-color"></span>
                        </li>
                        <li class="list-inline-item">
                          <span class="ti-star ratting-color"></span>
                        </li>
                        <li class="list-inline-item">
                          <span class="ti-star ratting-color"></span>
                        </li>
                        <li class="list-inline-item">
                          <span class="ti-star ratting-color"></span>
                        </li>
                        <li class="list-inline-item">
                          <span class="ti-star ratting-color"></span>
                        </li>
                      </ul>
                      <h6 class="font-weight-bold">
                        5.0 <small class="font-weight-lighter">BizBite </small>
                      </h6>
                    </div>
                  </div>
                  <div class="client-info-wrap d-flex align-items-center mt-5">
                    <div class="client-img mr-3">
                      <img
                        src={client4}
                        alt="client"
                        width="60"
                        class="img-fluid rounded-circle shadow-sm"
                      />
                    </div>
                    <div class="client-info">
                      <h5 class="mb-0">Pirtle Karol </h5>
                      <p class="mb-0">ThemeTags </p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      {/* <!--testimonial section end-->

<!--call to action start--> */}
      <section
        class="call-to-action ptb-100 background-img"
        // style="background: url('img/hero-bg-2.jpg')no-repeat center center / cover fixed"
      >
        <div class="container">
          <div class="row align-items-center justify-content-around">
            <div class="col-md-8 col-lg-8">
              <div class="call-to-action-content text-white">
                <h2 class="text-white mb-1">
                  AgencyCo It's easier than ___ think.{" "}
                </h2>
                <p>
                  Progressively deliver market-driven quality _______ rather
                  than goal-oriented niche _______.{" "}
                </p>
              </div>
            </div>
            <div class="col-md-4 col-lg-4">
              <div class="call-to-action-btn text-md-right text-lg-right text-sm-left">
                <a href="#" target="_blank" class="btn solid-btn">
                  {" "}
                  Buy AgencyCo <span>$14 </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--call to action end--> */}
    </div>
  );
}
