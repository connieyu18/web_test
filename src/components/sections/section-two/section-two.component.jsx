import React from "react";
import { Link } from "react-router-dom";

import "./section-two.styles.scss";
import ButtonComponent from "../../../components/button/button.component";

export default function SectionTwoComponent() {
  return (
    <section className="section-two d-flex">
      <div className="left-container col-md-6 text-left d-flex justify-content-center align-items-center">
        <div className="text-wrapper col-md-5 ">
          <h3 className="heading-title">Lorem ipsum</h3>
          <Link to="/test">
            <ButtonComponent>BUTTON BUTTON</ButtonComponent>
          </Link>
        </div>
      </div>
      <div className="right-container  col-ml-6 "></div>
    </section>
  );
}
