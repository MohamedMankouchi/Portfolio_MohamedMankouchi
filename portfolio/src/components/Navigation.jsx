import React from "react";
import "./navigation.css";
import Logo from "./../assets/logo.png";
export const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>

        <h3>Menu</h3>
      </div>
    </>
  );
};
