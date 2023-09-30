import React from "react";
import Carousel from "./Carousel";
import WhoWeAre from "./WhoWeAre";
import Ourservices from "./Ourservices";
import { NotSure } from "./NotSure";
import MeetOurTeam from "./MeetOurTeam";
import FAQs from "./FAQs";
import { SpecialtiesComponent } from "./OurSpecialties/SpecialtiesComponent";

export const Home = () => {
  return (
    <div>
      <Carousel />
      <WhoWeAre />
      <Ourservices />
      <NotSure />
      {/* <MeetOurTeam /> */}
      <FAQs />
      <SpecialtiesComponent />
    </div>
  );
};
