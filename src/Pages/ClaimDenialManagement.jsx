import React from "react";

function ClaimDenialManagement() {
  return (
    <div
      className="px-md-5 px-3 mx-md-4 mx-2 white-bg"
      data-aos="fade-right"
      data-aos-easing="ease-in-sine"
    >
      <div className="container contact_div">
        <h2 className="div-heading mt-5" data-aos="flip-left">
          Claim Denial Management
        </h2>
        <div className="row">
          <div className="col-md-8 col-10 m-auto">
            <img
              className="img-fluid border rounded-4"
              src="./Images/medical_1.jpg"
              alt=""
            />
            <div className="my-md-5 my-3">
              <p className="f-18-b" data-aos="fade-left">
                We provide a full range of medical billing services that also
                includes the prevention and recovery of denied claims. Our
                medical billers manage claim denials, recover outstanding
                balances and scrub medical claims with innovative solutions to
                make your reimbursement model more efficient & productive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClaimDenialManagement;
