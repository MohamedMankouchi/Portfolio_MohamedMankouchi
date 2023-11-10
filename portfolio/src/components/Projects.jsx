import React, { useEffect, useRef } from "react";
import "./projects.css";
import Quiz from "./../assets/quiz.jpg";
import Github from "./../assets/githubLink.png";
import { Link } from "react-router-dom";
import Multipharma from "./../assets/Multipharma.png";
import Arrow from "./../assets/arrow.png";
import Decor from "./../assets/decor.png";
import { motion, useAnimation, useInView } from "framer-motion";

const projects = [
  {
    name: "Quiz.IO",
    img: Quiz,
    desc: `Quiz.IO is an online quiz game that offers an enjoyable gaming
  experience with the ability to play alongside friends. It serves
  as a counterpart to 'skribbl.io,' a well-known online
  multiplayer drawing and guessing game`,
    githubLink: "https://github.com/MohamedMankouchi/Quiz-App",
    siteLink: "https://quiz-io.onrender.com/",
    type: "Web",
  },
  {
    name: "ChatPulse",
    img: "https://miro.medium.com/v2/resize:fill:224:224/0*ae2aXeSITFOLHaB0.png",
    desc: `ChatPulse is a go-to platform for anonymous chatting and channel
    joining. Connect with others without revealing your identity.
    It's a simple and efficient way to engage in online
    conversations while prioritizing user privacy.`,
    githubLink: "https://github.com/MohamedMankouchi/SocketIO",
    siteLink: "https://chatpulse.onrender.com/",
    type: "Web",
  },
  {
    name: "Multipharma",
    img: Multipharma,
    desc: `Multipharma leads the Belgian pharmacy world as the largest cooperative. As a pioneer in pharmaceutical care, Multipharma wants to bring the pharmacist and the customer closer together by making high quality healthcare accessible and affordable to all.`,
    githubLink:
      "https://xd.adobe.com/view/4e2ffad9-b0bc-4a22-8a0f-9ae144c5baf8-1b7c/",
    siteLink:
      "https://xd.adobe.com/view/4e2ffad9-b0bc-4a22-8a0f-9ae144c5baf8-1b7c/",
    type: "Design",
  },
];
export const Projects = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const mainControls = useAnimation();
  const mainControls2 = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  useEffect(() => {
    if (isInView2) {
      mainControls2.start("visibleContainer");
    }
  }, [isInView2]);
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

  const container = {
    visibleContainer: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: "easeInOut",
        type: "smooth",
        staggerChildren: 0.5,
        delayChildren: 0.3,
      },
    },
    hidden: { opacity: 1, scale: 1 },
  };

  const item = {
    visibleContainer: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: "easeInOut",
        type: "smooth",
        duration: 0.5,
      },
    },
    hidden: { opacity: 0.3, scale: 0.98 },
  };
  return (
    <>
      <div className="projects" id="projects">
        <motion.div
          variants={containerTitle}
          initial="hidden"
          animate={mainControls}
          className="projects-title"
        >
          <h3>PROJECTS</h3>
        </motion.div>

        <div className="projects-explaination">
          <p ref={ref}>
            I have successfully <span>completed</span> various individual and
            company projects, showcasing my skills and expertise. To explore a
            wider range of my work, simply continue scrolling below to discover
            more examples of my craftsmanship.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={mainControls2}
          className="projects-card-container"
          ref={ref2}
        >
          <div className="decorContainer">
            <img src={Decor} />
          </div>
          {projects.map((el, index) => (
            <motion.div variants={item} key={index} className="projects-card">
              <Link to={el.githubLink} target="_blank">
                <div className="icon">
                  <img
                    src={
                      el.type == "Design"
                        ? "https://play-lh.googleusercontent.com/kaox1VteLsWAuNxPxhm8t4llaoyFhxzDjo9g4Hdf92bKdT_Sn6Yrdku6rApuc5ktirw"
                        : Github
                    }
                    alt=""
                  />
                </div>
              </Link>

              <div className="projects-card-img">
                <img src={el.img} />
              </div>

              <div className="projects-card-text">
                <h3>{el.name} </h3>
                <p>{el.desc}</p>
              </div>
              <Link to={el.siteLink} target="_blank">
                <div className="link">
                  <p>View project</p>
                  <img src={Arrow} />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};
