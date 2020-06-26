import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as InstagramIcon } from "../../assets/images/instagram.svg";
import { ReactComponent as FBIcon } from "../../assets/images/facebook.svg";

import "./footer.styles.scss";
export default function FooterComponent() {
  return (
    <section className="footer d-flex justify-content-center align-items-center">
      <div className="col text-center">
        <p>Follow us:</p>
        <div className="d-flex justify-content-center">
          <Link to="/test">
            <InstagramIcon width={60} className="social-icon mr-3" />
          </Link>
          <Link to="/test">
            <FBIcon
              width={60}
              className="social-icon ml-3"
              style={{ fill: "#613476" }}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
