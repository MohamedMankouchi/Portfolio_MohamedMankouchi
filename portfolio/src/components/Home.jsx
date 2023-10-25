import React from "react";
import "./home.css";
import { Decor } from "./Decor";
import Me from "./../assets/me.jpeg";
import Dots from "./../assets/side-dots.png";

export const Home = () => {
  const specialWord = "<web>";
  return (
    <>
      <div className="home">
        <p>
          Hi! I'M MOHAMED{" "}
          <span style={{ color: "#9d00ff", fontWeight: "bold" }}>
            MANKOUCHI
          </span>
        </p>
        <img className="me" src={Me} />
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
    </>
  );
};
