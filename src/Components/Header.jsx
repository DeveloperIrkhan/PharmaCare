import React from 'react'
import { NavLink } from 'react-router-dom'
import AboutUs from '../Pages/AboutUs'

export default function Header() {
  return (
    <div>
<div className='upper-banner d-lg-flex d-none'>
    <div className="col-6 d-flex align-items-center">
        <span className='px-4 timing-text'>Welcome to PharmaCare Billing Soulution LLC.</span>
    </div>
    <div className="col-6 d-flex align-items-center justify-content-end px-4">
        <div className='timing-text'>
            <span className='px-3'><i className='fa fa-envelope'></i>: info@PCBSolution.com</span>
            <span className='px-3'><i className='fa fa-phone'></i>: +92 333 123 4567</span>
            <span></span>
        </div>
    </div>
</div>

<header className="header_section long_section px-0">
    <nav className="navbar navbar-expand-lg custom_nav-container ">
      <div className="container">
      <NavLink className="navbar-brand" href="/">
        <span>
            <img className='d-lg-block d-none Logo-style' src='../Images/Logo.png'/>
            <img className='d-lg-none d-block Icon-style' src='../Images/icon.png'/>
        </span>
      </NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className=""></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="d-flex ml-md-auto flex-column flex-lg-row">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className={({ isActive }) => (isActive ? 'menu-active nav-link' : 'nav-link')} to="/">Home <span className="sr-only">(current)</span></NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className={({ isActive }) => (isActive ? 'menu-active nav-link' : 'nav-link')} to="Services"> Our Services</NavLink>
            </li> */}
            <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          OUR SERVICES
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <NavLink className={({ isActive }) => (isActive ? 'menu-active nav-link' : 'nav-link')} to="medical-coding">Medical Coding</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'menu-active nav-link' : 'nav-link')} to="credentialing-services">Credentialing Services</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'menu-active nav-link' : 'nav-link')} to="free-medical-coding">Medical Billing & Coding Audit</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'menu-active nav-link' : 'nav-link')} to="claim-denial-management">Claim Denial Management</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'menu-active nav-link' : 'nav-link')} to="medical-scribe-service">Medical Scribe Service</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'menu-active nav-link' : 'nav-link')} to="pre-authorization-services">Pre-Authorization Services</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'menu-active nav-link' : 'nav-link')} to="virtual-assistant-services">Virtual Assistant Services</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'menu-active nav-link' : 'nav-link')} to="eligibility-verification">Eligibility Verification</NavLink>

        </div>
      </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => (isActive ? 'menu-active nav-link' : 'nav-link')} to="contact-us"> Contact Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => (isActive ? 'menu-active nav-link' : 'nav-link')} to="about-us"> About Us</NavLink>
            </li>
            
          </ul>
        </div>
    </div>
      </div>
    </nav>
  </header>
    </div>
  )
}
