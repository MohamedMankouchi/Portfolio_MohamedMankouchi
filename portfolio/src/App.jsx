import "./App.css";
import { Home } from "./components/Home";
import { Navigation } from "./components/Navigation";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import PageScroll from "react-page-scroll";
import { Contact } from "./components/Contact";
import { Loader } from "./components/Loader";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5500);

    return () => {
      clearTimeout();
    };
  }, []);
  return (
    <>
      {!isLoading && (
        <>
          <Navigation />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </>
      )}
      <Loader />
    </>
  );
}

export default App;
