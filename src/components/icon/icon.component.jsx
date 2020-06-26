import React from "react";

import "./icon.styles.scss";

export default function IconComponent({ children }) {
  return (
    <div className="icon-component col p-4 text-center">
      <div className="border m-3 rounded-circle p-3 icon-small-wrapper">
        {children}
      </div>
      <p className="heading-title-black text-uppercase">Lorem Ipsum</p>
    </div>
  );
}
