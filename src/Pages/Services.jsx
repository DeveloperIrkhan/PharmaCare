import React from "react";
import { ServicesCard } from "../Components/ServicesCard";

const Services = () => {
  return (
    <div
      className="px-md-5 px-3 mx-md-4 mx-2 white-bg"
      data-aos="fade-right"
      data-aos-easing="ease-in-sine"
    >
      <div className="container">
        <h2 className="div-heading mt-5" data-aos="flip-left">
          What We Offers
        </h2>
        <div className="container contact_div">
          <div className="row">
          <ServicesCard title="Irfan" image="./Images/medical_1.jpg" description="asdfasdfsdfasdfasdfasdfasdasdfasdfsdfasdfasdfasdfasdasdfasdfsdfasdfasdfasdfasdasdfasdfsdfasdfasdfasdfasdasdfasdfsdfasdfasdfasdfasdasdfasdfsdfasdfasdfasdfasd"/>
          <ServicesCard title="Irfan" image="./Images/medical_1.jpg" description="asdfasdfasdfasdfasd"/>
          <ServicesCard title="Irfan" image="./Images/medical_1.jpg" description="asdfasdfasdfasdfasd"/>
          <ServicesCard title="Irfan" image="./Images/medical_1.jpg" description="asdfasdfasdfasdfasd"/>
          <ServicesCard title="Irfan" image="./Images/medical_1.jpg" description="asdfasdfasdfasdfasd"/>
          <ServicesCard title="Irfan" image="./Images/medical_1.jpg" description="asdfasdfasdfasdfasd"/>
          <ServicesCard title="Irfan" image="./Images/medical_1.jpg" description="asdfasdfasdfasdfasd"/>
          <ServicesCard title="Irfan" image="./Images/medical_1.jpg" description="asdfasdfasdfasdfasd"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
