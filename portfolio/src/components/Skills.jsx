import React, { useRef, useEffect } from "react";
import "./skills.css";
import { motion, useInView, useAnimation } from "framer-motion";
export const Skills = () => {
  const img = [
    {
      image:
        "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png",
    },
    {
      image: "https://www.svgrepo.com/download/354274/redux.svg",
    },
    {
      image:
        "https://miro.medium.com/v2/resize:fit:1400/1*elhu-42TzQEdsFjKDbQhhA.png",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png",
    },
    {
      image:
        "https://blog.rocketseat.com.br/content/images/size/w1000/2018/12/nodejs-vale-a-pena-vantagens.jpg",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968332.png",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/1200px-Kotlin_Icon.png",
    },

    {
      image:
        "https://s3-eu-west-1.amazonaws.com/bucketeer-688d8e11-8fc6-459f-bb52-26fd21452913/2020/03/AcA2LnWL_400x400.jpg",
    },
    {
      image:
        "https://images.crunchbase.com/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/erkxwhl1gd48xfhe2yld",
    },
    {
      image:
        "https://www.linuxuntu.com/wp-content/uploads/2023/04/MySQL-Logo.jpg",
    },
  ];

  const ref = useRef(null);
  const ref2 = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });
  const isInView2 = useInView(ref2, { once: true });

  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  useEffect(() => {
    if (isInView2) {
      mainControls.start("visibleText");
    }
  }, [isInView2]);
  const container = {
    hidden: { opacity: 1, scale: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15,
        ease: "easeInOut",
        delay: 1,
      },
    },
  };

  const containerTitle = {
    visibleText: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 1.5,
        type: "smooth",
      },
    },
    hidden: { opacity: 0.3 },
  };

  const item = {
    hidden: { opacity: 0, y: 55 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        type: "smooth",
      },
    },
  };

  return (
    <>
      <div className="skills" id="skills">
        <motion.div
          variants={containerTitle}
          animate={mainControls}
          initial="hidden"
          className="skills-title"
        >
          <h3>SKILLS</h3>
        </motion.div>
        <div className="skills-explaination">
          <p>
            <span ref={ref2}>Full-Stack</span> knowledge with front-end
            development as main expertise
          </p>
        </div>

        <div className="skills-languages">
          <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={mainControls}
            className="skills-languages-wrapper"
          >
            {img.map((el, index) => (
              <motion.div
                variants={item}
                key={index}
                className="skills-languages-img"
              >
                <img src={el.image} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};
