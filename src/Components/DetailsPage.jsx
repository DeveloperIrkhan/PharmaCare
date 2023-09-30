import React from "react";

function DetailsPage(props) {
  return (
    <div
      className="px-md-5 px-3 mx-md-4 mx-2 white-bg"
      data-aos="fade-right"
      data-aos-easing="ease-in-sine"
    >
      <div className="container">
        <h2 className="div-heading mt-5" data-aos="flip-left">
          Details
          {props.title}
        </h2>
        <div className="container contact_div">
            
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
