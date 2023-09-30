import React from "react";
import Header from "../Components/Header";

const Contact = () => {
  return (
    <div
      className="px-md-5 px-3 mx-md-4 mx-2 white-bg"
      data-aos="fade-right"
      data-aos-easing="ease-in-sine"
    >
      <div className="container">
        <h2 className="div-heading mt-5" data-aos="flip-left">
          Meet Our Team
        </h2>
        <div className="container contact_div">
          <div className="row">
            <div className="col-md-6 col=10 mx-auto">
              <form>
                <div className="form-group">
                  <label for="fullName">Your Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    name="fullName"
                    value=""
                    onChange={InputEvent}
                    placeholder="Enter FullName"
                  />
                </div>
                <div className="form-group">
                  <label for="mobileNumber">Mobile No</label>
                  <input
                    type="text"
                    className="form-control"
                    id="mobileNumber"
                    name="mobileNumber"
                    value=""
                    onChange={InputEvent}
                    placeholder="Enter Mobile No"
                  />
                </div>
                <div className="form-group">
                  <label for="email">Your Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value=""
                    onChange={InputEvent}
                    placeholder="Enter Email Address"
                  />
                </div>
                <div className="form-group">
                  <label for="messaage">Your Message</label>
                  <textarea className="form-control" id="message" row='8'></textarea>
                </div>
                
                <button type="submit" className="button bg-blue text-white">
                  Send Us
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
