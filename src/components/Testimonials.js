import React from "react";
import { useNavigate } from "react-router-dom";

const Testimonials = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* contact us section start */}
      {/* <section id="contact" class="contact-us-section ptb-100 gray-light-bg">
         <div class="container">
             <div class="row justify-content-around">
                 <div class="col-12 pb-3 message-box d-none">
                     <div class="alert alert-danger"></div>
                 </div>
                 <div class="col-md-6">
                     <div class="contact-us-form white-bg rounded p-5">
                         <h4>Ready to get started? </h4>
                         <form action="#" method="POST" id="contactForm1" class="contact-us-form">
                             <div class="form-row">
                                 <div class="col-12">
                                     <div class="form-group">
                                         <input type="text" class="form-control" name="name" placeholder="Enter name" required="required" />
                                     </div>
                                 </div>
                                 <div class="col-12">
                                     <div class="form-group">
                                         <input type="email" class="form-control" name="email" placeholder="Enter email" required="required" />
                                     </div>
                                 </div>
                                 <div class="col-12">
                                     <div class="form-group">
                                         <textarea name="message" id="message" class="form-control" rows="7" cols="25" placeholder="Message"></textarea>
                                     </div>
                                 </div>
                                 <div class="col-12">
                                     <div class="form-check d-inline-flex align-items-center mb-2">
                                         <input type="checkbox" class="form-check-input" id="checkInfo" />
                                         <label class="form-check-label" for="checkInfo">Save my information for _____ use </label>
                                     </div>
                                 </div>
                                 <div class="col-sm-12 mt-3">
                                     <button type="submit" class="btn primary-solid-btn" id="btnContactUs">
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
                         <p class="lead">Feel free to get in touch with us. Whether you have questions, feedback, or require assistance with our services, we're here to help. Please fill out the form below, and we'll respondas soon as possible.. </p>

                         <hr class="my-5" />

                         <h5>Touch via </h5>
                        
                         <br />
                         <span>Phone: +91 8838166026, 9600295907 </span>  <br />
                         <span>Email:  <a href="mailto:aziazhar111996@gmail.com" class="link-color">aziazhar111996@gmail.com </a></span>

                     </div>
                 </div>
             </div>
         </div>
     </section> */}
      {/* contact us section end */}
      <div class="main">
        {/* <!--page header section start--> */}
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
                  <h1 class="text-white mb-1">Contact us</h1>
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
        {/* <!--page header section end-->

      <!--contact us section start--> */}
        <section class="contact-us-section ptb-100">
          <div class="container">
            <div class="row">
              <div class="col-12 pb-3 message-box d-none">
                <div class="alert alert-danger"></div>
              </div>
              <div class="col-md-9 col-lg-9">
                <div class="section-heading mb-4">
                  <h2>Reach us quickly</h2>
                  <p class="lead">
                    We provide profissional services ___ grow your business and
                    _________ sell digital product. Increase _____ by showing
                    true dynamics __ your website.
                  </p>
                </div>
              </div>
            </div>
            <div class="row justify-content-between align-items-center">
              <div class="col-md-6">
                <form
                  action="#"
                  method="POST"
                  id="contactForm1"
                  class="contact-us-form"
                >
                  <div class="row">
                    <div class="col-sm-6 col-12">
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
                    <div class="col-sm-6 col-12">
                      <div class="form-group">
                        <input
                          type="text"
                          name="company"
                          value=""
                          size="40"
                          class="form-control"
                          id="company"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6 col-12">
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
                    <div class="col-sm-6 col-12">
                      <div class="form-group">
                        <input
                          type="text"
                          name="phone"
                          value=""
                          class="form-control"
                          id="phone"
                          placeholder="Your Phone"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
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
                          Save my information for _____ use
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="row">
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
                <p class="form-message" />
              </div>
              <div class="col-md-5">
                <div class="contact-info-wrap">
                  <ul class="list-creative">
                    <li>
                      <dl class="list-terms-medium address">
                        <dt>Address</dt>
                        <dd>
                          <p>
                            212 Prospect Ave, Brooklyn, ___ York <br />
                            United States
                          </p>
                        </dd>
                      </dl>
                    </li>
                    <li>
                      <dl class="list-terms-medium phone">
                        <dt>Phones</dt>
                        <dd>
                          <ul class="list-comma">
                            <li>
                              Support:
                              <a href="tel:+1-800-700-6200">+1-800-700-6200 </a>
                            </li>
                            <li>
                              Sales:
                              <a href="tel:+1-800-955-4567">+1-800-955-4567 </a>
                            </li>
                          </ul>
                        </dd>
                      </dl>
                    </li>
                    <li>
                      <dl class="list-terms-medium email">
                        <dt>E-mails</dt>
                        <dd>
                          <ul class="list-comma">
                            <li>
                              Support:
                              <a href="mailto:support@yourdomain.com">
                                support@yourdomain.com
                              </a>
                            </li>
                            <li>
                              Query:
                              <a href="mailto:query@yourdomain.com">
                                query@yourdomain.com
                              </a>
                            </li>
                          </ul>
                        </dd>
                      </dl>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--contact us section end-->

      <!--google map start--> */}
        {/* <div class="google-map">
        <iframe
          src="../www.google.com/maps/embed_ff624b39.html"
          height="450"
          style={{border: 0}}
          allowfullscreen=""
        ></iframe>
      </div> */}
        {/* <!--google map end--> */}
      </div>
    </div>
  );
};

export default Testimonials;
