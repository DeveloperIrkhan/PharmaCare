import React, { useState } from "react";
import { AskQuestions } from "../JSFiles/AskQuestions";
import Accodion from "./Accodion";
export default function FAQs() {
  const [FAQQuestions, setFAQQuestions] = useState(AskQuestions);
  return (
    <div
      className="div-padding lightblue-bg"
      data-aos="fade-right"
      data-aos-easing="ease-in-sine"
    >
      <div className="container">
        <h2 className="div-heading mt-5" data-aos="flip-left">
          FAQs
        </h2>
        <div className="row text-center">
          <h3 className="PY-2 px-md-5 px-2">Have Queries About Our Medical Billing Solutions?</h3>
          <h5 className="PY-2 px-md-5 px-2">If you have any queries about how to outsource medical billing services in the US? Then this guide would help answer your queries.</h5>
        </div>
        <div className="my-lg-5 my-3">
          <div className="my-3 p-1">
            {FAQQuestions.map((currElement) => {
              const { id } = currElement;
              return <Accodion key={id} {...currElement} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
