import React from "react";
import "./projects.css";
import Quiz from "./../assets/quiz.jpg";
import Github from "./../assets/githubLink.png";
import { Link } from "react-router-dom";
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
          <div className="projects-card">
            <Link
              to="https://github.com/MohamedMankouchi/Quiz-App"
              target="_blank"
            >
              <div className="icon">
                <img src={Github} alt="" />
              </div>
            </Link>

            <div className="projects-card-img">
              <img src={Quiz} />
            </div>

            <div className="projects-card-text">
              <h3>Quiz.IO </h3>
              <p>
                Quiz.IO is an online quiz game that offers an enjoyable gaming
                experience with the ability to play alongside friends. It serves
                as a counterpart to 'skribbl.io,' a well-known online
                multiplayer drawing and guessing game
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
