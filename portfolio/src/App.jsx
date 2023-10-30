import "./App.css";
import { Home } from "./components/Home";
import { Navigation } from "./components/Navigation";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import PageScroll from "react-page-scroll";
import { Contact } from "./components/Contact";

function App() {
  return (
    <>
      <Navigation />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
