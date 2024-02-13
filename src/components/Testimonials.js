import React from "react";

const Testimonials = () => {
  return (
    <div>
        {/* contact us section start */}
     <section id="contact" class="contact-us-section ptb-100 gray-light-bg">
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
     </section>
     {/* contact us section end */}

    
    </div>
  );
};

export default Testimonials;
