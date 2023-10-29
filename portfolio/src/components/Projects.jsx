import React from "react";
import "./projects.css";
import Quiz from "./../assets/quiz.jpg";
import Github from "./../assets/githubLink.png";
import { Link } from "react-router-dom";
import Multipharma from "./../assets/Multipharma.png";
import Arrow from "./../assets/arrow.png";

const projects = [
  {
    name: "Quiz.IO",
    img: Quiz,
    desc: `Quiz.IO is an online quiz game that offers an enjoyable gaming
  experience with the ability to play alongside friends. It serves
  as a counterpart to 'skribbl.io,' a well-known online
  multiplayer drawing and guessing game`,
    githubLink: "https://github.com/MohamedMankouchi/Quiz-App",
    siteLink: "",
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
    githubLink: "https://github.com/MohamedMankouchi/SocketIO",
    siteLink: "https://chatpulse.onrender.com/",
    type: "Design",
  },
];
export const Projects = () => {
  return (
    <>
      <div className="projects">
        <div className="projects-title">
          <h3>PROJECTS</h3>
        </div>

        <div className="projects-explaination">
          <p>
            I have successfully <span>completed</span> various individual and
            company projects, showcasing my skills and expertise. To explore a
            wider range of my work, simply continue scrolling below to discover
            more examples of my craftsmanship.
          </p>
        </div>

        <div className="projects-card-container">
          {projects.map((el) => (
            <div className="projects-card">
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
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
