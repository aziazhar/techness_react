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
import business from "../assets/business.png";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

export default function Services() {
  const navigate = useNavigate();
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
    const { onClick } = props;
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
                    <i
                      class="ti ti-angle-right"
                      style={{
                        fontSize: "0.8rem",
                        padding: "0px 10px",
                        marginTop: "2px",
                      }}
                    />
                    <li class="active">Pages</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* promo section  */}

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

        {/* services  */}
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
                  <span class="primary-bg text-white icon rounded">
                    <i class="ti ti-bar-chart " style={{ color: "white" }}></i>
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
                  <span class="primary-bg text-white icon rounded">
                    <i
                      class="ti ti-layout-media-left-alt"
                      style={{ color: "white" }}
                    ></i>
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
                  <span class="primary-bg text-white icon rounded">
                    <i class="ti ti-email" style={{ color: "white" }}></i>
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
                  <span class="primary-bg text-white icon rounded">
                    <i class="ti ti-vector" style={{ color: "white" }}></i>
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
                  <span class="primary-bg text-white icon rounded">
                    <i class="ti ti-mobile" style={{ color: "white" }}></i>
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
                  <span class="primary-bg text-white icon rounded">
                    <i
                      class="ti ti-announcement"
                      style={{ color: "white" }}
                    ></i>
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

        {/* Services Details  */}

        <section
          id="services"
          style={{ marginTop: "3vw" }}
          className="our-services-section ptb-100"
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9 col-lg-8">
                <div className="section-heading text-center text-center">
                  <h2>Your One-Stop Hub for Digital Excellence </h2>
                  <p className="lead">
                    we offer a wide spectrum of services designed to empower
                    your online presence and drive your business forward. From
                    cutting-edge website development to cloud services, SEO, and
                    digital promotions, we've got you covered.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="single-services text-center mt-3 p-3">
                  <div className="about-content">
                    <img src={services1} alt="" className="img-fluid" />
                  </div>
                  <div className="feature-content pt-3">
                    <h5 className="mb-2">Website Development </h5>
                    <p align="justify">
                      Your website is your digital storefront, and we craft
                      beautiful, functional, and user-friendly websites that
                      leave a lasting impression. Whether you need an elegant
                      showcase or a robust e-commerce platform, we have the
                      expertise to make it happen.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-services text-center mt-3 p-3">
                  <div className="about-content">
                    <img src={services2} alt="" className="img-fluid" />
                  </div>
                  <div className="feature-content pt-3">
                    <h5 className="mb-2">Web App Development </h5>
                    <p align="justify">
                      Take your business to the next level with our web app
                      development services. We design and build tailored web
                      applications that streamline operations, enhance user
                      experiences, and boost your efficiency.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-services text-center mt-3 p-3">
                  <div className="about-content">
                    <img src={services3} alt="" className="img-fluid" />
                  </div>
                  <div className="feature-content pt-3">
                    <h5 className="mb-2">Mobile App Development </h5>
                    <p align="justify">
                      Stay connected with your audience on the go with our
                      mobile app development expertise. Our mobile apps are
                      designed for maximum engagement, performance, and user
                      satisfaction.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-services text-center mt-3 p-3">
                  <div className="about-content">
                    <img src={services7} alt="" className="img-fluid" />
                  </div>
                  <div className="feature-content pt-3">
                    <h5 className="mb-2">Cloud Services Development </h5>
                    <p align="justify">
                      Leverage the power of the cloud to enhance scalability,
                      security, and efficiency. Our cloud services development
                      ensures your business is always ready for what's nex.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-services text-center mt-3 p-3">
                  <div className="about-content">
                    <img src={services5} alt="" className="img-fluid" />
                  </div>
                  <div className="feature-content pt-3">
                    <h5 className="mb-2">SEO Development </h5>
                    <p align="justify">
                      Boost your online visibility and attract the right
                      audience with our SEO services. We optimize your digital
                      presence to ensure you rank higher in search results and
                      grow your organic reach.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-services text-center mt-3 p-3">
                  <div className="about-content">
                    <img src={services6} alt="" className="img-fluid" />
                  </div>
                  <div className="feature-content pt-3">
                    <h5 className="mb-2">Digital Promotion </h5>
                    <p align="justify">
                      Reach your target audience effectively with our digital
                      promotion strategies. We create and implement campaigns
                      that drive results, boost brand awareness, and increase
                      your online influence.{" "}
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
                  <h2>We help drive your business </h2>
                  <p class="lead">
                    Proactively syndicate open-source e-markets _____ low-risk
                    high-yield synergy. Professionally ________ visionary
                    technology before team ______ sources.{" "}
                  </p>

                  <div class="single-feature my-4">
                    <div class="d-flex align-items-center mb-2">
                      <span class="rounded mr-3 icon primary-bg text-white">
                        <i class="ti ti-bar-chart"></i>
                      </span>
                      <h5 class="mb-0">SEO optimization </h5>
                    </div>
                    <p>
                      where we use search _______ to market your product;
                      _______ paid methods (Pay per _____ Services). Quickly
                      communicate value-added ___________ vis-a-vis high
                      standards in ________ communicate wireless{" "}
                    </p>
                  </div>
                  <div class="single-feature my-4">
                    <div class="d-flex align-items-center mb-2">
                      <span class="rounded mr-3 icon primary-bg text-white">
                        <i class="ti ti-layout-media-left-alt"></i>
                      </span>
                      <h5 class="mb-0">Social marketing </h5>
                    </div>
                    <p>
                      While browsing Facebook or _______ or even Linkedin, you
                      ___ subjected to advertisements. Dramatically ____
                      top-line synergy globally provide ______ to scalable
                      infomediaries leverage ________ backend process.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="about-content-right">
                  <img src={business} alt="about us" class="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
