import React from "react";
import "./about.css";
import Me from "./../assets/me2.jpg";
import Github from "./../assets/github.png";
import Linkedin from "./../assets/linkedin.png";
import { Link } from "react-router-dom";
export const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-title">
          <h3>ABOUT ME</h3>
        </div>
        <div className="about-info">
          <h1>MOHAMED MANKOUCHI </h1>
          <div className="about-image">
            <div className="about-image-links">
              <Link to={"https://github.com/MohamedMankouchi"} target="_blank">
                <img src={Github} alt="" />
              </Link>
              <Link
                to={"https://www.linkedin.com/in/mohamed-mankouchi-113009234/"}
                target="_blank"
              >
                <img src={Linkedin} alt="" />
              </Link>
            </div>
            <img src={Me} alt="" />
          </div>
          <div className="about-text">
            <p>
              I'm a <span>goal-oriented </span>full-stack developer with a
              passion for coding and a particular fondness for JavaScript. I
              thrive on the thrill of turning ideas into functional, elegant,
              and user-friendly web applications. My journey in the world of
              programming is a continuous quest to master my crafts and stay at
              the forefront of technology.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
