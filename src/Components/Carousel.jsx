import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Carousel() {
  return (
        <section className="px-md-5 px-3 mx-md-4 mx-2 slider_section long_section">
      <div id="customCarousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container ">
              <div className="row">
                <div className="col-md-5">
                  <div className="detail-box">
                    <h1 className='text-white' data-aos="zoom-in-left">
                    EXTENDED <br/>
                    HEALTH SERVICES
                    </h1>
                    <p className='text-white f-18-n' data-aos="fade-down" data-aos-easing="linear"data-aos-duration="1500">
                    WHERE HEALTHCARE MEET PROFITIBILITY
                    </p>
                    <div className="" data-aos="zoom-in-right">
                      
              <NavLink className="button bg-blue text-white" to="contact-us">Book Apointmet</NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="img-box">
                    <img src="" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-md-5">
                <div className="detail-box">
                    <h1 className='text-white' data-aos="zoom-in-left">
                    EXTENDED <br/>
                    HEALTH SERVICES
                    </h1>
                    <p className='text-white f-18-n' data-aos="fade-down" data-aos-easing="linear"data-aos-duration="1500">
                    WHERE HEALTHCARE MEET PROFITIBILITY
                    </p>
                    <div className="" data-aos="zoom-in-right">
                      <a href="" className="button bg-blue text-white">
                        Book Apointmet
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="img-box">
                    <img src="" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container ">
              <div className="row">
                <div className="col-md-5">
                <div className="detail-box">
                    <h1 className='text-white' data-aos="zoom-in-left">
                    EXTENDED <br/>
                    HEALTH SERVICES
                    </h1>
                    <p className='text-white f-18-n' data-aos="fade-down" data-aos-easing="linear"data-aos-duration="1500">
                    WHERE HEALTHCARE MEET PROFITIBILITY
                    </p>
                    <div className="" data-aos="zoom-in-right">
                      <a href="" className="button bg-blue text-white">
                        Book Apointmet
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="img-box">
                    <img src="" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        {/* <ol className="carousel-indicators">
          <li data-target="#customCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#customCarousel" data-slide-to="1"></li>
          <li data-target="#customCarousel" data-slide-to="2"></li>
        </ol> */}
      </div>
    </section>
  )
}
