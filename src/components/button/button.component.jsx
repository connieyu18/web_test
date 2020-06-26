import React from "react";
import "./button.styles.scss";
export default function ButtonComponent({ children }) {
  return <button className="btn mt-3">{children}</button>;
}
