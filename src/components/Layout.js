import React from "react";

const backgroundImage = `linear-gradient(
  135deg,
  #00A68A 33%,
  #0A2463 100%
)`;

export const Layout = props => (
  <div className="px-12 h-screen" style={{ backgroundImage }} {...props} />
);
