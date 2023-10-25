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
        <h3>Hi! I'M MOHAMED MANKOUCHI</h3>
        <img className="me" src={Me} />
        <div className="dotDiv">
          <img className="dots" src={Dots} />
        </div>
        <h1>
          Passionated <br />
          Full-Stack developer <br />
          that makes things for the <span>{specialWord}</span>
        </h1>
      </div>
    </>
  );
};
