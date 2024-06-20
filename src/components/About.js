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
        class="ti ti-angle-left"
        style={{
          position: "absolute",
          bottom: 0,
          left: "49%",
          color: "#ff8657",
          fontSize: "0.9vw",
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
        class="ti ti-angle-right"
        style={{
          position: "absolute",
          bottom: 0,
          left: "53.5%",
          color: "#ff8657",
          fontSize: "0.9vw",
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
      {/* Page Header  */}
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
                  <i
                    class="ti ti-angle-right"
                    style={{
                      fontSize: "0.8rem",
                      padding: "0px 10px",
                      marginTop: "2px",
                    }}
                  />
                  <li class="active">Pages </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our mission  */}

      <section class="our-services-section ptb-100">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-9 col-lg-8">
              <div class="section-heading text-center text-center">
                <h2>About us  </h2>
                <p class="lead" align="justify">
                Delivering exceptional IT solutions tailored to propel businesses forward with efficiency and ingenuity. Techness Solutions is your strategic partner for seamless digital transformation, offering expertise, reliability, and innovation.{" "}
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
                  <p align="justify">
                  At Techness Solutions, our mission is to revolutionize the tech landscape by providing cutting-edge solutions that empower businesses to thrive in the digital age. We are committed to delivering innovative technology products and services that exceed our clients' expectations, enabling them to stay ahead of the curve in an ever-evolving industry. With a focus on creativity, integrity, and excellence, we strive to be the trusted partner our clients turn to for all their technological needs.{" "}</p>
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
                  <p align="justify">
                  At Techness Solutions, our vision is to harness the power of technology to transform businesses and elevate human potential. We envision a world where innovation knows no bounds, where cutting-edge solutions pave the way for unprecedented growth and efficiency. With a relentless focus on pushing the boundaries of what's possible, we strive to be at the forefront of technological advancements, offering our clients unparalleled opportunities to thrive in the digital age.{" "}
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
                  <p align="justify">
                  In the vast landscape of technological solutions, why choose us? At Techness Solutions, we pride ourselves on our unwavering commitment to innovation, excellence, and client satisfaction. Our team comprises forward-thinking experts who not only stay abreast of the latest technological advancements but also anticipate future trends, ensuring that our clients receive cutting-edge solutions tailored to their unique needs and  trusted partner on the journey to digital transformation.  {" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About us  */}
      <section class="imageblock-section switchable switchable-content gray-light-bg">
        <div class="imageblock-section-img col-lg-5 col-md-5">
          <div
            class="background-image-holder"
            // style="background: url('img/about-img.jpg')no-repeat center center / cover; opacity: 1;"
          ></div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7">
              <div className="core-idea-wrap ptb-100">
                <div className="section-heading mb-4">
                  <h2>Great Solution for Business </h2>
                  <p className="lead" align="justify">
                  At in Techness Solutions, where technology meets innovation. We specialize in delivering comprehensive IT solutions tailored to your unique business needs.{" "}
                  </p>
                </div>
                <div className="row">
                  <div className="col-md-6 col-lg-6">
                    <div className="core-idea-single my-3">
                      <div className="d-flex align-items-center pb-3">
                        <span className=" mr-2 icon-sm color-primary">
                          <i class="ti ti-bar-chart"></i>
                        </span>
                        <h5 className="mb-0">Business Softwares  </h5>
                      </div>
                      <p align="justify"> 
                      Custom software solutions designed to meet your specific business requirement needs.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <div className="core-idea-single my-3">
                      <div className="d-flex align-items-center pb-3">
                        <span className="mr-2 icon-sm color-primary">
                          <i class="ti ti-thought"></i>
                        </span>
                        <h5 className="mb-0">Mobile Apps</h5>
                      </div>
                      <p align="justify"> 
                      Tailored mobile solutions to elevate your business. Continuous support to keep your app running smoothly.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <div className="core-idea-single my-3">
                      <div className="d-flex align-items-center pb-3">
                        <span className="mr-2 icon-sm color-primary">
                          <i class="ti ti-headphone-alt"></i>
                        </span>
                        <h5 className="mb-0">Cloud Services </h5>
                      </div>
                      <p align="justify"> 
                      Leverage the power of the cloud with our scalable and secure cloud computing solutions.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <div className="core-idea-single my-3">
                      <div className="d-flex align-items-center pb-3">
                        <span className="mr-2 icon-sm color-primary">
                          <i class="ti ti-cloud-up"></i>
                        </span>
                        <h5 className="mb-0">Data Analytics </h5>
                      </div>
                      <p align="justify"> 
                      Unlock actionable insights and drive business growth with our advanced data analytics solutions.{" "}
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

      {/* Client section   */}

      <section class="client-section ptb-100">
        <div class="container">
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
        </div>
      </section>

      {/* Our team  */}

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
                        <span>
                          <i class="ti ti-facebook" />
                        </span>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                        <span>
                          <i class="ti ti-twitter" />
                        </span>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                        <span>
                          <i class="ti ti-github" />
                        </span>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                        <span>
                          <i class="ti ti-dribbble" />
                        </span>
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
                        <span>
                          <i class="ti ti-facebook" />
                        </span>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                        <span>
                          <i class="ti ti-twitter" />
                        </span>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                        <span>
                          <i class="ti ti-github" />
                        </span>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                        <span>
                          <i class="ti ti-dribbble" />
                        </span>
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
                        <span>
                          <i class="ti ti-facebook" />
                        </span>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                        <span>
                          <i class="ti ti-twitter" />
                        </span>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                        <span>
                          <i class="ti ti-github" />
                        </span>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                        <span>
                          <i class="ti ti-dribbble" />
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* testimonial  */}

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
                          <span className="ratting-color">
                            <i class="ti ti-star"></i>
                          </span>
                        </li>
                        <li class="list-inline-item">
                          <span className="ratting-color">
                            <i class="ti ti-star"></i>
                          </span>
                        </li>
                        <li class="list-inline-item">
                          <span className="ratting-color">
                            <i class="ti ti-star"></i>
                          </span>
                        </li>
                        <li class="list-inline-item">
                          <span className="ratting-color">
                            <i class="ti ti-star"></i>
                          </span>
                        </li>
                        <li class="list-inline-item">
                          <span className="ratting-color">
                            <i class="ti ti-star"></i>
                          </span>
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
                          <span className="ratting-color">
                            <i class="ti ti-star"></i>
                          </span>
                        </li>
                        <li class="list-inline-item">
                          <span className="ratting-color">
                            <i class="ti ti-star"></i>
                          </span>
                        </li>
                        <li class="list-inline-item">
                          <span className="ratting-color">
                            <i class="ti ti-star"></i>
                          </span>
                        </li>
                        <li class="list-inline-item">
                          <span className="ratting-color">
                            <i class="ti ti-star"></i>
                          </span>
                        </li>
                        <li class="list-inline-item">
                          <span className="ratting-color">
                            <i class="ti ti-star"></i>
                          </span>
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
                          <span className="ratting-color">
                            <i class="ti ti-star"></i>
                          </span>
                        </li>
                        <li class="list-inline-item">
                          <span className="ratting-color">
                            <i class="ti ti-star"></i>
                          </span>
                        </li>
                        <li class="list-inline-item">
                          <span className="ratting-color">
                            <i class="ti ti-star"></i>
                          </span>
                        </li>
                        <li class="list-inline-item">
                          <span className="ratting-color">
                            <i class="ti ti-star"></i>
                          </span>
                        </li>
                        <li class="list-inline-item">
                          <span className="ratting-color">
                            <i class="ti ti-star"></i>
                          </span>
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
                          <span className="ratting-color">
                            <i class="ti ti-star"></i>
                          </span>
                        </li>
                        <li class="list-inline-item">
                          <span className="ratting-color">
                            <i class="ti ti-star"></i>
                          </span>
                        </li>
                        <li class="list-inline-item">
                          <span className="ratting-color">
                            <i class="ti ti-star"></i>
                          </span>
                        </li>
                        <li class="list-inline-item">
                          <span className="ratting-color">
                            <i class="ti ti-star"></i>
                          </span>
                        </li>
                        <li class="list-inline-item">
                          <span className="ratting-color">
                            <i class="ti ti-star"></i>
                          </span>
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

      {/* Call to action  */}
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
    </div>
  );
}
