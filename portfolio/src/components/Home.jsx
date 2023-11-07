import React, { useLayoutEffect, useRef } from "react";
import "./home.css";
import Me from "./../assets/me.jpeg";
import Me2 from "./../assets/me2.jpg";
import "./../App.css";
import Dots from "./../assets/side-dots.png";
import { gsap } from "gsap";
import Typewriter from "typewriter-effect";

export const Home = () => {
  const ref = useRef();
  return (
    <>
      <div className="home" id="home" ref={ref}>
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
            that makes things for{" "}
            <Typewriter
              options={{
                strings: ["you", "web", "mobile"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>
      </div>
    </>
  );
};
