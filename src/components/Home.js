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

import client1 from "../assets/client-1-gray.png";
import client2 from "../assets/client-2-gray.png";
import client3 from "../assets/client-3-gray.png";
import client4 from "../assets/client-4-gray.png";

import heroanimation1 from "../assets/hero-animation-01.svg";
import heroanimation2 from "../assets/hero-animation-02.svg";
import heroanimation3 from "../assets/hero-animation-03.svg";
import heroanimation4 from "../assets/hero-animation-04.svg";

import clients1 from "../assets/client-1.jpg";
import clients2 from "../assets/client-2.jpg";
import clients3 from "../assets/client-3.jpg";
import clients4 from "../assets/client-4.jpg";

import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

import bgwave from "../assets/bg-wave.svg";

import "../App.css";

export default function Home() {
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
    infinite: true,
    speed: 2000, // Adjust speed of slide transition
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <>
      <div classNameName="main">
        <section
          className="hero-section pt-100 background-img"
          // style="background: url('img/hero-bg-4.jpg')no-repeat center center / cover"
        >
          <div className="container">
            <div className="row align-items-center justify-content-between pt-5 pb-5">
              <div className="col-md-12 col-lg-6">
                <div className="hero-content-left text-white">
                  <h1 className="text-white">
                    Transforming Businesses Through Digital Excellence{" "}
                  </h1>
                  <p className="lead">
                  Unlock the future of business with transformative digital excellence that drives success.{" "}
                  </p>

                  <a href="#" className="btn solid-btn btn-primary">
                    Drop your Query{" "}
                  </a>

                  <div className="client-section-wrap mt-5">
                    <p>Trusted by companies like: </p>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <img
                          src={client1}
                          width="85"
                          alt="client1"
                          className="img-fluid"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          src={client2}
                          width="85"
                          alt="client2"
                          className="img-fluid"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          src={client3}
                          width="85"
                          alt="client3"
                          className="img-fluid"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          src={client4}
                          width="85"
                          alt="client4"
                          className="img-fluid"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-5">
                <div className="hero-animation-img">
                  <img
                    className="img-fluid d-block animation-one"
                    src={heroanimation4}
                    alt="animation image"
                  />
                  <img
                    className="img-fluid d-none d-lg-block animation-two"
                    src={heroanimation1}
                    alt="animation image"
                    width="120"
                  />
                  <img
                    className="img-fluid d-none d-lg-block animation-three"
                    src={heroanimation2}
                    alt="animation image"
                    width="120"
                  />
                  <img
                    className="img-fluid d-none d-lg-block animation-four"
                    src={heroanimation3}
                    alt="animation image"
                    width="230"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-img">
            <img src={bgwave} alt="wave shape" className="img-fluid" />
          </div>
        </section>
      </div>

      <br />
      <br />
      <br />

      {/* Dynamic Design  */}

      {/* <section id="about" className="about-us ptb-100 gray-light-bg"> */}
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="about-content-left">
              <h2>Digital your Business to Internationalized Standard </h2>
              <p className="lead" align="justify">
              To empower businesses with innovative digital solutions that enable seamless international expansion, fostering growth and success in the global economy.{" "}
              </p>

              <div className="single-feature my-4">
                <div className="d-flex align-items-center mb-2">
                  <span className="rounded mr-3 icon primary-bg text-white">
                    <i class="ti ti-alarm-clock"></i>
                  </span>

                  <h5 className="mb-0">Comprehensive Digital Transformation </h5>
                </div>
                <p align="justify">
                We provide end-to-end digital transformation services tailored to your business needs. From initial consultation to implementation, we ensure your business is equipped with the latest technology and strategies to compete on a global scale.{" "}
                </p>
              </div>
              <div className="single-feature my-4">
                <div className="d-flex align-items-center mb-2">
                  <span className="rounded mr-3 icon primary-bg text-white">
                    <i class="ti ti-alarm-clock"></i>
                  </span>
                  <h5 className="mb-0"> International Compliance and Standards </h5>
                </div>
                <p align="justify">
                Navigating the complexities of international regulations can be challenging. Our team of experts ensures your business adheres to all relevant international standards, including GDPR, ISO certifications, and more, making your transition smooth and hassle-free.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="counter">
              <div className="single-card box-animation-1 secondary-bg text-white">
                <span className="color-primary">
                  <i class="ti ti-medall-alt"></i>
                </span>
                <h3>Digital </h3>
                <p>Transformation </p>
              </div>
              <div className="single-card box-animation-2 icon-color-1">
                <span>
                  <i class="ti ti-headphone-alt"></i>
                </span>
                <h3>Custom </h3>
                <p>Software Solutions </p>
              </div>
              <div className="single-card box-animation-3 icon-color-2">
                <span>
                  <i class="ti ti-cup"></i>
                </span>
                <h3>Scalable </h3>
                <p>Technology Solutions </p>
              </div>
              <div className="single-card box-animation-4 primary-bg text-white">
                <span className="color-secondary">
                  <i class="ti ti-user"></i>
                </span>
                <h3>Business </h3>
                <p>Process Automation </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </section> */}

      <br />
      <br />

      {/* Great Solution for Business */}

      <section className="imageblock-section switchable switchable-content gray-light-bg">
        <div className="imageblock-section-img col-lg-5 col-md-5">
          <div
            className="background-image-holder"
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

      <br />
      <br />

      {/* We Provide Best Services */}

      <section id="services" className="our-services-section ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-9 col-lg-8">
              <div className="section-heading text-center mb-5">
                <h2>We Provide Best Services for You </h2>
                <p className="lead" align="justify">
                At Techness Solutions, we are committed to delivering top-notch IT solutions tailored to your unique business needs. Our goal is to empower your business with the latest technology, ensuring you stay ahead in today’s competitive landscape.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <div className="features-box p-4">
                <div className="features-box-icon">
                  <span className="icon-md color-primary">
                    <i class="ti ti-panel"></i>
                  </span>
                </div>
                <div className="features-box-content">
                  <h5>Business Web Applications </h5>
                  <p align="justify">
                  We specialize in developing sophisticated business web applications that drive efficiency, and boost your business growth. Our team of experienced developers, designers, and strategists work collaboratively to deliver tailor-made solutions that meet your specific business needs.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="features-box p-4">
                <div className="features-box-icon">
                  <span className="icon-md color-primary">
                    <i class="ti ti-thumb-up"></i>
                  </span>
                </div>
                <div className="features-box-content">
                  <h5>Mobile Applications </h5>
                  <p align="justify">
                  We specialize in developing custom mobile applications tailored to meet the unique needs of our clients. Whether you require a native iOS, Android, or cross-platform solution, our team of experienced developers is equipped to deliver high-quality mobile apps that exceed your expectations.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="features-box p-4">
                <div className="features-box-icon">
                  <span className="icon-md color-primary">
                    <i class="ti ti-mouse-alt"></i>
                  </span>
                </div>
                <div className="features-box-content">
                  <h5>Business Websites  </h5>
                  <p align="justify">
                   Our team of experts is dedicated to delivering cutting-edge websites that not only captivate your audience but also drive results. From elegant design to seamless functionality, we ensure your online presence stands out in today's competitive landscape. Let us transform your ideas into reality and elevate your brand to new heights. Partner with us for a digital journey that exceeds expectations.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="features-box p-4">
                <div className="features-box-icon">
                  <span className="icon-md color-primary">
                    <i class="ti ti-timer"></i>
                  </span>
                </div>
                <div className="features-box-content">
                  <h5>Ecommerce Websites</h5>
                  <p align="justify">
                  With our expertise in web development, we create seamless online shopping experiences that drive sales and customer engagement. From intuitive user interfaces to secure payment gateways, we ensure your website stands out in the digital marketplace. Our team is dedicated to delivering scalable solutions that grow with your business, backed by cutting-edge technology and innovative design. {" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="features-box p-4">
                <div className="features-box-icon">
                  <span className="icon-md color-primary">
                    <i class="ti ti-harddrives"></i>
                  </span>
                </div>
                <div className="features-box-content">
                  <h5>Cloud Developement </h5>
                  <p align="justify">
                  Our expert team ensures seamless integration, security, and performance for your cloud-based applications. Explore our range of services, including AWS, Azure, and Google Cloud, to drive innovation and efficiency in your organization. Let us guide you through the cloud journey, from initial planning to ongoing support, maximizing your ROI every step of the way. Trust us to elevate your business to new heights in digital era.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="features-box p-4">
                <div className="features-box-icon">
                  <span className="icon-md color-primary">
                    <i class="ti ti-cup"></i>
                  </span>
                </div>
                <div className="features-box-content">
                  <h5>Data Analytics </h5>
                  <p align="justify">
                  Unlock the power of data with our comprehensive analytics solutions tailored for your IT needs. From extracting valuable insights to predicting trends, our team harnesses cutting-edge tools and techniques to drive informed decision-making. Whether it's optimizing operations or enhancing customer experiences, our analytics services empower your business to thrive in today's data-driven world. {" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <br />
      <br />

      <section className="testimonial-section pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-9 col-lg-8">
              <div className="section-heading mb-5 text-center">
                <h2>Testimonials What Clients Say </h2>
                <p className="lead">
                  Rapidiously _____ transparent internal or "organic" _______
                  whereas resource sucking e-business. Conveniently innovate
                  compelling ________.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <Slider {...testimonials} className="testimonial_slide">
                <div className="testimonial_wrap">
                  <div className="testimonial-single shadow-sm gray-light-bg rounded p-4">
                    <blockquote>
                      Assertively procrastinate distributed _____________
                      whereas equity invested intellectual _______ everything
                      energistically underwhelm proactive.
                    </blockquote>
                    <div className="client-ratting mt-2">
                      <ul className="list-inline client-ratting-list">
                        <li className="list-inline-item">
                          <span className="ratting-color">
                            <i class="ti ti-star"></i>
                          </span>
                        </li>
                        <li className="list-inline-item">
                          <span className="ratting-color">
                            <i class="ti ti-star"></i>
                          </span>
                        </li>
                        <li className="list-inline-item">
                          <span className="ratting-color">
                            <i class="ti ti-star"></i>
                          </span>
                        </li>
                        <li className="list-inline-item">
                          <span className="ratting-color">
                            <i class="ti ti-star"></i>
                          </span>
                        </li>
                        <li className="list-inline-item">
                          <span className="ratting-color">
                            <i class="ti ti-star"></i>
                          </span>
                        </li>
                      </ul>
                      <h6 className="font-weight-bold">
                        5.0{" "}
                        <small className="font-weight-lighter">BizBite </small>
                      </h6>
                    </div>
                  </div>
                  <div className="client-info-wrap d-flex align-items-center mt-5">
                    <div className="client-img mr-3">
                      <img
                        src={clients1}
                        alt="client"
                        width="60"
                        className="img-fluid rounded-circle shadow-sm"
                      />
                    </div>
                    <div className="client-info">
                      <h5 className="mb-0">Austin Cesar </h5>
                      <p className="mb-0">ThemeTags </p>
                    </div>
                  </div>
                </div>
                <div className="testimonial_wrap">
                  <div className="testimonial-single shadow-sm gray-light-bg rounded p-4">
                    <blockquote>
                      Intrinsicly facilitate functional ___________ without
                      next-generation meta-services. Compellingly _____________
                      worldwide users vis-a-vis enterprise ____ practices.
                    </blockquote>
                    <div className="client-ratting mt-2">
                      <ul className="list-inline client-ratting-list">
                        <li className="list-inline-item">
                          <span className="ratting-color">
                            <i class="ti ti-star"></i>
                          </span>
                        </li>
                        <li className="list-inline-item">
                          <span className="ratting-color">
                            <i class="ti ti-star"></i>
                          </span>
                        </li>
                        <li className="list-inline-item">
                          <span className="ratting-color">
                            <i class="ti ti-star"></i>
                          </span>
                        </li>
                        <li className="list-inline-item">
                          <span className="ratting-color">
                            <i class="ti ti-star"></i>
                          </span>
                        </li>
                        <li className="list-inline-item">
                          <span className="ratting-color">
                            <i class="ti ti-star"></i>
                          </span>
                        </li>
                      </ul>
                      <h6 className="font-weight-bold">
                        5.0{" "}
                        <small className="font-weight-lighter">BizBite </small>
                      </h6>
                    </div>
                  </div>
                  <div className="client-info-wrap d-flex align-items-center mt-5">
                    <div className="client-img mr-3">
                      <img
                        src={clients2}
                        alt="client"
                        width="60"
                        className="img-fluid rounded-circle shadow-sm"
                      />
                    </div>
                    <div className="client-info">
                      <h5 className="mb-0">Pirtle Karol </h5>
                      <p className="mb-0">ThemeTags </p>
                    </div>
                  </div>
                </div>
                <div className="testimonial_wrap">
                  <div className="testimonial-single shadow-sm gray-light-bg rounded p-4">
                    <blockquote>
                      Interactively grow backend _________ through one
                      paradigms. Distinctively ___ communicate efficient
                      information without _________ meta-services.
                    </blockquote>
                    <div className="client-ratting mt-2">
                      <ul className="list-inline client-ratting-list">
                        <li className="list-inline-item">
                          <span className="ratting-color">
                            <i class="ti ti-star"></i>
                          </span>
                        </li>
                        <li className="list-inline-item">
                          <span className="ratting-color">
                            <i class="ti ti-star"></i>
                          </span>
                        </li>
                        <li className="list-inline-item">
                          <span className="ratting-color">
                            <i class="ti ti-star"></i>
                          </span>
                        </li>
                        <li className="list-inline-item">
                          <span className="ratting-color">
                            <i class="ti ti-star"></i>
                          </span>
                        </li>
                        <li className="list-inline-item">
                          <span className="ratting-color">
                            <i class="ti ti-star"></i>
                          </span>
                        </li>
                      </ul>
                      <h6 className="font-weight-bold">
                        5.0{" "}
                        <small className="font-weight-lighter">BizBite </small>
                      </h6>
                    </div>
                  </div>
                  <div className="client-info-wrap d-flex align-items-center mt-5">
                    <div className="client-img mr-3">
                      <img
                        src={clients3}
                        alt="client"
                        width="60"
                        className="img-fluid rounded-circle shadow-sm"
                      />
                    </div>
                    <div className="client-info">
                      <h5 className="mb-0">Aminul Islam </h5>
                      <p className="mb-0">ThemeTags </p>
                    </div>
                  </div>
                </div>
                <div className="testimonial_wrap">
                  <div className="testimonial-single shadow-sm gray-light-bg rounded p-4">
                    <blockquote>
                      Intrinsicly facilitate functional ___________ without
                      next-generation meta-services. Compellingly _____________
                      worldwide users vis-a-vis enterprise ____ practices.
                    </blockquote>
                    <div className="client-ratting mt-2">
                      <ul className="list-inline client-ratting-list">
                        <li className="list-inline-item">
                          <span className="ratting-color">
                            <i class="ti ti-star"></i>
                          </span>
                        </li>
                        <li className="list-inline-item">
                          <span className="ratting-color">
                            <i class="ti ti-star"></i>
                          </span>
                        </li>
                        <li className="list-inline-item">
                          <span className="ratting-color">
                            <i class="ti ti-star"></i>
                          </span>
                        </li>
                        <li className="list-inline-item">
                          <span className="ratting-color">
                            <i class="ti ti-star"></i>
                          </span>
                        </li>
                        <li className="list-inline-item">
                          <span className="ratting-color">
                            <i class="ti ti-star"></i>
                          </span>
                        </li>
                      </ul>
                      <h6 className="font-weight-bold">
                        5.0{" "}
                        <small className="font-weight-lighter">BizBite </small>
                      </h6>
                    </div>
                  </div>
                  <div className="client-info-wrap d-flex align-items-center mt-5">
                    <div className="client-img mr-3">
                      <img
                        src={clients4}
                        alt="client"
                        width="60"
                        className="img-fluid rounded-circle shadow-sm"
                      />
                    </div>
                    <div className="client-info">
                      <h5 className="mb-0">Pirtle Karol </h5>
                      <p className="mb-0">ThemeTags </p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
