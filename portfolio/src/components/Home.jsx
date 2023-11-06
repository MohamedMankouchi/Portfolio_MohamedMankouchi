import React from "react";
import "./home.css";
import Me from "./../assets/me.jpeg";
import Me2 from "./../assets/me2.jpg";
import "./../App.css";
import Dots from "./../assets/side-dots.png";

export const Home = () => {
  const specialWord = "<web>";
  return (
    <>
      <div className="home" id="home">
        <div className="home-desc" style={{ position: "relative" }}>
          <p>
            Hi! I'M MOHAMED{" "}
            <span style={{ color: "#9d00ff", fontWeight: "bold" }}>
              MANKOUCHI
            </span>
          </p>
          <img className="me" src={Me2} />
          <div className="dotDiv">
            <img className="dots" src={Dots} />
          </div>
          <h1>
            Passionated <br />
            Full-Stack developer <br />
            that makes things for the{" "}
            <span className="specialWord">{specialWord}</span>
          </h1>
        </div>
      </div>
    </>
  );
};
