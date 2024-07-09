import { useEffect, useRef } from "react";
import "./projects.css";
import Quiz from "./../assets/quiz.jpg";
import Mate from "./../assets/Mate.jpg";
import Github from "./../assets/githubLink.png";
import { Link } from "react-router-dom";
import Arrow from "./../assets/arrow.png";
import Decor from "./../assets/decor.png";
import Store from "./../assets/applestore.png";
import Login from "./../assets/login.png";
import { motion, useAnimation, useInView } from "framer-motion";

const projects = [
  {
    name: "Mate",
    img: Mate,
    desc: `Mate is a cutting-edge digital platform designed to enhance and enrich the academic experience for Brussels students. It fosters a vibrant online community where students can study, collaborate, share knowledge, and support one another, creating an environment where everyone can reach their full potential.`,
    githubLink: "https://github.com/MohamedMankouchi/finalwork-mate",
    siteLink: "https://mate-g8jc.onrender.com",
    type: "Web",
  },
  {
    name: "Quiz.IO",
    img: Quiz,
    desc: `Quiz.IO is an online quiz game that offers an enjoyable gaming
  experience with the ability to play alongside friends. It serves
  as a counterpart to 'skribbl.io,' a well-known online
  multiplayer drawing and guessing game.`,
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
    name: "3D Apple store",
    img: Store,
    desc: `3D Apple Store is an experimental website where users can explore Apple products in three-dimensional (3D) space. This platform provides a unique and immersive experience, allowing visitors to view Apple's range of products from various angles and perspectives.`,
    githubLink: "https://github.com/MohamedMankouchi/3D",
    siteLink: "https://threed-applestore.onrender.com/",
    type: "Web",
  },

  {
    name: "Login system",
    img: Login,
    desc: `I have implemented a login system utilizing well-known authentication methods such as Google and GitHub. It provides a simple and secure way for users to authenticate themselves.`,
    githubLink: "https://github.com/MohamedMankouchi/LoginSystem",
    siteLink: "https://loginsystem-anzg.onrender.com/",
    type: "Web",
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
