import React from "react";
import "./home.css";
export const Home = () => {
  const specialWord = "<web>";
  return (
    <>
      <div className="home">
        <p>Hi! I'm Mohamed Mankouchi</p>
        <h1>
          Passionated <br />
          Full-Stack developer <br />
          that makes things for the <span>{specialWord}</span>
        </h1>
      </div>
    </>
  );
};
