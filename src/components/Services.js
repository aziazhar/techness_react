import React from "react";
import services1 from "../assets/service1.jpg";
import services2 from "../assets/service2.jpg";
import services3 from "../assets/service3.jpg";
import services7 from "../assets/service7.jpg";
import services5 from "../assets/service5.jpg";
import services6 from "../assets/service6.jpg";
import sliderImg1 from "../assets/client-1.jpg";
import sliderImg2 from "../assets/client-2.jpg";
import sliderImg3 from "../assets/client-3.jpg";
import sliderImg4 from "../assets/client-4.jpg";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

export default function Services() {
  const navigate = useNavigate();
  const PrevArrow = (props) => {
    const { onClick, style } = props;
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
    // autoplaySpeed: 1000, // Adjust speed as needed
    infinite: true,
    speed: 2000, // Adjust speed of slide transition
    pauseOnHover: false,
    // dots: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <>
      <div class="main">
        <section
          class="hero-section background-img ptb-100"
          // style="
          //   background: url('img/hero-bg-1.jpg') no-repeat bottom center / cover
          //     fixed;
          // "
        >
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-8 col-lg-7">
                <div class="page-header-content text-white text-center pt-5">
                  <h1 class="text-white mb-1">Our services</h1>
                  <ul class="breadcrumb">
                    <li>
                      <a onClick={() => navigate("/")}>Home </a>
                    </li>
                    <i class="fa fa-angle-right headerIcon" />
                    <li class="active">Pages</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--page header section end-->

      <!--promo section start--> */}
        <section class="promo-section ptb-100">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8 col-md-9">
                <div class="section-heading text-center mb-5">
                  <h2>Why your business need ________?</h2>
                  <p class="lead">
                    Following _______ show advantages of adding ________ to your
                    lead pages, _____ and checkouts benchmark turnkey
                    ___________ whereas.
                  </p>
                </div>
              </div>
            </div>

            <div class="row equal">
              <div class="col-md-4 col-lg-4">
                <div class="single-promo single-promo-hover text-center gray-light-bg h-100">
                  <div>
                    <img
                      src={services6}
                      alt=""
                      class="img-fluid img-full-box"
                    />
                  </div>
                  <div class="p-4">
                    <h5>Convert traffic into sales</h5>
                    <p>
                      Increase sales by showing ____ dynamics of your website.
                      _____ your online store’s trust _____ Social Proof &
                      Urgency ___ your business.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-lg-4">
                <div class="single-promo single-promo-hover text-center gray-light-bg h-100">
                  <div>
                    <img
                      src={services2}
                      alt=""
                      class="img-fluid img-full-box"
                    />
                  </div>
                  <div class="p-4">
                    <h5>Increase store trust</h5>
                    <p>
                      Build your online store’s _____ using Social Proof &
                      _______. Realize importance of social _____ in customer’s
                      purchase decision.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-lg-4">
                <div class="single-promo single-promo-hover text-center gray-light-bg h-100">
                  <div>
                    <img
                      src={services7}
                      alt=""
                      class="img-fluid img-full-box"
                    />
                  </div>
                  <div class="p-4">
                    <h5>Growth guaranteed</h5>
                    <p>
                      Realize importance of social _____ in customer’s purchase
                      decision. ________ sales by showing true ________ of your
                      website.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--promo section end-->

      <!--our services section start--> */}
        <section class="our-services-section ptb-100 gray-light-bg">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-9 col-lg-8">
                <div class="section-heading text-center mb-5">
                  <h2>We help drive your ________ go faster</h2>
                  <p class="lead">
                    Energistically enhance user-centric e-markets ______
                    client-focused initiatives. ________________ reconceptualize
                    proactive intellectual top-line imperatives.
                  </p>
                </div>
              </div>
            </div>
            <div class="row no-gutters">
              <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="single-services single-feature-hover gray-light-bg single-feature text-center p-5 h-100">
                  <span class="ti-bar-chart primary-bg text-white icon rounded">
                    <i class="fa fa-bar-chart" style={{ color: "white" }}></i>
                  </span>
                  <div class="feature-content">
                    <h5 class="mb-2">Search engine optimization</h5>
                    <p>
                      where we use search _______ to market your product;
                      _______ paid methods (Pay per _____ (PPC) Services)
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="single-services single-feature-hover gray-light-bg single-feature text-center p-5 h-100">
                  <span class="ti-layout-media-left-alt primary-bg text-white icon rounded">
                    <i class="fa fa-desktop" style={{ color: "white" }}></i>
                  </span>
                  <div class="feature-content">
                    <h5 class="mb-2">Social media marketing</h5>
                    <p>
                      While browsing Facebook or _______ or even Linkedin, you
                      ___ subjected to advertisements.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="single-services single-feature-hover gray-light-bg single-feature text-center p-5 h-100">
                  <span class="ti-email primary-bg text-white icon rounded">
                    <i class="fa fa-envelope" style={{ color: "white" }}></i>
                  </span>
                  <div class="feature-content">
                    <h5 class="mb-2">Email marketing</h5>
                    <p>
                      Email marketing is one __ the most popular strategies
                      _______ by full-service digital marketing ________.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="single-services single-feature-hover gray-light-bg single-feature text-center p-5 h-100">
                  <span class="ti-vector primary-bg text-white icon rounded">
                    <i class="fa fa-globe" style={{ color: "white" }}></i>
                  </span>
                  <div class="feature-content">
                    <h5 class="mb-2">Creative Web design</h5>
                    <p>
                      Your website provides a _____ for interested users to
                      _____ more about business, your ________ and services.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="single-services single-feature-hover gray-light-bg single-feature text-center p-5 h-100">
                  <span class="ti-mobile primary-bg text-white icon rounded">
                    <i class="fa fa-mobile" style={{ color: "white" }}></i>
                  </span>
                  <div class="feature-content">
                    <h5 class="mb-2">Mobile app development</h5>
                    <p>
                      We are also working __ mobile App Development that __
                      skillful and in developing _ Mobile application
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="single-services single-feature-hover gray-light-bg single-feature text-center p-5 h-100">
                  <span class="ti-announcement primary-bg text-white icon rounded">
                  <i class="fa fa-bullhorn" style={{color: 'white'}}></i>
                  </span>
                  <div class="feature-content">
                    <h5 class="mb-2">Amazon affiliate marketing</h5>
                    <p>
                      Thrive was founded on ___ conviction that businesses can
                      ________ their competitors with a ______ website.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--our services section end-->

      <!--testimonial section start--> */}
        <section class="testimonial-section ptb-100">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-9 col-lg-8">
                <div class="section-heading mb-5 text-center">
                  <h2>Testimonials What Clients Say</h2>
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
                          5.0{" "}
                          <small class="font-weight-lighter">BizBite </small>
                        </h6>
                      </div>
                    </div>
                    <div class="client-info-wrap d-flex align-items-center mt-5">
                      <div class="client-img mr-3">
                        <img
                          src={sliderImg1}
                          alt="client"
                          width="60"
                          class="img-fluid rounded-circle shadow-sm"
                        />
                      </div>
                      <div class="client-info">
                        <h5 class="mb-0">Austin Cesar</h5>
                        <p class="mb-0">ThemeTags</p>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="testimonial-single shadow-sm gray-light-bg rounded p-4">
                      <blockquote>
                        Intrinsicly facilitate functional ___________ without
                        next-generation meta-services. Compellingly
                        _____________ worldwide users vis-a-vis enterprise ____
                        practices.
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
                          5.0{" "}
                          <small class="font-weight-lighter">BizBite </small>
                        </h6>
                      </div>
                    </div>
                    <div class="client-info-wrap d-flex align-items-center mt-5">
                      <div class="client-img mr-3">
                        <img
                          src={sliderImg2}
                          alt="client"
                          width="60"
                          class="img-fluid rounded-circle shadow-sm"
                        />
                      </div>
                      <div class="client-info">
                        <h5 class="mb-0">Pirtle Karol</h5>
                        <p class="mb-0">ThemeTags</p>
                      </div>
                    </div>
                  </div>
                  <div class="item">
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
                          5.0{" "}
                          <small class="font-weight-lighter">BizBite </small>
                        </h6>
                      </div>
                    </div>
                    <div class="client-info-wrap d-flex align-items-center mt-5">
                      <div class="client-img mr-3">
                        <img
                          src={sliderImg3}
                          alt="client"
                          width="60"
                          class="img-fluid rounded-circle shadow-sm"
                        />
                      </div>
                      <div class="client-info">
                        <h5 class="mb-0">Aminul Islam</h5>
                        <p class="mb-0">ThemeTags</p>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="testimonial-single shadow-sm gray-light-bg rounded p-4">
                      <blockquote>
                        Intrinsicly facilitate functional ___________ without
                        next-generation meta-services. Compellingly
                        _____________ worldwide users vis-a-vis enterprise ____
                        practices.
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
                          5.0{" "}
                          <small class="font-weight-lighter">BizBite </small>
                        </h6>
                      </div>
                    </div>
                    <div class="client-info-wrap d-flex align-items-center mt-5">
                      <div class="client-img mr-3">
                        <img
                          src={sliderImg4}
                          alt="client"
                          width="60"
                          class="img-fluid rounded-circle shadow-sm"
                        />
                      </div>
                      <div class="client-info">
                        <h5 class="mb-0">Pirtle Karol</h5>
                        <p class="mb-0">ThemeTags</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </section>
        {/* <!--testimonial section end--> */}
      </div>
    </>
  );
}
