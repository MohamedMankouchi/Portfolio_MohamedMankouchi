import React, { useEffect, useRef } from "react";
import "./contact.css";
import { EarthCanvas } from "./canvas/EarthCanvas";
import StarsCanvas from "./canvas/Stars";
import Arrow from "./../assets/arrow.png";
import { useAnimation, useInView, motion } from "framer-motion";
export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  const containerTitle = {
    visible: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 1.5,
        type: "smooth",
      },
    },
    hidden: { opacity: 0.3 },
  };

  return (
    <>
      <div className="contact" id="contact">
        <motion.div
          animate={mainControls}
          variants={containerTitle}
          initial="hidden"
          className="contact-title"
        >
          <h3>CONTACT</h3>
        </motion.div>

        <StarsCanvas />
        <div ref={ref} className="flexContact">
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
