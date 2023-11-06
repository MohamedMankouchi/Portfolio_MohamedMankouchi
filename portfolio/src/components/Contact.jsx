import React from "react";
import "./contact.css";
import { EarthCanvas } from "./canvas/EarthCanvas";
import StarsCanvas from "./canvas/Stars";
import Arrow from "./../assets/arrow.png";
export const Contact = () => {
  return (
    <>
      <div className="contact" id="contact">
        <div className="contact-title">
          <h3>CONTACT</h3>
        </div>

        <StarsCanvas />
        <div className="flexContact">
          <EarthCanvas />

          <div className="contact-form">
            <h3 style={{ opacity: "0.7", fontSize: "15px" }}>GET IN TOUCH</h3>
            <form action="">
              <label htmlFor="name">Your name</label>
              <input type="name" name="name" id="name" />
              <label htmlFor="email">Your email</label>
              <input type="email" name="email" id="email" />
              <label htmlFor="message ">Your message</label>
              <textarea type="text" name="message" id="message" />
            </form>
            <div className="send">
              <p>
                Send <span>message</span>
              </p>
              <img src={Arrow} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
