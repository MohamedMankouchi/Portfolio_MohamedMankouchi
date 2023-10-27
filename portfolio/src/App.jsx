import "./App.css";
import { Home } from "./components/Home";
import { Navigation } from "./components/Navigation";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import PageScroll from "react-page-scroll";

function App() {
  return (
    <>
      <Navigation />
      <Home />
      <About />
      <Skills />
    </>
  );
}

export default App;
