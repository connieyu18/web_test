import React, { useState, useEffect } from "react";

import HeaderComponent from "../../components/header/header.component";
import SectionOneComponent from "../../components/sections/section-one/section-one.component";
import SectionTwoComponent from "../../components/sections/section-two/section-two.component";
import SectionThreeComponent from "../../components/sections/section-three/section-three.component";
import SectionFourComponent from "../../components/sections/section-four/section-four.component";
import TestimonialComponent from "../../components/sections/testimonial/testimonial.component";
import FooterComponent from "../../components/footer/footer.component";

import "./home-page.styles.scss";

export default function HomePageComponent() {
  return (
    <div className="home-page-container ">
      <HeaderComponent />
      <SectionOneComponent />
      <SectionTwoComponent />
      <SectionThreeComponent />
      <SectionFourComponent />
      <TestimonialComponent />
      <FooterComponent />
    </div>
  );
}
