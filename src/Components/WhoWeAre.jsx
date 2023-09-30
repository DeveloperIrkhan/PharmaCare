import React from 'react'

export default function WhoWeAre() {
  return (
    <div className='px-md-5 px-3 mx-md-4 mx-2 white-bg' data-aos="fade-up">
        <div className="container d-flex py-md-5 py-3 my-md-4 my-2">
            <div className="col-md-6 py-5 col-12" data-aos="fade-right" data-aos-delay="300">
            <h2 className='div-heading mt-5' data-aos="zoom-in" data-aos-delay="400">Why Choose Us?</h2>
            <p className='f-18-n'>
            We are committed to your success.At Pharmacare Billing Solution,  <br/>
            we take a comprehensive, all-inclusive approach to the hospital billing 
            and collection process. Not only do we continuously update our staff on 
            changes in billing codes and payer procedures, but we also invest in the 
            latest medical billing technology to provide the best possible service....<br/>
            <span className='anchor-tag'>
            <a href='about-us'>read more <i className="fa-solid fa-chevron-right"></i></a>
            </span>
            </p>
            </div>
            <div className="col-md-6 d-lg-flex d-none" data-aos="flip-right" data-aos-delay="400">
                <span className='who-we-are-image-section w-100'>
                </span>
            </div>
        </div>
    </div>
  )
}
