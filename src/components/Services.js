import React from "react";
import services1 from "../assets/service1.jpg";
import services2 from "../assets/service2.jpg";
import services3 from "../assets/service3.jpg";
import services7 from "../assets/service7.jpg";
import services5 from "../assets/service5.jpg";
import services6 from "../assets/service6.jpg";

export default function Services() {
  return (
    <section id="services" class="our-services-section ptb-50">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-9 col-lg-8">
            <div class="section-heading text-center text-center">
              <h2>Your One-Stop Hub for Digital Excellence </h2>
              <p class="lead">
              we offer a wide spectrum of services designed to empower your online presence and drive your business forward. From cutting-edge website development to cloud services, SEO, and digital promotions, we've got you covered.{" "}
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
                Your website is your digital storefront, and we craft beautiful, functional, and user-friendly websites that leave a lasting impression. Whether you need an elegant showcase or a robust e-commerce platform, we have the expertise to make it happen.{" "}
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
                Take your business to the next level with our web app development services. We design and build tailored web applications that streamline operations, enhance user experiences, and boost your efficiency.{" "}
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
                Stay connected with your audience on the go with our mobile app development expertise. Our mobile apps are designed for maximum engagement, performance, and user satisfaction.{" "}
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
                Leverage the power of the cloud to enhance scalability, security, and efficiency. Our cloud services development ensures your business is always ready for what's nex.{" "}
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
                Boost your online visibility and attract the right audience with our SEO services. We optimize your digital presence to ensure you rank higher in search results and grow your organic reach.{" "}
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
                Reach your target audience effectively with our digital promotion strategies. We create and implement campaigns that drive results, boost brand awareness, and increase your online influence.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
