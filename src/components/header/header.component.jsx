import React from "react";
import "./header.styles.scss";
export default function HeaderComponent() {
  return (
    <header className="hero-image">
      <a href="/" className="navbar-brand m-5">
        <img
          className="logo"
          src={require("../../assets/images/logo-white.svg")}
          alt="logo"
          width="250"
        />
      </a>
      <div className="hero-title hero-text text-center">
        <h1 className="large-outline-text-top">WELCOME TO</h1>
        <h1 className="hero-text-bottom">Rooster Grin</h1>
      </div>
    </header>
  );
}
