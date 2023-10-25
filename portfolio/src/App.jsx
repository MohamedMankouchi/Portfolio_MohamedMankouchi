import "./App.css";
import { Home } from "./components/Home";
import { Navigation } from "./components/Navigation";
import { About } from "./components/About";
import { Skills } from "./components/Skills";

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
