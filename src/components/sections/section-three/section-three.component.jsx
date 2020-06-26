import React from "react";
import { Link } from "react-router-dom";

import IconComponent from "../../icon/icon.component";
import { ReactComponent as HomeExpertiseIcon } from "../../../assets/images/home-expertise.svg";
import { ReactComponent as HomeHygieneIcon } from "../../../assets/images/home-hygiene.svg";
import { ReactComponent as HomeLabIcon } from "../../../assets/images/home-lab.svg";
import { ReactComponent as HomeRetentionIcon } from "../../../assets/images/home-retention.svg";

import "./section-three.styles.scss";

export default function SectionThreeComponent() {
  return (
    <section className="section-container section-three ">
      <div className="row d-flex justify-content-between mx-0">
        <div className="col-md-6 text-left d-flex align-items-center justify-content-center">
          <div className="left-container content col-md-5 ">
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
        <div className="right-container  col-md-6 light-background d-flex flex-wrap align-items-center ">
          <div className=" icon-wrapper">
            <IconComponent className="home-expertise">
              <HomeExpertiseIcon width={80} />
            </IconComponent>
            <IconComponent className="home-hygiene">
              <HomeHygieneIcon width={80} />
            </IconComponent>
            <IconComponent className="home-retention">
              <HomeRetentionIcon width={80} />
            </IconComponent>
            <IconComponent className="home-lab">
              <HomeLabIcon width={80} />
            </IconComponent>
          </div>
        </div>
      </div>
    </section>
  );
}
