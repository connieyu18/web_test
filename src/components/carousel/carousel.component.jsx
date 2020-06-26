import React from "react";
import "./carousel.styles.scss";
export default function CarouselComponent() {
  return (
    <div className=" carousel container-xl">
      <div className="col-lg-8 col-sm-12 mx-auto">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-target="#myCarousel"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <p className="testimonial-name text-center">
                John Doe 08/08/2019
              </p>
              <p className="testimonial">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu
                sem tempor, varius quam at, luctus dui. Mauris magna metus,
                dapibus nec turpis vel, semper malesuada ante. Idac bibendum
                scelerisque non non purus. Suspendisse varius nibh non aliquet.
              </p>
            </div>
            <div className="carousel-item ">
              <p className="testimonial-name text-center">
                John Doe 08/08/2019
              </p>
              <p className="testimonial">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu
                sem tempor, varius quam at, luctus dui. Mauris magna metus,
                dapibus nec turpis vel, semper malesuada ante. Idac bibendum
                scelerisque non non purus. Suspendisse varius nibh non aliquet.
              </p>
            </div>
            <div className="carousel-item ">
              <p className="testimonial-name text-center">
                John Doe 08/08/2019
              </p>
              <p className="testimonial">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu
                sem tempor, varius quam at, luctus dui. Mauris magna metus,
                dapibus nec turpis vel, semper malesuada ante. Idac bibendum
                scelerisque non non purus. Suspendisse varius nibh non aliquet.
              </p>
              <p className="overview">
                <b>Paula Wilson</b>, Media Analyst
              </p>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#myCarousel"
            data-slide="prev"
          >
            <i className="fa fa-angle-left"></i>
          </a>
          <a
            className="carousel-control-next"
            href="#myCarousel"
            data-slide="next"
          >
            <i className="fa fa-angle-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
