import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./loader.css";
import { gsap } from "gsap";
import CountUp from "react-countup";
export const Loader = () => {
  const ref = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".bar", 2.5, {
        delay: 3,
        height: 0,
        stagger: {
          amount: 0.5,
        },
        ease: "power4.inOut",
      });
      gsap.fromTo(
        ".counter",
        5,
        {
          scale: 0.5,
          ease: "power4.inOut",
        },
        {
          scale: 8,
          opacity: 0,
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);
  return (
    <>
      <div className="wrap" ref={ref}>
        <h1 className="counter">
          <CountUp start={0} duration={3.5} end={100} />
        </h1>
        <div className="overlay">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </>
  );
};
