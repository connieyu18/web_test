import React from "react";

import CarouselComponent from "../../carousel/carousel.component";
import "./testimonial.styles.scss";

export default function TestimonialComponent() {
  return (
    <section className="testimonial d-flex  align-items-center">
      <div className="mobile-top row d-flex justify-content-between mx-0">
        <div className="col-md-6 text-left d-flex align-items-center justify-content-center">
          <div className="left-container content col-md-5 ">
            <h3 className="title-heading-dark">Lorem ipsum dolor sit amet.</h3>
          </div>
        </div>
        <div className="carousel-container col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
          <CarouselComponent />
        </div>
      </div>
    </section>
  );
}
