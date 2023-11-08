import React, { useEffect, useRef } from "react";
import "./about.css";
import Me from "./../assets/me.jpeg";
import Github from "./../assets/github.png";
import Linkedin from "./../assets/linkedin.png";
import { Link } from "react-router-dom";
import { inView, motion, useAnimation, useInView } from "framer-motion";
export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  const container = {
    visible: { opacity: 1 },
    hidden: { opacity: 1 },
  };

  const imageAnimation = {
    visible: {
      opacity: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      transition: {
        ease: "easeInOut",
        duration: 1,
        delay: 0.3,
      },
    },
    hidden: { opacity: 0 },
  };

  return (
    <>
      <div className="about" id="about">
        <div className="about-title">
          <h3>ABOUT ME</h3>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="about-info"
        >
          <div className="about-info--name">
            <h1>MOHAMED MANKOUCHI </h1>
          </div>
          <motion.div className="about-image">
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
            <motion.img
              variants={imageAnimation}
              initial="hidden"
              animate={mainControls}
              loading="lazy"
              src={Me}
              alt=""
              ref={ref}
            />
          </motion.div>

          <div className="about-image-links--desktop">
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
        </motion.div>
      </div>
    </>
  );
};
