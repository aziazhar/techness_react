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

        {/* <section class="promo-section ptb-100">
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
        </section> */}

        {/* services  */}
        <section class="our-services-section ptb-100 gray-light-bg">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-9 col-lg-8">
                <div class="section-heading text-center mb-5">
                  <h2>We help drive your go faster</h2>
                  <p class="lead" align="justify">
                  We understand the speed of business today demands agility, innovation, precision. 
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
                    <h5 class="mb-2">Business Softwares</h5>
                    <p align="justify">
                    Custom software solutions designed to meet your specific business requirement needs. 
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
                    <h5 class="mb-2">Mobile Apps</h5>
                    <p align="justify">
                    Tailored mobile solutions to elevate your business. Continuous support to keep your app running smoothly. 
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
                    <h5 class="mb-2">Cloud Services</h5>
                    <p align="justify"> 
                    Leverage the power of the cloud with our scalable and secure cloud computing solutions.
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
                    <h5 class="mb-2">Data Analytics</h5>
                    <p align="justify"> 
                    Unlock actionable insights and drive business growth with our advanced data analytics solutions.
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
                    <h5 class="mb-2">Website development</h5>
                    <p align="justify"> 
                    Website involves addressing the needs and interests of your target audience while ensuring the content.
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
                    <h5 class="mb-2">Ecommerce Website  </h5>
                    <p align="justify"> 
                     Unlocknparalleled online shopping experience, offering a vast selection of products at competitive prices. 
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
                  {/* <p className="lead">
                    we offer a wide spectrum of services designed to empower
                    your online presence and drive your business forward. From
                    cutting-edge website development to cloud services, SEO, and
                    digital promotions, we've got you covered.{" "}
                  </p> */}
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
                    <h5 className="mb-2">Business Softwares  </h5>
                    <p align="justify">
                    Welcome to Techness Solutions, where we revolutionize the way businesses operate through innovative software solutions. Our suite of business software is designed to streamline operations, enhance productivity, and drive growth. Explore our offerings and discover how we can help your business thrive in today's competitive landscape.{" "}
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
                    <h5 className="mb-2">Mobile Apps </h5>
                    <p align="justify">
                    At Techness Solutions, we specialize in creating innovative mobile applications that cater to your business needs. Our team of experts is dedicated to providing top-notch mobile app development services, ensuring that your app is not only functional but also engaging and end user features with user-friendly.{" "}
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
                    <h5 className="mb-2">Cloud Services </h5>
                    <p align="justify">
                    At Techness Solutions, we offer a comprehensive suite of cloud services designed to empower your business with flexibility, efficiency, and scalability. Whether you're looking to migrate to the cloud, optimize your current infrastructure, or develop a new cloud-based application, we have the expertise and resources to meet your needs.{" "}
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
                    <h5 className="mb-2">Data Analytics</h5>
                    <p align="justify">
                    Welcome to Techness Solutions, where we harness the power of data to drive your business forward. Our comprehensive Data Analytics services are designed to transform raw data into actionable insights, helping you make informed decisions, optimize operations, and unlock new end opportunities.{" "}
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
                    <h5 className="mb-2">Website development </h5>
                    <p align="justify">
                    At Techness Solutions, we specialize in creating stunning, high-performance websites tailored to meet your unique business needs. Whether you're a small startup or an established enterprise, our team of experts is dedicated to delivering innovative web solutions that drive growth and enhance user engagement.{" "}
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
                    <h5 className="mb-2">Ecommerce Website </h5>
                    <p align="justify">
                    Welcome to Techness Solutions, your one-stop destination for cutting-edge technology products and exceptional service. At Techness Solutions, we are committed to bringing you the latest in consumer electronics, smart home devices, and innovative gadgets that enhance your everyday life.{" "}
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
                  <p class="lead" align="justify">
                  Accelerating your business with cutting-edge technology solutions. Streamline operations, amplify productivity, and stay ahead with our innovative content strategies.{" "}
                  </p>

                  <div class="single-feature my-4">
                    <div class="d-flex align-items-center mb-2">
                      <span class="rounded mr-3 icon primary-bg text-white">
                        <i class="ti ti-bar-chart"></i>
                      </span>
                      <h5 class="mb-0">SEO optimization </h5>
                    </div>
                    <p align="justify">
                    Your premier destination for cutting-edge technological solutions tailored to meet your every need. Our team of expert developers, engineers, and designers is dedicated to delivering innovative solutions that propel your business into the digital future. From bespoke software development to robust cybersecurity measures, we specialize in providing comprehensive services that ensure your technological infrastructure remains ahead of the curve. {" "}
                    </p>
                  </div>
                  <div class="single-feature my-4">
                    <div class="d-flex align-items-center mb-2">
                      <span class="rounded mr-3 icon primary-bg text-white">
                        <i class="ti ti-layout-media-left-alt"></i>
                      </span>
                      <h5 class="mb-0">Social marketing </h5>
                    </div>
                    <p align="justify">
                    Dive into a world of cutting-edge technology tailored to elevate your business to new heights. Our team of experts is dedicated to providing bespoke solutions designed to streamline your operations and amplify your success. From custom software development to robust cybersecurity solutions, we've got you covered. Stay ahead of the curve with our industry-leading insights and stay connected with our community of tech enthusiasts. {" "}
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
