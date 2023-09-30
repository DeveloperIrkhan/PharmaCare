import React from "react";
import { NavLink } from "react-router-dom";

export const NotSure = () => {
  return (
    <>
      <div
        className="p-background"
        data-aos="fade-right"  data-aos-delay="200"
        data-aos-easing="ease-in-sine">
        <div className="container">
            <div className="text-center">
                <h2 data-aos="zoom-in" data-aos-delay="700" className="text-white">Still Not Sure If Outsourcing Medical Billing Is Right for You?</h2>
                <p  data-aos="zoom-out" data-aos-delay="1000" className="f-18-n text-white py-lg-3 p-5">Many medical practices seem to be worried about this decision, but they should not be. Our team is well-equipped to answer to all of your queries. We’ve worked with hundreds of medical professionals, and they’ve all benefited from our services. Feel free to contact us if you have any questions.</p>

                <div className="" data-aos="zoom-in-right">
                      <NavLink to='contact-us' className="button big bg-orange text-white">
                        Contact Us
                      </NavLink>
                    </div>
            </div>
        </div>
      </div>
    </>
  );
};
