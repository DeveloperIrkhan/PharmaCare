import React from "react";
import { SpecialtiesCard } from "./SpecialtiesCard";

export const SpecialtiesComponent = () => {
  return (
    <div
      className="div-padding purple-bg"
      data-aos="fade-right"
      data-aos-easing="ease-in-sine"
    >
        <h2 className="container div-heading mt-5" data-aos="flip-left">
          Our Specialities
        </h2>
      <div className="container row m-auto">

        <SpecialtiesCard
          title="Cardology"
          pic="./Images/Icons_Cardiology.png"
          description="provides reliable medical billing services that helps you improve your practice’s revenue stream. Also, we apply the best billing practices to prevent your practice revenue cycle from any kind of error that can cause claim denials way forward. "
        />
        <SpecialtiesCard
          title="Urology"
          pic="./Images/Icons_Urology.png"
          description="Struggling through increasing claim denials and reducing revenue growth? Schedule a free medical billing audit with PharmaCare so we can examine your practice revenue cycle management, identify loopholes and eliminate errors to streamline your medical billing cycle. Get paid faster with our urology medical billing services."
        />
        <SpecialtiesCard
          title="Oncology"
          pic="./Images/Icons_Oncology.png"
          description="Oncology practice involves several complex diagnostic and medical procedures which require specialized knowledge for oncology medical billing and coding."
        />
        <SpecialtiesCard
          title="Radiology"
          pic="./Images/Icons_Radiology.png"
          description="Radiology medical billing experts to leverage specialized radiology billing expertise, professional guidance for your office administration and reliable support for radiology medical billing services."
        />
        <SpecialtiesCard
          title="Mental Health"
          pic="./Images/Icons_MentailHealth.png"
          description="It takes months and sometimes years to treat mental health and behavioral therapy patients. Therefore, it is quite hard for psychotherapists and rehabilitation centers to file and monitor the progress of individual claims of every patient consistently. "
        />
        <SpecialtiesCard
          title="Podiatry"
          pic="./Images/Icons_Podiatry.png"
          description="Podiatry is the field of medicine that deals with the diagnosis and treatment of diseases, injuries, and defects of the human foot. You help your patients move freely while we streamline your business operations with the most professional, reliable, and HIPAA-compliant podiatry billing services."
        />
        <SpecialtiesCard
          title="Psychiatric"
          pic="./Images/Icons_Psychiatric.png"
          description="We provide reliable, professional, and cost-effective psychiatric billing services and solutions. Millions of physicians trust our HIPAA-compliant psychiatric and mental billing services to increase revenue stream and profits."
        />
         <SpecialtiesCard
          title="Laboratory"
          pic="./Images/Icons_Laboratory.png"
          description="PharmaCare provides the best lab billing and coding services to all healthcare laboratories including pathology, toxicology, molecular, clinical and census entry labs."
        />
      </div>
    </div>
  );
};
