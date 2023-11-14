import React, { useEffect, useLayoutEffect, useRef } from "react";
import "./home.css";
import Me from "./../assets/me.jpeg";
import Me2 from "./../assets/me2.jpg";
import "./../App.css";
import Dots from "./../assets/side-dots.png";
import { gsap } from "gsap";
import Typewriter from "typewriter-effect";
import { useAnimation, useInView, motion } from "framer-motion";
export const Home = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  const item = {
    hidden: { opacity: 0, x: -150 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "smooth",
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  };

  const item2 = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.7,
      transition: {
        type: "smooth",
        delay: 0.5,
        ease: "easeIn",
      },
    },
  };

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
          <motion.img
            variants={item2}
            initial="hidden"
            animate={mainControls}
            className="me"
            src="https://res.cloudinary.com/dn1zsleur/image/upload/v1699548060/dgplhuba5g09z7t3eq3t.jpg"
            loading="lazy"
          />
          <div className="dotDiv">
            <img
              className="dots"
              src="https://res.cloudinary.com/dn1zsleur/image/upload/v1699548163/fbt0pxcd8vqsdc75jgtj.png"
              loading="lazy"
            />
          </div>
          <motion.h1
            animate={mainControls}
            initial="hidden"
            variants={item}
            className="txt"
          >
            Passionated <br />
            Full-Stack developer <br />
            that makes things for{" "}
            <Typewriter
              options={{
                strings: ["web", "mobile", "you"],
                autoStart: true,
                loop: true,
              }}
            />
          </motion.h1>
        </div>
      </div>
    </>
  );
};
