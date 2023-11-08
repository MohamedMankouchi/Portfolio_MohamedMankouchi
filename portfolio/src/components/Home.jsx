import React, { useEffect, useLayoutEffect, useRef } from "react";
import "./home.css";
import Me from "./../assets/me.jpeg";
import Me2 from "./../assets/me2.jpg";
import "./../App.css";
import Dots from "./../assets/side-dots.png";
import { gsap } from "gsap";
import Typewriter from "typewriter-effect";
import { LazyLoadImage } from "react-lazy-load-image-component";
export const Home = () => {
  const ref = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".me",
        2,
        {
          opacity: 0,
          ease: "expo.out",
        },
        {
          opacity: 0.7,
        }
      );
      gsap.fromTo(
        ".txt",
        1,
        {
          x: "-50%",
          ease: "power4.inOut",
        },
        {
          x: 0,
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

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
          <LazyLoadImage className="me" src={Me2} effect="opacity" />
          <div className="dotDiv">
            <img className="dots" src={Dots} loading="lazy" />
          </div>
          <h1 className="txt">
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
