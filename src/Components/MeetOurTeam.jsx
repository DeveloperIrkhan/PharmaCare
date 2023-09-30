import React from "react";

export default function MeetOurTeam() {
  return (
    <div
      className="div-padding white-bg"
      data-aos="fade-right"
      data-aos-easing="ease-in-sine"
    >
      <div className="container">
        <h2 className="div-heading mt-5" data-aos="flip-left">
          Meet Our Team
        </h2>
        <div className="row">
        <div className="col-md-4 col-12 my-lg-3 my-5" data-aos="fade-left" data-aos-easing="ease-in-sine">
            <div className="Teamcard">
              <div className="imgcontainer">
                <img src="./Images/Team/TeamMember_1.jpeg" alt="" />
                <div className="teamcontaent">
                  <h2>IrfanShah</h2>
                  <p>CEO</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 my-lg-3 my-5"  data-aos="fade-down" data-aos-easing="ease-in-sine">
            <div className="Teamcard">
              <div className="imgcontainer">
                <img src="./Images/Team/TeamMember_1.jpeg" alt="" />
                <div className="teamcontaent">
                <h2>IrfanShah</h2>
                  <p>Marketing Manager</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 my-lg-3 my-5"  data-aos="fade-right" data-aos-easing="ease-in-sine">
            <div className="Teamcard">
              <div className="imgcontainer">
                <img src="./Images/Team/TeamMember_1.jpeg" alt="" />
                <div className="teamcontaent">
                <h2>IrfanShah</h2>
                  <p>Software Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
