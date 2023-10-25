import React from "react";
import "./about.css";
import Me from "./../assets/me2.jpg";
export const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-title">
          <h3>ABOUT ME</h3>
        </div>
        <div className="about-info">
          <img src={Me} alt="" />
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
