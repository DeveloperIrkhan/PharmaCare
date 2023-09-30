import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="theme-2">
      <div className="footer-nav-div theme-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12  p-md-5 p-1">
              <div className="footer-brand">
                <NavLink className="navbar-brand" href="/">
                  <span>
                    <img
                      className="d-lg-block d-none Logo-small-style"
                      src="../Images/Logo.png"
                    />
                    <img
                      className="d-lg-none d-block Icon-small-style"
                      src="../Images/icon.png"
                    />
                  </span>
                </NavLink>
				<p className="col-12 f-18-n">We are committed to your success.At Pharmacare Billing Solution,
we take a comprehensive, all-inclusive approach to the hospital billing and collection process.</p>
              </div>
            </div>
            <div className="col-lg-6 col-12 p-md-5 p-1 d-flex justify-content-md-end justify-content-center">
              <div className="row">
				<div className="footer-content">
				<div className="h2">Contact Us</div>
			    <div className=""><i className="px-3 fa fa-phone"></i>	(+92) 333 123-7888</div>
			    <div className=""><i className="px-3 fa fa-phone"></i>	(+92) 123 123-7888</div>
			    <div className=""><i classNamess="px-3 fa-solid fa-location-dot"></i>	Islamabad (PAK)</div>
			    <div className=""><i classNames="px-3 fa-solid fa-envelope"></i>	 info@PCBSolution.com</div>
				<div className="">
				<p className="social-nav-title">Our Social Media Links</p>
			  <ul className="social-nav">
                <li>
                  <a
                    href=""
                    className="facebook"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="" className="twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="instagram"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="google-p">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="linkedin"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
				</div>
				</div>
			  
			  </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright-div theme-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="d-flex justify-content-end">
                The website is owned and operated by (PMBSolutions) &copy; 2023.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
