import React from "react";

export default function Footer() {
  return (
    <div>
      <footer class="footer-section">
        <div class="footer-top">
          <div class="container">
            <div class="row">
              <div class="col-md-9">
                <div class="row footer-top-wrap">
                  <div class="col-md-3 col-sm-6">
                    <div class="footer-nav-wrap">
                      <h4>QUICK LINKS </h4>
                      <ul class="nav flex-column">
                        <li class="nav-item">
                          <a class="nav-link" href="#">
                            Make Appointment{" "}
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">
                            Department Services{" "}
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">
                            Our Case Studies{" "}
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">
                            Our Business Growth{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="footer-nav-wrap">
                      <h4>COMPANY </h4>
                      <ul class="nav flex-column">
                        <li class="nav-item">
                          <a class="nav-link" href="#">
                            About Our Services{" "}
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">
                            Our Affiliates Program{" "}
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">
                            View Our Blog{" "}
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">
                            Check Our Careers{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="footer-nav-wrap">
                      <h4>LEGAL </h4>
                      <ul class="nav flex-column">
                        <li class="nav-item">
                          <a class="nav-link" href="#">
                            Legal Information{" "}
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">
                            Privacy Policy{" "}
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">
                            Report Abuse{" "}
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">
                            Terms of Service{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="footer-nav-wrap">
                      <h4>SUPPORT </h4>
                      <ul class="nav flex-column">
                        <li class="nav-item">
                          <a class="nav-link" href="#">
                            Contact{" "}
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">
                            Knowledge Base{" "}
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">
                            Forums{" "}
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">
                            System Status{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="row footer-top-wrap">
                  <div class="col-12">
                    <div class="footer-nav-wrap">
                      <h4>GET IN TOUCH </h4>
                      <ul class="get-in-touch-list">
                        <li class="d-flex align-items-center py-2">
                          <span>
                            <i class="ti ti-location-pin"></i>
                          </span>{" "}
                          1234 Street Name, ____ Name, USA{" "}
                        </li>
                        <li class="d-flex align-items-center py-2">
                          <span>
                            <i class="ti ti-email"></i>
                          </span>{" "}
                          you@domain.com{" "}
                        </li>
                        <li class="d-flex align-items-center py-2">
                          <span>
                            <i class="ti ti-mobile"></i>
                          </span>{" "}
                          (123) 456-7890 - (123) 456-7890{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom gray-light-bg py-2">
          <div class="container">
            <div class="row align-items-center justify-content-between">
              <div class="col-md-5 col-lg-5">
                <p class="copyright-text pb-0 mb-0">
                  Copyrights © 2022. All rights reserved
                  <a href="#" target="_blank">
                    {" "}
                    Techness Solutions
                  </a>
                </p>
              </div>
              <div class="col-md-7 col-lg-6 d-none d-md-block d-lg-block">
                <div class="social-nav text-right">
                  <ul class="list-unstyled social-list mb-0">
                    <li class="list-inline-item tooltip-hover">
                      <a href="#" class="rounded">
                        <i class="ti ti-facebook" aria-hidden="true"></i>
                      </a>
                      <div class="tooltip-item">Facebook </div>
                    </li>
                    <li class="list-inline-item tooltip-hover">
                      <a href="#" class="rounded">
                        <i class="ti ti-twitter" aria-hidden="true"></i>
                      </a>
                      <div class="tooltip-item">Twitter </div>
                    </li>
                    <li class="list-inline-item tooltip-hover">
                      <a href="#" class="rounded">
                        <i class="ti ti-linkedin" aria-hidden="true"></i>
                      </a>
                      <div class="tooltip-item">Linkedin </div>
                    </li>
                    <li class="list-inline-item tooltip-hover">
                      <a href="#" class="rounded">
                        <i class="ti ti-dribbble" aria-hidden="true"></i>
                      </a>
                      <div class="tooltip-item">Instagram</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
