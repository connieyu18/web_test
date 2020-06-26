import React from "react";
import { Link } from "react-router-dom";
import "./section-one.styles.scss";

export default function SectionOneComponent() {
  return (
    <section className="section-container section-one ">
      <div className="row d-flex mx-0">
        <div className="col-md-6  text-left d-flex align-items-center justify-content-center">
          <div className="left-container col-md-5 col-sm-12 ">
            <h3 className="title-heading-dark">Lorem ipsum dolor sit amet.</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis,
              possimus aliquam facilis laudantium dicta delectus provident
              voluptatibus odio alias earum?
            </p>
            <Link className="link" to="/test">
              <i class="fa fa-chevron-right"></i> Lorem Ipsum{" "}
            </Link>
          </div>
        </div>
        <div className="right-container col-md-6"></div>
      </div>
      <div className="underline border border-purple w-25 mx-auto "></div>
    </section>
  );
}
