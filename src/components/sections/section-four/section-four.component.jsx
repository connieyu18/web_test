import React from "react";
import { Link } from "react-router-dom";
import ButtonComponent from "../../../components/button/button.component";
import "./section-four.styles.scss";

export default function SectionFourComponent() {
  return (
    <section className=" section-four d-flex align-items-center ">
      <div className="container d-flex justify-content-end">
        <div className="right-container  col-ml-6  d-flex justify-content-center align-items-center "></div>

        <div className="left-container col-md-5 ">
          <h3 className="heading-title">Lorem ipsum dolor sit amet.</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis,
            possimus aliquam facilis laudantium dicta delectus provident
            voluptatibus odio alias earum?
          </p>
          <Link className="link" to="/test">
            <ButtonComponent>BUTTON BUTTON</ButtonComponent>
          </Link>
        </div>
      </div>
    </section>
  );
}
